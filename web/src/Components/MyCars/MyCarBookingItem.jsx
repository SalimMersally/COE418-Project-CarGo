import React, {useContext, useEffect, useState} from "react";
import {Box, Button, Card, CardBody, Flex, Text} from "@chakra-ui/react";
import axios from "axios";
import {AppContext} from "../../StateProvider";
import {GiCancel, GiCheckMark} from "react-icons/gi";

export default function MyCarBookingItem(props) {
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

    function acceptBooking() {
        axios
            .post("http://localhost:8080/api/booking/" + bookingId, {
                userResponse: "accepted"
            }, {
                headers: {
                    'Authorization': `Bearer ${state.userToken}`
                }
            })
            .then((res) => {
                if (res.status === 200) {
                    props.getBooking();
                }
            })
    }

    function rejectBooking() {
        axios
            .post("http://localhost:8080/api/booking/" + bookingId, {
                userResponse: "rejected"
            }, {
                headers: {
                    'Authorization': `Bearer ${state.userToken}`
                }
            })
            .then((res) => {
                if (res.status === 200) {
                    props.getBooking();
                }
            })
    }

    function getIcon() {
        if(userResponse === "accepted") {
            return <GiCheckMark color={"#32CD32"} size={30}/>;
        } else {
            return <GiCancel color={"#ff1111"} size={30}/>;
        }
    }

    return (<Card my={2}>
        <CardBody>
            <Flex
                justifyContent="space-between"
                textAlign="left"
            >
                <Box w={"33%"}>
                    <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
                        <b>From:</b> {startDate}
                    </Text>
                    <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
                        <b>To:</b> {endDate}
                    </Text>
                    <Text fontFamily="roboto" fontWeight="400" fontSize="sm">
                        <b>Rentee Email:</b> {userEmail}
                    </Text>
                </Box>
                <Box w={"33%"}>
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
                <Box w={"33%"}>
                    {userResponse === "Waiting" ? <Flex alignItems={"center"} h={"100%"} justifyContent={"right"}>
                            <Button
                                borderRadius="0"
                                my="3"
                                mr="2"
                                p="5"
                                bg="black"
                                color="white"
                                type="submit"
                                _hover={{bg: "#0072C6"}}
                                _active={{bg: "#00538d"}}
                                onClick={acceptBooking}
                            >
                                ACCEPT
                            </Button>
                            <Button
                                borderRadius="0"
                                my="3"
                                mr="2"
                                p="5"
                                bg="black"
                                color="white"
                                type="submit"
                                _hover={{bg: "#0072C6"}}
                                _active={{bg: "#00538d"}}
                                onClick={rejectBooking}
                            >
                                REJECT
                            </Button>
                        </Flex> :
                        <Flex h={"100%"} alignItems={"center"} justifyContent={"right"} mr="2">
                            {getIcon()}
                            <Text fontFamily="roboto" fontWeight="400" fontSize="sm" ml={"2"}>
                                <b>{userResponse}</b>
                            </Text>
                        </Flex>
                    }
                </Box>
            </Flex>
        </CardBody>
    </Card>);
}