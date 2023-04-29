import React from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";

import car404 from "./../../assets/car404.png";
import {Link} from "react-router-dom";

export default function Error() {
    return (
        <Flex direction="column" alignItems={"center"} py={16}>
            <Box width="50%" py={2}>
                <Image src={car404}/>
            </Box>
            <Text
                fontSize="4xl"
                fontFamily="roboto"
                fontWeight="700"
                color="blue.400"
                py={2}
            >
                404
            </Text>
            <Text
                fontSize="2xl"
                fontFamily="roboto"
                fontWeight="700"
                py={2}
            >
                It seems your car is stuck, SOMEHOW!!
            </Text>
            <Link to="/">
                <Text
                    fontSize="l"
                    fontFamily="roboto"
                    fontWeight="400"
                    color="black"
                    _hover={{color: "#0072C6"}}
                    _active={{color: "#00538d"}}
                >
                    Go back to home page
                </Text>
            </Link>
        </Flex>
    );
}