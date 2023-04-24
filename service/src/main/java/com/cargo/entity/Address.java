package com.cargo.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long addressId; // instead of geoRef
    private String city;
    private String street;
    private String state;
    private String address; //??
    @OneToMany(mappedBy = "address", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<Booking> booking;
    @OneToMany(mappedBy = "address", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<Car> car;

}
