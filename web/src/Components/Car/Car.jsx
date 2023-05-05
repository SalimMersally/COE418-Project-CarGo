import React, {useContext, useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {AppContext} from "../../StateProvider";
import {Box, Button, Container, Divider, Flex, Image, Input, Text} from "@chakra-ui/react";
import {AiFillStar, AiOutlineBgColors} from "react-icons/ai";
import {MdConfirmationNumber} from "react-icons/md";
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";

export default function Car() {
    const {carId} = useParams()
    const [car, setCar] = useState([]);
    const startDateRef = useRef();
    const endDateRef = useRef();
    const [totalCost, setTotalCost] = useState(NaN);

    const [error, setError] = useState("");
    const [image, setImage] = useState();
    const [state] = useContext(AppContext);
    const navigate = useNavigate();

    const [isOwnCar, setIsOwnCar] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/car/" + carId)
            .then((res) => {
                setCar(res.data);
                axios
                    .get("http://localhost:8080/api/image/" + res.data.imageName, {
                        responseType: 'blob',
                    })
                    .then((res) => {
                        const imageObjectURL = URL.createObjectURL(res.data);
                        setImage(imageObjectURL);
                    });
            });
    }, []);

    useEffect(() => {
        return () => {
            axios
                .get("http://localhost:8080/api/car/user", {
                    headers: {
                        'Authorization': `Bearer ${state.userToken}`
                    }
                })
                .then((res) => {
                    res.data.map((car) => {
                        if(car.carId === parseInt(carId)) {
                            setIsOwnCar(true);
                        }
                    })
                });
        };
    }, []);



    function capitalizeFirstLetters(str) {
        let words = str.split(" ");

        let capitalizedWords = words.map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return capitalizedWords.join(" ");
    }

    function calculateTime() {
        const date1 = new Date(startDateRef.current.value);
        const date2 = new Date(endDateRef.current.value);
        const timeInMilliSecond = Math.abs(date1 - date2);

        if (!isNaN(timeInMilliSecond)) {
            setTotalCost((timeInMilliSecond / 86400000) * car.costPerDay);
        }
    }

    function bookCar() {
        if (!startDateRef.current.value || !endDateRef.current.value) {
            setError("Please fill start and end data");
        } else {
            const date1 = new Date(startDateRef.current.value);
            const date2 = new Date(endDateRef.current.value);

            if (date1 - date2 >= 0) {
                setError("End date should be after start date");
            } else {
                setError("");
                if (!state.isLogged) {
                    navigate("/login");
                } else {
                    axios
                        .post("http://localhost:8080/api/booking", {
                            startDate: startDateRef.current.value,
                            endDate: endDateRef.current.value,
                            bookingPrice: totalCost,
                            carId: carId,
                        }, {
                            headers: {
                                'Authorization': `Bearer ${state.userToken}`
                            }
                        })
                        .then((res) => {
                            if (res.status === 200) {
                                navigate("/book-a-car");
                            }
                        });
                }
            }
        }
    }

    return (
        <Box>
            <Flex justifyContent={"center"}>
                <Image src={image} h={"50vh"}/>
            </Flex>
            <Container maxW="container.xl" textAlign="left" px="6">
                <Box mx="10" my={4}>
                    <Flex justifyContent={"space-between"}>
                        <Box w={"50%"}>
                            <Text fontFamily="roboto" fontSize="5xl" fontWeight="700" py={2}>
                                {capitalizeFirstLetters(car.make + " " + car.model)} #{car.year}
                            </Text>
                            <Text fontFamily="roboto" fontSize="2xl" fontWeight="700" py={2}>
                                Information:
                            </Text>
                            <Box ml={4}>
                                <Flex alignItems={"center"} my={2}>
                                    <AiOutlineBgColors color={"#0072C6"} size={25}/>
                                    <Text fontFamily="roboto" fontSize="l" fontWeight="400" ml={2}>
                                        <b>Color: </b>
                                        {car.color}
                                    </Text>
                                </Flex>
                                <Flex alignItems={"center"} my={2}>
                                    <MdConfirmationNumber color={"#0072C6"} size={25}/>
                                    <Text fontFamily="roboto" fontSize="l" fontWeight="400" ml={2}>
                                        <b>Plate Number: </b>
                                        {car.plateNumber}
                                    </Text>
                                </Flex>
                                <Flex alignItems={"center"} my={2}>
                                    <FaUserAlt color={"#0072C6"} size={25}/>
                                    <Text fontFamily="roboto" fontSize="l" fontWeight="400" ml={2}>
                                        <b>Owner: </b>
                                        {car.owner}
                                    </Text>
                                </Flex>
                                <Flex alignItems={"center"} my={2}>
                                    <HiLocationMarker color={"#0072C6"} size={25}/>
                                    <Text fontFamily="roboto" fontSize="l" fontWeight="400" ml={2}>
                                        <b>Location: </b>
                                        {car.location}
                                    </Text>
                                </Flex>
                            </Box>
                            <Text fontFamily="roboto" fontSize="2xl" fontWeight="700" py={2}>
                                Description:
                            </Text>
                            <Text fontFamily="roboto" fontSize="l" fontWeight="400">
                                {car.description}
                            </Text>
                            <Text fontFamily="roboto" fontSize="2xl" fontWeight="700" py={2}>
                                Ratings:
                            </Text>
                            <Flex alignItems={"center"}>
                                <Text fontFamily="roboto" fontSize="4xl" fontWeight="700" pr={2}>
                                    4.7
                                </Text>
                                <AiFillStar color={"#0072C6"} size={40}/>
                            </Flex>
                        </Box>
                        <Box w={"30%"} py={8}>
                            <Text fontSize={"2xl"} fontWeight={600}>
                                ${car.costPerDay} /day
                            </Text>
                            <Text fontSize={"l"} fontWeight={300}>
                                ${isNaN(totalCost) ? "###" : totalCost} /total
                            </Text>
                            <Box py={2}>
                                <Divider style={{borderTop: "1px solid black"}}/>
                            </Box>
                            <Text fontSize={"xl"} fontWeight={500} pb={2}>
                                Start Date:
                            </Text>
                            <Input
                                placeholder="Select Start Date"
                                size="md"
                                type="date"
                                min={new Date().toJSON().slice(0, 10)}
                                ref={startDateRef}
                                onChange={calculateTime}
                            />
                            <Text fontSize={"xl"} fontWeight={500} pb={2}>
                                End Date:
                            </Text>
                            <Input
                                placeholder="Select End Date"
                                size="md"
                                type="date"
                                min={new Date().toJSON().slice(0, 10)}
                                ref={endDateRef}
                                onChange={calculateTime}
                                mb="8"
                            />
                            <Text fontFamily="roboto" fontSize="lg" fontWeight="400" color="red">
                                {error}
                            </Text>
                            {
                                !isOwnCar ?
                                    <Button
                                        bg="blue.400"
                                        variant="outline"
                                        color="white"
                                        fontFamily="roboto"
                                        fontWeight="700"
                                        fontSize="xl"
                                        size="lg"
                                        borderRadius={10}
                                        w={"100%"}
                                        _hover={{bg: "#00538d"}}
                                        _active={{bg: "#00467a"}}
                                        textAlign={"center"}
                                        onClick={bookCar}
                                        disabled={isOwnCar}
                                    >
                                        BOOK
                                    </Button>
                                    : <Text fontFamily="roboto" fontSize="2xl" fontWeight="700" textAlign={"center"} color={"blue.400"}>
                                        This is your car
                                    </Text>
                            }
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
}