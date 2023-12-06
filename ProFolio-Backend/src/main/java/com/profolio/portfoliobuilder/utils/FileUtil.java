package com.profolio.portfoliobuilder.utils;

import com.google.cloud.storage.*;
import com.profolio.portfoliobuilder.exceptions.CustomException;
import com.profolio.portfoliobuilder.models.constants.GeneralConstants;
import com.profolio.portfoliobuilder.models.dtos.FileUploadDTO;
import org.apache.tika.Tika;
import org.apache.tika.mime.MimeType;
import org.apache.tika.mime.MimeTypeException;
import org.apache.tika.mime.MimeTypes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ExecutorService;

/**
 * The type File util.
 */
@Component
public class FileUtil {
    private static final List<String> ALLOWED_IMAGE_TYPES = Arrays.asList(".gif", ".jpeg", ".jpg", ".png");
    @Value("${gcp.dir.name}")
    private String gcpDirectoryName;
    @Value("${gcp.bucket.id}")
    private String gcpBucketId;
    @Autowired
    private Storage storage;
    @Autowired
    private Bucket bucket;
    @Autowired
    private Tika tika;
    @Autowired
    private ExecutorService executorService;

    /**
     * Gets file extension.
     *
     * @param contentType the content type
     * @return the file extension
     * @throws MimeTypeException the mime type exception
     */
    public String getFileExtension(String contentType) throws MimeTypeException {
        MimeTypes allTypes = MimeTypes.getDefaultMimeTypes();
        MimeType type = allTypes.forName(contentType);
        return type.getExtension();
    }

    /**
     * Gets file content type.
     *
     * @param multipartFile the multipart file
     * @return the file content type
     * @throws IOException the io exception
     */
    public String getFileContentType(MultipartFile multipartFile) throws IOException {
        return tika.detect(multipartFile.getBytes());
    }

    /**
     * Upload image file file upload dto.
     *
     * @param userId           the user id
     * @param multipartFile    the multipart file
     * @param existingFileName the existing file name
     * @return the file upload dto
     */
    public FileUploadDTO uploadImageFile(String userId, MultipartFile multipartFile, String existingFileName) {
        String contentType = null;
        String fileExtension = null;
        try {
            contentType = getFileContentType(multipartFile);
            fileExtension = getFileExtension(contentType);
        } catch (Exception ex) {
            throw new CustomException(
                    "Error occurred while processing the file",
                    GeneralConstants.TRY_AGAIN_REMEDIATION_MESSAGE,
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!ALLOWED_IMAGE_TYPES.contains(fileExtension)) {
            throw new CustomException(
                    "Invalid image file",
                    "Try again with valid image file",
                    HttpStatus.BAD_REQUEST);
        }
        String fileName = gcpDirectoryName +
                "/" +
                userId +
                LocalDateTime.now() +
                fileExtension;
        FileUploadDTO fileUploadDTO = null;
        try {
            fileUploadDTO = uploadFileToTheStorage(fileName, multipartFile);
        } catch (Exception ex) {
            throw new CustomException(
                    "Error occurred while uploading the file",
                    GeneralConstants.TRY_AGAIN_REMEDIATION_MESSAGE,
                    HttpStatus.BAD_REQUEST);
        }

        // deleting old profile picture
        if (existingFileName != null) {
            executorService.submit(() -> deleteFileFromStorage(existingFileName));
        }

        return fileUploadDTO;
    }

    /**
     * Upload file to the storage file upload dto.
     *
     * @param fileName      the file name
     * @param multipartFile the multipart file
     * @return the file upload dto
     * @throws IOException the io exception
     */
    public FileUploadDTO uploadFileToTheStorage(String fileName, MultipartFile multipartFile) throws IOException {
        BlobInfo blobInfo = BlobInfo.newBuilder(gcpBucketId, fileName)
                .setAcl(new ArrayList<>(Collections.singletonList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER))))
                .build();
        Blob blob = storage.create(blobInfo, multipartFile.getBytes());
        FileUploadDTO fileUploadDTO = new FileUploadDTO();
        fileUploadDTO.setUrl(blob.getMediaLink());
        fileUploadDTO.setName(blob.getName());
        return fileUploadDTO;
    }

    /**
     * Delete file from storage.
     *
     * @param fileName the file name
     */
    public void deleteFileFromStorage(String fileName) {
        BlobId blobId = BlobId.of(gcpBucketId, fileName);
        storage.delete(blobId);
    }
}
