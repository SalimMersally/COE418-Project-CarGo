package com.lau.cargo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Review {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long reviewId;
    private String reviewText;
    private Double rating;

}
