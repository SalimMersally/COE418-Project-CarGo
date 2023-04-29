import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

// Images
import facebook from "./../../assets/facebook.png";
import instagram from "./../../assets/instagram.png";
import twitter from "./../../assets/twitter.png";
import CarGoLogo from "./../../assets/CarGoLogo.png";

function Summary() {
    return (
        <Box w="30%">
            <Image src={CarGoLogo} w={44} pb={12}/>
            <Text
                fontFamily="roboto"
                fontSize="sm"
                color="gray.300"
                fontWeight="300"
                textAlign="center"
                pb="8"
            >
                We created our website to help you to find the most dependable cars, we offer you high quality services anytime and anywhere without any problems.
            </Text>
            <Flex py="2" alignItems="center">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <Image src={facebook} w="8" h="8" mr="4" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <Image src={instagram} w="8" h="8" mx="4" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <Image src={twitter} w="8" ml="4" />
                </a>
            </Flex>
        </Box>
    );
}

export default Summary;