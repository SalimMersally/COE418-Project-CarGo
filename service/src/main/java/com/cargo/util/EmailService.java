
package com.cargo.util;


import jakarta.mail.internet.MimeMessage;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class EmailService {


    private  JavaMailSender javaMailSender;

    public  void sendEmail(String to, String subject, String body) throws MessagingException {

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        messageHelper.setTo(to);
        messageHelper.setSubject(subject);
        messageHelper.setText(body, true);
        javaMailSender.send(mimeMessage);
    }

}
