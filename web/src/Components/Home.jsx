import React from "react";
import {Box, Container, Flex, Text} from "@chakra-ui/react";
import CarMain from "../assets/homeCar.png"
import payicon from "../assets/pay.png"
import easyBook from "../assets/easyBook.png"
import car from "../assets/caricon.png"
import offer from "../assets/offer.png"
import logoDesign from "../assets/img2.png";
import lumbergini from "../assets/lamborghini-logo-1100x1200.png";
import honda from "../assets/Honda.png";
import BMW from "../assets/BMW.png";
import SAIC from "../assets/SAIC.png";
import lebanon from "../assets/lebanon.png";
import USA from "../assets/USA.png";
import london from "../assets/london.png";
import italy from "../assets/italy.png";


export default function Home() {
    return (
        <Box>
            <Box height="34rem" backgroundImage={CarMain} backgroundRepeat="no-repeat" backgroundSize="cover">

            </Box>

            <Box height="30rem" bg="gray.50" backgroundSize="cover" alignContent="center" padding="2.5rem">
                <Text color="blue.600" fontSize="2xl" align="center" fontWeight="semibold">EXPLORE THE WORLDS BEST CAR
                    RENTAL MARKETPLACE</Text>
                <Text color="Gray.800" fontSize="4xl" align="center" fontWeight="extrabold">We are here for you</Text>
                <Flex padding="2rem">
                    <Box width="25%" borderRight="1px" borderRightColor="blue.600" borderRightStyle="dotted">
                        <Container padding="1rem" align="center"> <img src={payicon} alt="icon of payment"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold">Payment on
                            Reception</Text>
                        <Text align="center" justifyContent="center" padding="2.5rem">You can reserve your car at any
                            time, payment come later after you receive it</Text>
                    </Box>
                    <Box width="25%" borderRight="1px" borderRightColor="blue.600" borderRightStyle="dotted">
                        <Container padding="1rem" align="center"> <img src={easyBook}
                                                                       alt="icon of booking"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold"> Easy
                            Booking </Text>
                        <Text align="center" justifyContent="center" padding="2.5rem">Choose your car then book with a
                            click of a button</Text>
                    </Box>
                    <Box width="25%" borderRight="1px" borderRightColor="blue.600" borderRightStyle="dotted">
                        <Container padding="1rem" align="center"> <img src={car} alt="icon of car"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold">Wide Variety of
                            Cars</Text>
                        <Text align="center" justifyContent="center" padding="2.5rem">We’ve got cars of all types.
                            Filter to your Taste.</Text>
                    </Box>
                    <Box width="25%" alignContent="center">
                        <Container padding="1rem" align="center"> <img src={offer} alt="icon of offer"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl"
                              fontWeight="semibold">Discounts</Text>
                        <Text align="center" justifyContent="center" padding="2.5rem">You can always benefit from our
                            daily discounts that go up to 70%</Text>
                    </Box>
                </Flex>
            </Box>

            <Box height="28rem" backgroundImage={logoDesign} backgroundPosition="center"></Box>
            <Box height="48rem" bg="white" backgroundRepeat="no-repeat" backgroundSize="cover" alignContent="center"
                 padding="4rem">
                <Text color="gray.800" fontSize="4xl" align="Left" fontWeight="extrabold" padding="1rem">Browse by
                    Make</Text>

                <Flex padding="2rem">
                    <Box width="25%">
                        <Container padding="1rem" align="center"> <img src={SAIC} alt="SAIC"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold">SAIC</Text>
                    </Box>
                    <Box width="25%">
                        <Container padding="1rem" align="center"> <img src={BMW} alt="BMW"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold">BMW</Text>
                    </Box>
                    <Box width="25%">
                        <Container padding="1rem" align="center"> <img src={honda} alt="Honda"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold">Honda</Text>
                    </Box>
                    <Box width="25%">
                        <Container padding="1rem" align="center"> <img src={lumbergini} alt="Lumbergini"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl"
                              fontWeight="semibold">Lumbergini</Text>
                    </Box>
                </Flex>


                <Text color="gray.800" fontSize="4xl" align="Left" fontWeight="extrabold" padding="1rem">Browse by
                    Destination</Text>
                <Flex padding="2rem">
                    <Box width="25%">
                        <Container padding="1rem" align="center"> <img src={lebanon} alt="Lebanon"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold">Lebanon</Text>
                    </Box>
                    <Box width="25%">
                        <Container padding="1rem" align="center"> <img src={italy} alt="Italy"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold">Italy</Text>
                    </Box>
                    <Box width="25%">
                        <Container padding="1rem" align="center"> <img src={USA} alt="USA"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold">USA</Text>
                    </Box>
                    <Box width="25%">
                        <Container padding="1rem" align="center"> <img src={london} alt="London"/></Container>
                        <Text align="center" justifyContent="center" fontSize="xl" fontWeight="semibold">London</Text>
                    </Box>
                </Flex>

            </Box>
        </Box>
    );
}