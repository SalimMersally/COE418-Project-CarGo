package com.cargo.util;


import com.cargo.entity.Image;
import com.cargo.repository.ImageRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ImageService {
    private ImageRepository imageRepository;

    public String uploadImage(MultipartFile file, String name) throws IOException {
        imageRepository.save(Image.builder()
                .name(name)
                .imageData(ImageUtil.compressImage(file.getBytes())).build());

        return "Image uploaded successfully: " + file.getOriginalFilename();
    }
    @Transactional
    public byte[] getImage(String name) {
        Optional<Image> dbImage = imageRepository.findByName(name);
        return ImageUtil.decompressImage(dbImage.get().getImageData());
    }
}