package com.cargo.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long bookingId;
    private String startDate;
    private String endDate;
    private Double bookingPrice;
    private String userResponse;
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private User user;
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "carId", referencedColumnName = "carId")
    private Car car;
}
