import {Box, Card, CardBody, CardFooter, Divider, Flex, Grid, GridItem, Image, Text} from "@chakra-ui/react";
import AddCarModal from "./AddCarModal";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AppContext} from "../../StateProvider";
import CarCard from "../Book/CarCard";
import MyCarCard from "./MyCarCard";
import car from "../../assets/car.png";

export default function MyCarsList() {
    const [carList, setCartList] = useState([]);
    const [state] = useContext(AppContext);

    useEffect(() => {
        fetchCars();
    }, []);

    function fetchCars() {
        axios
            .get("http://localhost:8080/api/car/user", {
                headers: {
                    'Authorization': `Bearer ${state.userToken}`
                }
            })
            .then((res) => {
                setCartList(res.data);
            });
    }

    return (
        <Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={6} my={3}>
                {carList.map(car => <MyCarCard key={car.carId} {...car} fetchCars={fetchCars}/>)}
                <GridItem w='100%' h={"100%"} minH={"30vh"}>
                    <Flex justifyContent={"center"} alignItems={"center"} h={"100%"}>
                        <AddCarModal fetchCars={fetchCars}/>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
}