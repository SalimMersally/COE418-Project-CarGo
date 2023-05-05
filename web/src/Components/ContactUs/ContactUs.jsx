import React from "react";
import {Box, Container, Flex, Text} from "@chakra-ui/react";
import Message from "./Message";
import Info from "./Info";

import contactus from "../../assets/contactus.png";
import Map from "../Map/Map"

export default function ContactUs() {
    return (
        <Box>
            <Box mb="4" backgroundImage={contactus} backgroundRepeat="no-repeat" backgroundSize="cover">
                <Container maxW="container.xl" textAlign="left" px="6">
                    <Box mx="10" pt={10}>
                        <Text fontFamily="roboto" fontSize="5xl" fontWeight="700" color="white">
                            CONTACT US
                        </Text>
                    </Box>
                </Container>
            </Box>
            <Container maxW="container.xl" textAlign="left" px="6">
                <Box mx="10" my={4}>
                    <Flex justifyContent={"space-between"}>
                        <Info/>
                        <Message/>
                    </Flex>
                </Box>
                <Map/>
            </Container>
        </Box>
    );
}