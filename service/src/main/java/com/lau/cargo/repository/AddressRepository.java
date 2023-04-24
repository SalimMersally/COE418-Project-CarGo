package com.lau.cargo.repository;

import com.lau.cargo.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
public interface AddressRepository extends JpaRepository<Address, Long> {
}
