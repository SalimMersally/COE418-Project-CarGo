package com.cargo.api.controller;

import com.cargo.entity.Review;
import com.cargo.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/review")
@CrossOrigin
public class ReviewController {
    @Autowired
    private ReviewRepository reviewRepository;
    @GetMapping() // to get all reviews
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
    @GetMapping(value = "/{reviewId}") //get reviews by id
    public ResponseEntity<?> getReviewById(@PathVariable(value = "reviewId") Long reviewId) {
        Optional<Review> review;
        if(reviewRepository.existsById(reviewId)) {
            review = reviewRepository.findById(reviewId);
        } else {
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok().body(review);
    }
    @PostMapping() //create review
    public Review createReview(@Validated @RequestBody Review review) {
        return reviewRepository.save(review);
    }
    @PutMapping("/{reviewId}")  //update
    public ResponseEntity<?> updateReview(@PathVariable(value = "reviewId") Long reviewId,
                                               @Validated @RequestBody Review reviewDetails) {
        final Review updatedReview;
        if(reviewRepository.existsById(reviewId)) {
            Review review = reviewRepository.findById(reviewId).orElseThrow(()-> new RuntimeException("not found"));
            review.setReviewText(reviewDetails.getReviewText());
            review.setRating(reviewDetails.getRating());
            updatedReview = reviewRepository.save(review);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedReview);
    }
    @DeleteMapping("/{reviewId}")   //delete
    public ResponseEntity<?> deleteReview(@PathVariable(value = "reviewId") Long reviewId) {
        Review review;
        if(reviewRepository.existsById(reviewId)) {
            review = reviewRepository.findById(reviewId).orElseThrow(()-> new RuntimeException("not found"));
            reviewRepository.delete(review);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(review);
    }

}