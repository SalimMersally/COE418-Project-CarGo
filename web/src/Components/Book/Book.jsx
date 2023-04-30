import {useEffect, useState} from "react";
import axios from "axios";
import CarCard from "./CarCard";
import {Box, Container, Grid} from "@chakra-ui/react";

export default function Book() {
    const [carList, setCartList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/car")
            .then((res) => {
                setCartList(res.data);
            });
    }, []);

    return (
        <Box py={8}>
            <Container maxW="container.xl" textAlign="left" px="6">
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    {carList.map(car => <CarCard key={car.carId} {...car} />)}
                </Grid>
            </Container>
        </Box>
    );
}