import React, {useContext, useEffect, useState} from "react";
import {Box, Card, CardBody, Flex, Text} from "@chakra-ui/react";
import axios from "axios";
import {AppContext} from "../../StateProvider";
import {GiCancel, GiCheckMark} from "react-icons/gi";
import {BiTimeFive} from "react-icons/bi";
import DeleteBookingModal from "./DeleteBookingModal";

export default function BookingItem(props) {
    const bookingId = props.booking.bookingId;
    const bookingPrice = props.booking.bookingPrice;
    const carId = props.booking.carId;
    const startDate = props.booking.startDate;
    const endDate = props.booking.endDate;
    const userEmail = props.booking.userEmail;
    const userResponse = props.booking.userResponse;

    const [car, setCar] = useState({});
    const [state] = useContext(AppContext);

    useEffect(() => {
        fetchCar()
    }, []);

    function fetchCar() {
        axios
            .get("http://localhost:8080/api/car/" + carId, {
                headers: {
                    'Authorization': `Bearer ${state.userToken}`
                }
            })
            .then((res) => {
                setCar(res.data)
            });
    }

    function capitalizeFirstLetters(str) {
        let words = str.split(" ");

        let capitalizedWords = words.map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return capitalizedWords.join(" ");
    }

    function getIcon() {
        if (userResponse === "accepted") {
            return <GiCheckMark color={"#32CD32"} size={30}/>;
        } else if (userResponse === "rejected") {
            return <GiCancel color={"#ff1111"} size={30}/>;
        } else {
            return <BiTimeFive color={"#00538d"} size={30}/>
        }
    }

    return (<Card my={2}>
        <CardBody>
            <Flex
                justifyContent="space-between"
                textAlign="left"
            >
                <Box w={"30%"}>
                    <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
                        <b>From:</b> {startDate}
                    </Text>
                    <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
                        <b>To:</b> {endDate}
                    </Text>
                    <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
                        <b>Owner Email:</b> {userEmail}
                    </Text>
                </Box>
                <Box w={"30%"}>
                    <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
                        <b>Car:</b> {capitalizeFirstLetters(car.make + " " + car.model)} #{car.year}
                    </Text>
                    <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
                        <b>Color:</b> {car.color}
                    </Text>
                    <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
                        <b>Cost:</b> ${bookingPrice}
                    </Text>
                </Box>
                <Box w={"30%"}>
                    <Flex h={"100%"} alignItems={"center"} justifyContent={"right"} mr="2">
                        {getIcon()}
                        <Text fontFamily="roboto" fontWeight="400" fontSize="sm" ml={"2"}>
                            <b>{userResponse}</b>
                        </Text>
                    </Flex>
                </Box>
                <Box w={"10%"}>
                    <Flex h={"100%"} alignItems={"center"} justifyContent={"right"} mr="2">
                        <DeleteBookingModal bookingId={bookingId} getBookings={props.getBookings}/>
                    </Flex>
                </Box>
            </Flex>
        </CardBody>
    </Card>);
}