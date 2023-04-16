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
public class Address {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long addressId; // instead of geoRef
    private String city;
    private String street;
    private String state;
    private String address; //??

}
