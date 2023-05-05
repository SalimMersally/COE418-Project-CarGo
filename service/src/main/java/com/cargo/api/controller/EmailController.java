package com.cargo.api.controller;


import com.cargo.util.EmailService;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@AllArgsConstructor
@RestController
public class EmailController {

    private EmailService es;
    @GetMapping("/email")
    public ResponseEntity<String> sendEmail() throws MessagingException {
        es.sendEmail("salim.almersally@lau.edu","CarGo Account","Welcome ;) now you can enter our amazing world");
        return ResponseEntity.ok("Email Sent");
    }
}
