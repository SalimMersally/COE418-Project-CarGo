package com.cargo.api.controller;

import com.cargo.repository.CarRepository;
import com.cargo.entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarController {
    @Autowired
    private CarRepository carRepository;
    @GetMapping()
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }
    @GetMapping(value = "/{carId}")
    public ResponseEntity<?> getCarById(@PathVariable(value = "carId") Long carId) {
        Optional<Car> car;
        if(carRepository.existsById(carId)) {
            car = carRepository.findById(carId);
        } else {
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok().body(car);
    }
    @PostMapping()
    public Car createCar(@Validated @RequestBody Car car) {
        return carRepository.save(car);
    }
    @PutMapping("/{carId}")  //update
    public ResponseEntity<?> updateCar(@PathVariable(value = "carId") Long carId,
                                          @Validated @RequestBody Car carDetails) {
        final Car updatedCar;
        if(carRepository.existsById(carId)) {
            Car car = carRepository.findById(carId).orElseThrow(()-> new RuntimeException("not found"));
            car.setMake(carDetails.getMake());
            car.setModel(carDetails.getModel());
            car.setYear(carDetails.getYear());
            car.setColor(carDetails.getColor());
            car.setAvailableFrom(carDetails.getAvailableFrom());
            car.setAvailableTo(carDetails.getAvailableTo());
            car.setUser(carDetails.getUser());
            car.setAddress(carDetails.getAddress());
            updatedCar = carRepository.save(car);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedCar);
    }
    @DeleteMapping("/{carId}")
    public ResponseEntity<?> deleteCar(@PathVariable(value = "carId") Long carId) {
        Car car;
        if(carRepository.existsById(carId)) {
            car = carRepository.findById(carId).orElseThrow(()-> new RuntimeException("not found"));
            carRepository.delete(car);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(car);
    }
}
