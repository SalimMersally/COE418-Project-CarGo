package com.cargo.apil.controller;

import com.cargo.repository.AddressRepository;
import com.cargo.entity.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/address")
public class AddressController {
    @Autowired
    private AddressRepository addressRepository;
    @GetMapping()
    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }
    @GetMapping(value = "/{addressId}")
    public ResponseEntity<?> getAddressById(@PathVariable(value = "addressId") Long addressId) {
        Optional<Address> address;
        if(addressRepository.existsById(addressId)) {
            address = addressRepository.findById(addressId);
        } else {
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok().body(address);
    }
    @PostMapping()
    public Address createAddress(@Validated @RequestBody Address address) {
        return addressRepository.save(address);
    }
    @PutMapping("/{addressId}")  //update
    public ResponseEntity<?> updateAddress(@PathVariable(value = "addressId") Long addressId,
                                           @Validated @RequestBody Address addressDetails) {
        final Address updatedAddress;
        if(addressRepository.existsById(addressId)) {
            Address address = addressRepository.findById(addressId).orElseThrow(()-> new RuntimeException("not found"));
            address.setAddress(addressDetails.getAddress());
            address.setCity(addressDetails.getCity());
            address.setState(addressDetails.getState());
            address.setStreet(addressDetails.getStreet());

            updatedAddress = addressRepository.save(address);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedAddress);
    }
    @DeleteMapping("/{addressId}")
    public ResponseEntity<?> deleteAddress(@PathVariable(value = "addressId") Long addressId) {
        Address address;
        if(addressRepository.existsById(addressId)) {
            address = addressRepository.findById(addressId).orElseThrow(()-> new RuntimeException("not found"));
            addressRepository.delete(address);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(address);
    }
}
