-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: profolio
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rel_user_skill`
--

DROP TABLE IF EXISTS `rel_user_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rel_user_skill` (
  `user_id` varchar(100) NOT NULL,
  `skill_id` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`,`skill_id`),
  KEY `fk_rel_user_skill_tbl_user_id` (`user_id`),
  KEY `fk_rel_user_skill_tbl_skill_id` (`skill_id`),
  CONSTRAINT `fk_rel_user_skill_tbl_skill_id` FOREIGN KEY (`skill_id`) REFERENCES `tbl_skill` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_rel_user_skill_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rel_user_skill`
--

LOCK TABLES `rel_user_skill` WRITE;
/*!40000 ALTER TABLE `rel_user_skill` DISABLE KEYS */;
INSERT INTO `rel_user_skill` VALUES ('0a0000a6-8c29-18d5-818c-2959c25c0001','0a0000a6-8c2c-1b38-818c-2c6b53e60001'),('0a0000a6-8c29-18d5-818c-2959c25c0001','0a0000a6-8c2c-1b38-818c-2c6b53ec0003'),('0a0000a6-8c29-18d5-818c-2959c25c0001','0a0000a6-8c2d-1a84-818c-2df6a8190003');
/*!40000 ALTER TABLE `rel_user_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_auth_token`
--

DROP TABLE IF EXISTS `tbl_auth_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_auth_token` (
  `id` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `token_string` varchar(5000) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_auth_token_tbl_user_id` (`user_id`),
  CONSTRAINT `fk_tbl_auth_token_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_auth_token`
--

LOCK TABLES `tbl_auth_token` WRITE;
/*!40000 ALTER TABLE `tbl_auth_token` DISABLE KEYS */;
INSERT INTO `tbl_auth_token` VALUES ('0a0000a6-8b59-1160-818b-596178360000','2023-10-22 17:54:02','2023-10-22 17:54:02','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdW1lZGhrdW1hcjk2QGdtYWlsLmNvbSIsImlhdCI6MTY5ODAxMTY0MSwiZXhwIjoxNjk4MDU0ODQxfQ.fiaBsp555ojNptz3mXNVo9jTBKGGAg0J9bTj7THqPHw',0,'0a0000a6-8b59-1e3c-818b-592e57870001'),('0a0000a6-8b5a-10df-818b-5a1777ab0006','2023-10-22 21:12:49','2023-10-22 21:12:49','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZW5pZjgyMzUwQHdlaXJieS5jb20iLCJpYXQiOjE2OTgwMjM1NjksImV4cCI6MTY5ODA2Njc2OX0.xtaSSWe8n2z3Tld8XdfQzFn8zWYqoXCs1Rd91NE1k1U',0,'0a0000a6-8b5a-10df-818b-5a1549ef0005'),('0a0000a6-8b5a-1ae5-818b-5a1f53380003','2023-10-22 21:21:24','2023-10-22 21:21:24','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJub3NpY2U3MTg2QHdlcm1pbmsuY29tIiwiaWF0IjoxNjk4MDI0MDg0LCJleHAiOjE2OTgwNjcyODR9.JBFxBLpAtDnXkg-tau8tVKTbtDRmzDPSX_bNplTodSU',0,'0a0000a6-8b5a-1ae5-818b-5a1d3cf30001'),('0a0000a6-8b5a-1ae5-818b-5a4c11220009','2023-10-22 22:10:16','2023-10-22 22:10:16','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJub3NpY2U3MTg2QHdlcm1pbmsuY29tIiwiaWF0IjoxNjk4MDI3MDE2LCJleHAiOjE2OTgwNzAyMTZ9.nSgmBVdnY-p5RG_fkCdtrvsL23skU60Gld9j--AB6_4',0,'0a0000a6-8b5a-1ae5-818b-5a1d3cf30001'),('0a0000a6-8b5a-1cac-818b-5a0ef8190002','2023-10-22 21:03:32','2023-10-22 21:03:32','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdW1lZGhrdW1hcjk2QGdtYWlsLmNvbSIsImlhdCI6MTY5ODAyMzAxMiwiZXhwIjoxNjk4MDY2MjEyfQ.Ymx3PELeCIgzmSeK_3IZX3iuM8ifnpmwhtMZ5NUbP_w',0,'0a0000a6-8b59-1e3c-818b-592e57870001'),('0a0000a6-8b5a-1cac-818b-5a0fe0fa0003','2023-10-22 21:04:32','2023-10-22 21:04:32','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4aXdhamE4NjI1QHdpc25pY2suY29tIiwiaWF0IjoxNjk4MDIzMDcxLCJleHAiOjE2OTgwNjYyNzF9.cSwAxLbaRz7Tm9rCX-uGoR-rXlqDd7785SZzLbnrmhY',0,'0a0000a6-8b5a-1cac-818b-5a0d851e0001'),('0a0000a6-8bd9-1e45-818b-d9f07dc70004','2023-11-16 16:01:39','2023-11-16 16:01:39','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYW5veG9qNDY3QG5leHh0ZXJwLmNvbSIsImlhdCI6MTcwMDE2ODQ5OCwiZXhwIjoxNzAwMjExNjk4fQ.gJCR9XOe8rLohjPqx0YxlUb8-6-t5FjgbTprNU-QHJ0',0,'0a0000a6-8bd9-1e45-818b-d9ee93be0001'),('0a0000a6-8bff-1f67-818b-ffb14ff40000','2023-11-23 23:58:12','2023-12-01 00:40:59','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYW5veG9qNDY3QG5leHh0ZXJwLmNvbSIsImlhdCI6MTcwMDgwMTg5MiwiZXhwIjoxNzAwODQ1MDkyfQ.YHoa6XrxZnZvm9JuLASvoc6dbWNopXUnk04ScvVDjVE',1,'0a0000a6-8bd9-1e45-818b-d9ee93be0001'),('0a0000a6-8c23-18c0-818c-23ccc3f70000','2023-12-01 00:14:31','2023-12-01 00:14:31','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYW5veG9qNDY3QG5leHh0ZXJwLmNvbSIsImlhdCI6MTcwMTQwNzY3MSwiZXhwIjoxNzAxNDUwODcxfQ.bpY_TaUzdLQAGBRyD0N6VJdZ_yt7yiTfxhbDnMIx1dA',0,'0a0000a6-8bd9-1e45-818b-d9ee93be0001'),('0a0000a6-8c24-1486-818c-243944e70000','2023-12-01 02:13:02','2023-12-01 02:14:14','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWRyYWRhcnppQGd1ZnVtLmNvbSIsImlhdCI6MTcwMTQxNDc4MiwiZXhwIjoxNzAxNDU3OTgyfQ.d_ro5aApMigO87AabjzJ_1DstOVKiWxeQeX-HTagJbA',1,'0a0000a6-8c24-1d4d-818c-242e46ab0001'),('0a0000a6-8c24-1d4d-818c-24302d7e0002','2023-12-01 02:03:06','2023-12-01 02:03:06','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWRyYWRhcnppQGd1ZnVtLmNvbSIsImlhdCI6MTcwMTQxNDE4NiwiZXhwIjoxNzAxNDU3Mzg2fQ.eLwFkYDFpyMxsZuWwuhTCdJDxkpxfQCj-PZv9ZFS2-E',0,'0a0000a6-8c24-1d4d-818c-242e46ab0001'),('0a0000a6-8c24-1d4d-818c-243079120004','2023-12-01 02:03:26','2023-12-01 02:09:51','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWRyYWRhcnppQGd1ZnVtLmNvbSIsImlhdCI6MTcwMTQxNDIwNSwiZXhwIjoxNzAxNDU3NDA1fQ.lh2oy20h3bWXPQH_zsU9kuR5KxgFFtvcegXTK8K-H3A',1,'0a0000a6-8c24-1d4d-818c-242e46ab0001'),('0a0000a6-8c26-1206-818c-26c232aa0000','2023-12-01 14:01:50','2023-12-01 14:01:50','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWRyYWRhcnppQGd1ZnVtLmNvbSIsImlhdCI6MTcwMTQ1NzMxMCwiZXhwIjoxNzAxNTAwNTEwfQ.9pQYyXC_uyIb9ppn4_c9psuVj5F3cJtRE5ofsPhi2NM',0,'0a0000a6-8c24-1d4d-818c-242e46ab0001'),('0a0000a6-8c26-12c6-818c-26c305ec0000','2023-12-01 14:02:44','2023-12-01 14:02:44','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWRyYWRhcnppQGd1ZnVtLmNvbSIsImlhdCI6MTcwMTQ1NzM2NCwiZXhwIjoxNzAxNTAwNTY0fQ.jgglXG913dcnimqbVyU8w8onaDL9P8poB_T4dxfC0aA',0,'0a0000a6-8c24-1d4d-818c-242e46ab0001'),('0a0000a6-8c26-1e5c-818c-26bee4900000','2023-12-01 13:58:14','2023-12-01 13:58:14','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWRyYWRhcnppQGd1ZnVtLmNvbSIsImlhdCI6MTcwMTQ1NzA5MywiZXhwIjoxNzAxNTAwMjkzfQ.BFu7hLfDNTWI--RlTO1_UmefDzcQfxZQxehiq04rXcs',0,'0a0000a6-8c24-1d4d-818c-242e46ab0001'),('0a0000a6-8c29-18d5-818c-295ca0740003','2023-12-02 02:09:45','2023-12-02 02:09:45','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWNleW85MjkxQG5vdGVkbnMuY29tIiwiaWF0IjoxNzAxNTAwOTg1LCJleHAiOjE3MDE1NDQxODV9.iCma3CeGJSoKX7thp264sQnnLyqWFXCJUwV_5iODl9o',0,'0a0000a6-8c29-18d5-818c-2959c25c0001'),('0a0000a6-8c2c-152b-818c-2c05b68f0000','2023-12-02 14:33:41','2023-12-02 14:33:41','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWNleW85MjkxQG5vdGVkbnMuY29tIiwiaWF0IjoxNzAxNTQ1NjIxLCJleHAiOjE3MDE1ODg4MjF9.ju536t_QUyVvd-mge3ZE31HR7SQKzuf5SovJshd9d9Y',0,'0a0000a6-8c29-18d5-818c-2959c25c0001'),('0a0000a6-8c2c-1891-818c-2cc90daf0000','2023-12-02 18:07:03','2023-12-02 18:07:03','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWNleW85MjkxQG5vdGVkbnMuY29tIiwiaWF0IjoxNzAxNTU4NDIyLCJleHAiOjE3MDE2MDE2MjJ9.xLAODsbzeLyN4Ip7EVZNi51t3IUKAvmgxU2tTrL5RtQ',0,'0a0000a6-8c29-18d5-818c-2959c25c0001'),('0a0000a6-8c2d-1a84-818c-2ded455d0002','2023-12-02 23:26:14','2023-12-02 23:26:14','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZWJlc28yMTM2QG1haW5vai5jb20iLCJpYXQiOjE3MDE1Nzc1NzMsImV4cCI6MTcwMTYyMDc3M30.ORYEbeRS3wfiOCAUqaG8QywXuS5b1cE5jVihGK8gkq0',0,'0a0000a6-8c2d-1a84-818c-2deab0030000'),('0a0000a6-8c2d-1e5a-818c-2dda13a4000d','2023-12-02 23:05:16','2023-12-02 23:05:16','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3YXllcmU2NTY0QG5vdGVkbnMuY29tIiwiaWF0IjoxNzAxNTc2MzE1LCJleHAiOjE3MDE2MTk1MTV9.u4rNQ9T6dyyXog4kOJsVq3fYH-ytx66GmbgoZ_fYPK4',0,'0a0000a6-8c2d-1e5a-818c-2dd8eda3000c');
/*!40000 ALTER TABLE `tbl_auth_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_certification`
--

DROP TABLE IF EXISTS `tbl_certification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_certification` (
  `id` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `name` varchar(500) NOT NULL,
  `provider` varchar(500) NOT NULL,
  `issued_on` date NOT NULL,
  `valid_until` date DEFAULT NULL,
  `credential_id` varchar(500) DEFAULT NULL,
  `url` varchar(1000) DEFAULT NULL,
  `user_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_certificate_tbl_user_id` (`user_id`),
  CONSTRAINT `fk_tbl_certificate_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_certification`
--

LOCK TABLES `tbl_certification` WRITE;
/*!40000 ALTER TABLE `tbl_certification` DISABLE KEYS */;
INSERT INTO `tbl_certification` VALUES ('0a0000a6-8c2d-18c7-818c-2df8fbdb0009','2023-12-02 23:39:01','2023-12-02 23:39:01','linux','red hat','2023-12-02','2024-12-02','sdffgsiufgsiuygsiuy','xyz','0a0000a6-8c29-18d5-818c-2959c25c0001'),('0a0000a6-8c2d-18c7-818c-2df8fbdc000a','2023-12-02 23:39:01','2023-12-02 23:39:01','Docker','Google','2023-12-02','2024-12-02','sdffgsiufgsiuygsiuy','xyz','0a0000a6-8c29-18d5-818c-2959c25c0001');
/*!40000 ALTER TABLE `tbl_certification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_education`
--

DROP TABLE IF EXISTS `tbl_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_education` (
  `id` varchar(100) NOT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `institution_name` varchar(200) NOT NULL,
  `degree_name` varchar(200) DEFAULT NULL,
  `grade` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `user_id` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_education_tbl_user_id` (`user_id`),
  CONSTRAINT `fk_tbl_education_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_education`
--

LOCK TABLES `tbl_education` WRITE;
/*!40000 ALTER TABLE `tbl_education` DISABLE KEYS */;
INSERT INTO `tbl_education` VALUES ('0a0000a6-8c2d-18c7-818c-2df8faea0000','2023-12-02','2025-12-02','Purdue','MSCS','A','MSCS in Purdue','Indiana','0a0000a6-8c29-18d5-818c-2959c25c0001','2023-12-02 23:39:01','2023-12-02 23:39:01'),('0a0000a6-8c2d-18c7-818c-2df8faf60001','2014-12-02','2018-12-02','VTU','BE','A','BE in VTU','Karnataka','0a0000a6-8c29-18d5-818c-2959c25c0001','2023-12-02 23:39:01','2023-12-02 23:39:01');
/*!40000 ALTER TABLE `tbl_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_external_link`
--

DROP TABLE IF EXISTS `tbl_external_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_external_link` (
  `id` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `name` varchar(500) NOT NULL,
  `url` varchar(5000) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_external_link_tbl_user_id` (`user_id`),
  CONSTRAINT `fk_tbl_external_link_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_external_link`
--

LOCK TABLES `tbl_external_link` WRITE;
/*!40000 ALTER TABLE `tbl_external_link` DISABLE KEYS */;
INSERT INTO `tbl_external_link` VALUES ('0a0000a6-8c2d-18c7-818c-2df8fb810005','2023-12-02 23:39:01','2023-12-02 23:39:01','Linkedin','xyz','0a0000a6-8c29-18d5-818c-2959c25c0001'),('0a0000a6-8c2d-18c7-818c-2df8fb820006','2023-12-02 23:39:01','2023-12-02 23:39:01','Instagram','xyz','0a0000a6-8c29-18d5-818c-2959c25c0001');
/*!40000 ALTER TABLE `tbl_external_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_media`
--

DROP TABLE IF EXISTS `tbl_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_media` (
  `id` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `url` varchar(5000) NOT NULL,
  `file_name` varchar(1000) NOT NULL,
  `category` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_media_tbl_user_id` (`user_id`),
  CONSTRAINT `fk_tbl_media_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_media`
--

LOCK TABLES `tbl_media` WRITE;
/*!40000 ALTER TABLE `tbl_media` DISABLE KEYS */;
INSERT INTO `tbl_media` VALUES ('0a0000a6-8bff-193e-818b-ffca36450000','2023-11-24 00:25:24','2023-11-24 00:25:24','https://storage.googleapis.com/download/storage/v1/b/profolio-media-bucket/o/user-data%2F0a0000a6-8b59-143a-818b-59c5906100012023-11-24T00:25:23.739644900.jpg?generation=1700803524425663&alt=media','user-data/0a0000a6-8b59-143a-818b-59c5906100012023-11-24T00:25:23.739644900.jpg','PROFILE_PICTURE','0a0000a6-8b59-143a-818b-59c590610001'),('0a0000a6-8c27-172e-818c-27d8a79f0000','2023-12-01 19:05:59','2023-12-02 02:11:03','https://storage.googleapis.com/download/storage/v1/b/profolio-media-bucket/o/user-data%2F0a0000a6-8c24-1d4d-818c-242e46ab00012023-12-02T02:11:02.178998600.jpg?generation=1701501062596398&alt=media','user-data/0a0000a6-8c24-1d4d-818c-242e46ab00012023-12-02T02:11:02.178998600.jpg','PROFILE_PICTURE','0a0000a6-8c24-1d4d-818c-242e46ab0001'),('0a0000a6-8c29-18d5-818c-295f44570004','2023-12-02 02:12:38','2023-12-02 02:12:38','https://storage.googleapis.com/download/storage/v1/b/profolio-media-bucket/o/user-data%2F0a0000a6-8c29-18d5-818c-2959c25c00012023-12-02T02:12:38.154636300.jpg?generation=1701501158563010&alt=media','user-data/0a0000a6-8c29-18d5-818c-2959c25c00012023-12-02T02:12:38.154636300.jpg','PROFILE_PICTURE','0a0000a6-8c29-18d5-818c-2959c25c0001'),('0a0000a6-8c2d-1e5a-818c-2ddadd98000e','2023-12-02 23:06:08','2023-12-02 23:06:08','https://storage.googleapis.com/download/storage/v1/b/profolio-media-bucket/o/user-data%2F0a0000a6-8c2d-1e5a-818c-2dd8eda3000c2023-12-02T23:06:06.996244300.jpg?generation=1701576368550231&alt=media','user-data/0a0000a6-8c2d-1e5a-818c-2dd8eda3000c2023-12-02T23:06:06.996244300.jpg','PROFILE_PICTURE','0a0000a6-8c2d-1e5a-818c-2dd8eda3000c');
/*!40000 ALTER TABLE `tbl_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_one_time_password`
--

DROP TABLE IF EXISTS `tbl_one_time_password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_one_time_password` (
  `id` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `otp_string` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_one_time_password_tbl_user_id` (`user_id`),
  CONSTRAINT `fk_tbl_one_time_password_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_one_time_password`
--

LOCK TABLES `tbl_one_time_password` WRITE;
/*!40000 ALTER TABLE `tbl_one_time_password` DISABLE KEYS */;
INSERT INTO `tbl_one_time_password` VALUES ('0a0000a6-8b59-143a-818b-59c5905a0000','2023-10-22 19:43:26','2023-10-22 19:43:26','472k4h','0a0000a6-8b59-143a-818b-59c590610001'),('0a0000a6-8b59-1ab5-818b-59faccdc0000','2023-10-22 20:41:33','2023-10-22 20:41:33','Y34hPL','0a0000a6-8b59-1ab5-818b-59facce40001'),('0a0000a6-8b59-1e3c-818b-592e577e0000','2023-10-22 16:58:13','2023-10-22 16:58:13','DUxVWi','0a0000a6-8b59-1e3c-818b-592e57870001'),('0a0000a6-8b5a-10df-818b-5a1549ef0004','2023-10-22 21:10:28','2023-10-22 21:10:28','uXxIzm','0a0000a6-8b5a-10df-818b-5a1549ef0005'),('0a0000a6-8b5a-10df-818b-5a18612f0007','2023-10-22 21:13:49','2023-10-22 21:13:49','aQT4mm','0a0000a6-8b5a-10df-818b-5a1549ef0005'),('0a0000a6-8b5a-1ae5-818b-5a1d3ced0000','2023-10-22 21:19:09','2023-10-22 21:19:09','GO4hrk','0a0000a6-8b5a-1ae5-818b-5a1d3cf30001'),('0a0000a6-8b5a-1ae5-818b-5a1e660a0002','2023-10-22 21:20:24','2023-10-22 21:20:24','oi263G','0a0000a6-8b5a-1ae5-818b-5a1d3cf30001'),('0a0000a6-8b5a-1ae5-818b-5a2c9a130004','2023-10-22 21:35:56','2023-10-22 21:35:56','vCehXO','0a0000a6-8b5a-1ae5-818b-5a2c9a140005'),('0a0000a6-8b5a-1ae5-818b-5a38b3a60006','2023-10-22 21:49:10','2023-10-22 21:49:10','VgGXIK','0a0000a6-8b5a-1ae5-818b-5a38b3a60007'),('0a0000a6-8b5a-1ae5-818b-5a4b520d0008','2023-10-22 22:09:28','2023-10-22 22:09:28','M9Eua3','0a0000a6-8b5a-1ae5-818b-5a38b3a60007'),('0a0000a6-8b5a-1cac-818b-5a0d85180000','2023-10-22 21:01:59','2023-10-22 21:01:59','Gl0atB','0a0000a6-8b5a-1cac-818b-5a0d851e0001'),('0a0000a6-8bd9-1e45-818b-d9ee93b70000','2023-11-16 15:59:38','2023-11-16 15:59:38','pFIQjt','0a0000a6-8bd9-1e45-818b-d9ee93be0001'),('0a0000a6-8bd9-1e45-818b-d9ef87d00002','2023-11-16 16:00:36','2023-11-16 16:00:36','7ThdLV','0a0000a6-8b5a-1ae5-818b-5a38b3a60007'),('0a0000a6-8bd9-1e45-818b-d9efbe900003','2023-11-16 16:00:50','2023-11-16 16:00:50','QuTntT','0a0000a6-8bd9-1e45-818b-d9ee93be0001'),('0a0000a6-8c23-1ea0-818c-23ceef230000','2023-12-01 00:16:53','2023-12-01 00:16:53','ALScbC','0a0000a6-8bd9-1e45-818b-d9ee93be0001'),('0a0000a6-8c24-1d4d-818c-242e46a70000','2023-12-01 02:01:04','2023-12-01 02:01:04','NY7BVD','0a0000a6-8c24-1d4d-818c-242e46ab0001'),('0a0000a6-8c24-1d4d-818c-243063000003','2023-12-01 02:03:20','2023-12-01 02:03:20','27s2ku','0a0000a6-8c24-1d4d-818c-242e46ab0001'),('0a0000a6-8c29-18d5-818c-2959c2460000','2023-12-02 02:06:40','2023-12-02 02:06:40','K5JhEj','0a0000a6-8c29-18d5-818c-2959c25c0001'),('0a0000a6-8c29-18d5-818c-295c3b920002','2023-12-02 02:09:20','2023-12-02 02:09:20','MNi2bq','0a0000a6-8c29-18d5-818c-2959c25c0001'),('0a0000a6-8c2d-1a84-818c-2deab02c0001','2023-12-02 23:23:27','2023-12-02 23:23:27','QPyQSq','0a0000a6-8c2d-1a84-818c-2deab0030000'),('0a0000a6-8c2d-1e5a-818c-2dd8eda3000b','2023-12-02 23:04:03','2023-12-02 23:04:03','M2DHjv','0a0000a6-8c2d-1e5a-818c-2dd8eda3000c'),('0a64f9a4-8c27-1f54-818c-274f80930000','2023-12-01 16:36:14','2023-12-01 16:36:14','onfPor','0a64f9a4-8c27-1f54-818c-274f80a10001'),('0a64f9a4-8c27-1f54-818c-2750c2ee0002','2023-12-01 16:37:36','2023-12-01 16:37:36','RhSDB2','0a64f9a4-8c27-1f54-818c-2750c2ee0003'),('0a64f9a4-8c27-1f54-818c-27526cb70004','2023-12-01 16:39:22','2023-12-01 16:39:22','0Hm3dC','0a64f9a4-8c27-1f54-818c-2750c2ee0003');
/*!40000 ALTER TABLE `tbl_one_time_password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_project`
--

DROP TABLE IF EXISTS `tbl_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_project` (
  `id` varchar(100) NOT NULL,
  `name` varchar(500) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `url` varchar(1000) DEFAULT NULL,
  `user_id` varchar(100) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_project_tbl_user_id` (`user_id`),
  CONSTRAINT `fk_tbl_project_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_project`
--

LOCK TABLES `tbl_project` WRITE;
/*!40000 ALTER TABLE `tbl_project` DISABLE KEYS */;
INSERT INTO `tbl_project` VALUES ('0a0000a6-8c2d-18c7-818c-2df8fbb10007','profolio','xyz','xyz','0a0000a6-8c29-18d5-818c-2959c25c0001','2023-12-02','2024-12-02','2023-12-02 23:39:01','2023-12-02 23:39:01'),('0a0000a6-8c2d-18c7-818c-2df8fbb20008','tecnex','xyz','xyz','0a0000a6-8c29-18d5-818c-2959c25c0001','2023-12-02','2024-12-02','2023-12-02 23:39:01','2023-12-02 23:39:01');
/*!40000 ALTER TABLE `tbl_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_skill`
--

DROP TABLE IF EXISTS `tbl_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_skill` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tbl_skill_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_skill`
--

LOCK TABLES `tbl_skill` WRITE;
/*!40000 ALTER TABLE `tbl_skill` DISABLE KEYS */;
INSERT INTO `tbl_skill` VALUES ('0a0000a6-8c2c-1b38-818c-2c6b53e60001','java','2023-12-02 16:24:41','2023-12-02 16:24:41'),('0a0000a6-8c2c-1b38-818c-2c6b53ec0003','spring','2023-12-02 16:24:41','2023-12-02 16:24:41'),('0a0000a6-8c2d-11b3-818c-2d4283f60000','mysql','2023-12-02 20:19:43','2023-12-02 20:19:43'),('0a0000a6-8c2d-1a84-818c-2df6a8190003','singing','2023-12-02 23:36:29','2023-12-02 23:36:29'),('0a0000a6-8c2d-1da3-818c-2d710ede0008','mysqlite','2023-12-02 21:10:33','2023-12-02 21:10:33');
/*!40000 ALTER TABLE `tbl_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user` (
  `id` varchar(100) NOT NULL,
  `name` varchar(500) NOT NULL,
  `home_location` varchar(500) DEFAULT NULL,
  `current_location` varchar(500) DEFAULT NULL,
  `about` varchar(5000) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(1000) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `role` varchar(100) DEFAULT NULL,
  `profile_picture_url` varchar(255) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `phone` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `template_preference` int NOT NULL DEFAULT '1',
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user`
--

LOCK TABLES `tbl_user` WRITE;
/*!40000 ALTER TABLE `tbl_user` DISABLE KEYS */;
INSERT INTO `tbl_user` VALUES ('0a0000a6-8b59-143a-818b-59c590610001','john wick',NULL,NULL,NULL,'wanot87527@wisnick.com','$2a$10$oIU9eww.EPzv4pixb7udi.jsnfbmrOq18q45GobFtmo01p4MgNB1i','2023-10-22 19:43:26','2023-11-16 19:40:05','USER','https://storage.googleapis.com/download/storage/v1/b/profolio-media-bucket/o/user-data%2F0a0000a6-8b59-143a-818b-59c5906100012023-11-16T19:40:04.485520.jpg?generation=1700181605165969&alt=media',0,NULL,NULL,1,NULL),('0a0000a6-8b59-1ab5-818b-59facce40001','colr',NULL,NULL,NULL,'najasiw961@weirby.com','$2a$10$DUw.LFqFXGuG7OvPMHeAKuvy.PSkCntukvNJTg9Vq0tPdvMpb15je','2023-10-22 20:41:33','2023-10-22 20:42:36','USER',NULL,1,NULL,NULL,1,NULL),('0a0000a6-8b59-1e3c-818b-592e57870001','john doe',NULL,NULL,NULL,'sumedhkumar96@gmail.com','$2a$10$rBOcvK9I4EmmHCW0cIGijO9jln3LMvc0WZPW/Xl0T3tSMEJ4Avb1i','2023-10-22 16:58:13','2023-10-22 16:58:13','USER',NULL,1,NULL,NULL,1,NULL),('0a0000a6-8b5a-10df-818b-5a1549ef0005','mastodon',NULL,NULL,NULL,'penif82350@weirby.com','$2a$10$HIqEPzS4mMYxXPDw8u27R.4emr.iizCUuTk3SC6xnsl8ozZcnYE6G','2023-10-22 21:10:28','2023-10-22 21:12:26','USER',NULL,1,NULL,NULL,1,NULL),('0a0000a6-8b5a-1ae5-818b-5a1d3cf30001','mastodon',NULL,NULL,NULL,'nosice7186@wermink.com','$2a$10$krgijrjSxEZpbA1L4IgoUOJQuxZVA3dxqLi27u1EvefPSEHsLLzaa','2023-10-22 21:19:09','2023-10-22 21:19:54','USER',NULL,1,NULL,NULL,1,NULL),('0a0000a6-8b5a-1ae5-818b-5a2c9a140005','mastodon',NULL,NULL,NULL,'saboyik885@weirby.com','$2a$10$rLDtHbnv.tIjFbwehQPbD.PpR/kB7vrK5aPErvPWRtzU5eyb7vJ8a','2023-10-22 21:35:56','2023-10-22 21:35:56','USER',NULL,0,NULL,NULL,1,NULL),('0a0000a6-8b5a-1ae5-818b-5a38b3a60007','mastodon',NULL,NULL,NULL,'petoci6869@wermink.com','$2a$10$mo1zE0uEpfZaWrfQqkJxF.RCUEAXeS37oIx7KK7exV7c9wOTQblEq','2023-10-22 21:49:10','2023-10-22 22:10:05','USER',NULL,1,NULL,NULL,1,NULL),('0a0000a6-8b5a-1cac-818b-5a0d851e0001','mastodon',NULL,NULL,NULL,'xiwaja8625@wisnick.com','$2a$10$TW9njdiqaYAdCKZTvNnPZeXC1jMaJ2JGf2lOICyuHwga1yTbDFMKK','2023-10-22 21:01:59','2023-10-22 21:03:08','USER',NULL,1,NULL,NULL,1,NULL),('0a0000a6-8bd9-1e45-818b-d9ee93be0001','newuser',NULL,NULL,NULL,'canoxoj467@nexxterp.com','$2a$10$dwus3qVAnje2I54fBuFRTerF.tZgoOpql8DpiU2PG5HNr2EB7.BxS','2023-11-16 15:59:38','2023-12-01 00:16:49','USER',NULL,0,NULL,NULL,1,NULL),('0a0000a6-8c24-1d4d-818c-242e46ab0001','red',NULL,NULL,NULL,'redradarzi@gufum.com','$2a$10$/bOZR27DDjrpIajDqRXoneQrp4DAKJRLFrHiUtyD14ex3fHFoRjPq','2023-12-01 02:01:04','2023-12-01 02:03:00','USER',NULL,1,NULL,NULL,1,NULL),('0a0000a6-8c29-18d5-818c-2959c25c0001','akon','Africa','USA','I am an old singer','paceyo9291@notedns.com','$2a$10$gIGSB6CRDrK4UlKaKfCiPOEbPHX8Z9kYgTLDhiyZHuu9Pd6AFnkDy','2023-12-02 02:06:40','2023-12-02 23:39:01','USER',NULL,1,'7664537734','singer',1,NULL),('0a0000a6-8c2d-1a84-818c-2deab0030000','wari',NULL,NULL,NULL,'cebeso2136@mainoj.com','$2a$10$HYTP43out//GhGO4g9v9HOkJcmBgNCFCZEiAHOx8nhwUylWfJnbgi','2023-12-02 23:23:26','2023-12-02 23:25:28','USER',NULL,1,NULL,NULL,1,NULL),('0a0000a6-8c2d-1e5a-818c-2dd8eda3000c','wari',NULL,NULL,NULL,'wayere6564@notedns.com','$2a$10$5W0wskejtrGl7HDGsjlPJuMbYdIUHHCe07LMNNXkM.OKG9RRU4SB.','2023-12-02 23:04:03','2023-12-02 23:04:38','USER',NULL,1,NULL,NULL,1,NULL),('0a64f9a4-8c27-1f54-818c-274f80a10001','xyz',NULL,NULL,NULL,'ssfs@gmail.com','$2a$10$hhvr1Klgcx4EIYzyM6C32OzD5Kjx3EOgUeGOIYB9wu2cvtROZFL5y','2023-12-01 16:36:14','2023-12-01 16:36:14','USER',NULL,0,NULL,NULL,1,NULL),('0a64f9a4-8c27-1f54-818c-2750c2ee0003','ye',NULL,NULL,NULL,'yevan14274@nasmis.com','$2a$10$w3u5etUoMkZNvQWI6QxwkeyrkgKzSn91JS64BuORsTKbZiugjL/tS','2023-12-01 16:37:36','2023-12-01 16:38:22','USER',NULL,0,NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `tbl_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_work_experience`
--

DROP TABLE IF EXISTS `tbl_work_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_work_experience` (
  `id` varchar(100) NOT NULL,
  `organization_name` varchar(200) DEFAULT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_work_experience_tbl_user_id` (`user_id`),
  CONSTRAINT `fk_tbl_work_experience_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_work_experience`
--

LOCK TABLES `tbl_work_experience` WRITE;
/*!40000 ALTER TABLE `tbl_work_experience` DISABLE KEYS */;
INSERT INTO `tbl_work_experience` VALUES ('0a0000a6-8c2d-18c7-818c-2df8fb480002','Dell','2019-12-02','2022-12-02','xyz','SWE2','Bangalore','0a0000a6-8c29-18d5-818c-2959c25c0001','2023-12-02 23:39:01','2023-12-02 23:39:01'),('0a0000a6-8c2d-18c7-818c-2df8fb490003','Google','2019-12-02','2023-12-02','xyz','SWE3','Bangalore','0a0000a6-8c29-18d5-818c-2959c25c0001','2023-12-02 23:39:01','2023-12-02 23:39:01'),('0a0000a6-8c2d-18c7-818c-2df8fb490004','Capgemini','2013-12-02','2021-12-02','xyz','SWE','Bangalore','0a0000a6-8c29-18d5-818c-2959c25c0001','2023-12-02 23:39:01','2023-12-02 23:39:01');
/*!40000 ALTER TABLE `tbl_work_experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'profolio'
--

--
-- Dumping routines for database 'profolio'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-02 23:43:36
