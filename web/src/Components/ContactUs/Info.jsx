import React from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";

// Images
import email from "./../../assets/email.png";
import phone from "./../../assets/phone.png";
import location from "./../../assets/location.png"
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

function Info() {
    return (
        <Box w="30%">
            <Text fontFamily="roboto" fontSize="4xl" fontWeight="800" my="3">
                Available 24/7
            </Text>
            <Text
                fontFamily="roboto"
                fontSize="sm"
                fontWeight="300"
                my={8}>
                Our website is available 24/7 for all companies and clients. You can use our website and pick up a a car
                at anytime, anywhere. If you have any question or require a certain service feel free to email us
                anytime. We will reply as soon as possible.
            </Text>
            <Flex pb="2" alignItems="center">
                <Image src={location} w={4} h={4} mr="2"/>
                <Text
                    fontSize="sm"
                    fontFamily="roboto"
                    fontWeight="300"
                >
                    LAU Byblos, Jbeil, Lebanon
                </Text>
            </Flex>
            <Flex pb="2" alignItems="center">
                <Image src={phone} w={4} h={4} mr="2"/>
                <Text
                    fontSize="sm"
                    fontFamily="roboto"
                    fontWeight="300"
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
                >
                    cargo.customer.help@gmail.com
                </Text>
            </Flex>
            <Text fontFamily="roboto" fontSize="xl" fontWeight="800" mb="3" mt={8}>
                Social Media:
            </Text>
            <Flex py="2" alignItems="center">
                <Box mr="4">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <Image src={facebook} w="8" h="8"/>
                    </a></Box>
                <Box mx="4">
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <Image src={instagram} w="8" h="8"/>
                    </a></Box>
                <Box ml="4">
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <Image src={twitter} w="8"/>
                    </a>
                </Box>
            </Flex>
        </Box>
    );
}

export default Info;