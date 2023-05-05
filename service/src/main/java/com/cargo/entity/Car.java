package com.cargo.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


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
    private String plateNumber;
    private String location;
    private int costPerDay;
    private String description;
    private String imageName;
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private User user;
    @OneToMany(mappedBy = "car", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<Booking> booking;
}


