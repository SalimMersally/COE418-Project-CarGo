package com.lau.cargo.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
public class Car {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long carId;
    private String make;
    private String model;
    private Integer year;
    private String color;
    private String avFrom;
    private String avTo;

}
