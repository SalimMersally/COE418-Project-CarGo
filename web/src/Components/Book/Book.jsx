import React, {useEffect, useState} from "react";
import axios from "axios";
import CarCard from "./CarCard";
import {Box, Container, Flex, Grid, Input, Text} from "@chakra-ui/react";

export default function Book() {
    const [carList, setCartList] = useState([]);
    const [filteredCarList, setFilteredCarList] = useState([]);

    useEffect(() => {
        fetchCar()
    }, []);

    function fetchCar() {
        axios
            .get("http://localhost:8080/api/car")
            .then((res) => {
                setCartList(res.data);
                setFilteredCarList(res.data);
            });
    }

    function filter(e) {
        if(e.target.value !== "") {
            let newCarList = carList.filter(car => {
                let name = car.make + " " + car.model + " " + car.year;
                return name.toLowerCase().includes(e.target.value.toLowerCase());
            })
            setFilteredCarList(newCarList);
        } else {
            setFilteredCarList(carList);
        }
    }

    return (
        <Box py={8}>
            <Container maxW="container.xl" textAlign="left" px="6">
                <Flex justifyContent={"space-between"}>
                    <Text fontFamily="roboto" fontSize="5xl" fontWeight="700">
                        BOOK A CAR
                    </Text>
                    <Flex w={"20%"} alignItems={"center"}>
                        <Input
                            placeholder={"Search for a Car"}
                            onChange={(e) => filter(e)}
                            borderColor={"blue.400"}
                        />
                    </Flex>
                </Flex>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    {filteredCarList.map(car => <CarCard key={car.carId} {...car} />)}
                </Grid>
            </Container>
        </Box>
    );
}