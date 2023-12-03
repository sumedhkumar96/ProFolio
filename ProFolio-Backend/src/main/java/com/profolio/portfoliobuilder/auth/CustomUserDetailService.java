package com.profolio.portfoliobuilder.auth;

import com.profolio.portfoliobuilder.exceptions.CustomException;
import com.profolio.portfoliobuilder.models.constants.GeneralConstants;
import com.profolio.portfoliobuilder.models.entities.User;
import com.profolio.portfoliobuilder.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User loadUserByUsername(String username) {
        return userRepository.findByEmail(username).orElseThrow(() -> new CustomException(
                GeneralConstants.USER_NOT_FOUND,
                GeneralConstants.TRY_AGAIN_WITH_VALID_USER,
                HttpStatus.NOT_FOUND));
    }
}
