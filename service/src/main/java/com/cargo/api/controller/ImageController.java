package com.cargo.api.controller;

import com.cargo.entity.Car;
import com.cargo.entity.User;
import com.cargo.repository.CarRepository;
import com.cargo.repository.UserRepository;
import com.cargo.util.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/image")
@AllArgsConstructor
@CrossOrigin
public class ImageController {
    private ImageService imageDataService;
    private CarRepository carRepository;


    @PostMapping
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile file, @RequestParam("carId") Long carId) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        String response = imageDataService.uploadImage(file, email + carId + ".png");
        Optional<Car> car = carRepository.findById(carId);
        car.get().setImageName(email + carId + ".png");
        carRepository.save(car.get());
        
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/{name}")
    public ResponseEntity<?> getImageByName(@PathVariable("name") String name) {
        byte[] image = imageDataService.getImage(name);

        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
    }
}