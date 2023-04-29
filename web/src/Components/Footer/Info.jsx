import React from "react";
import {Link} from "react-router-dom";
import {Box, Flex, Image, Text} from "@chakra-ui/react";

// Images
import email from "./../../assets/email.png";
import phone from "./../../assets/phone.png";
import location from "./../../assets/location.png"

function Info() {
    return (
        <Box w="20%">
            <Flex pb="2" pt={10} alignItems="center">
                <Image src={location} w={4} h={4} mr="2"/>
                <Text
                    fontSize="sm"
                    fontFamily="roboto"
                    fontWeight="300"
                    color="gray.300"
                >
                    LAU Byblos, Jbeil, Lebanon
                </Text>
            </Flex>
            <Link to="https://goo.gl/maps/N1TkP8XwVKjrsFa96" target="_blank" rel="noreferrer">
                <Text
                    fontSize="sm"
                    fontFamily="roboto"
                    fontWeight="500"
                    color="blue.400"
                    _hover={{color: "#00538d"}}
                    _active={{color: "#00467a"}}
                >
                    OUR LOCATION
                </Text>
            </Link>
            <Flex pb="2" pt={10} alignItems="center">
                <Image src={phone} w={4} h={4} mr="2"/>
                <Text
                    fontSize="sm"
                    fontFamily="roboto"
                    fontWeight="300"
                    color="gray.300"
                >
                    +961 99 999 999
                </Text>
            </Flex>
            <Flex py="2" alignItems="center">
                <Image src={email} w={4} h={4} mr="2"/>
                <Text
                    fontSize="sm"
                    fontFamily="roboto"
                    fontWeight="300"
                    color="gray.300"
                >
                    cargo.customer.help@gmail.com
                </Text>
            </Flex>
        </Box>
    );
}

export default Info;