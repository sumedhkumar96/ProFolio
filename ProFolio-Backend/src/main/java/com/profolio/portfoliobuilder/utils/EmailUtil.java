package com.profolio.portfoliobuilder.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailUtil {
    private static final String SIGNUP_OTP_SUBJECT = "ProFolio Email Verification";
    private static final String SIGNUP_OTP_BODY = "Welcome to ProFolio. Your OTP is %s";
    @Value("${spring.mail.username:profol.io@outlook.com}")
    private String fromEmailAddress;
    @Autowired
    private JavaMailSender mailSender;

    public void sendSignupOtp(String to, String otp) {
        sendNewMail(to, SIGNUP_OTP_SUBJECT, String.format(SIGNUP_OTP_BODY, otp));
    }

    public void sendNewMail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmailAddress);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);
    }
}
