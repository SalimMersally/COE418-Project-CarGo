import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../StateProvider";
import axios from "axios";
import CarCard from "./CarCard";
import {Box, Container, Grid} from "@chakra-ui/react";

export default function Book() {
    const [state] = useContext(AppContext);
    const [carList, setCartList] = useState([]);

    useEffect(() => {
        if (state.isLogged) {
            axios
                .get("http://localhost:8080/api/car", {
                    headers: {
                        'Authorization': `Bearer ${state.userToken}`
                    }
                })
                .then((res) => {
                    setCartList(res.data);
                });
        }
    }, [state.isLogged]);

    return (
        <Box py={8}>
            <Container maxW="container.xl" textAlign="left" px="6">
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    {carList.map(car => <CarCard {...car} />)}
                </Grid>
            </Container>
        </Box>
    );
}