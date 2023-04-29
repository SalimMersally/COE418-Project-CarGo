import React from "react";
import {Flex, Text} from "@chakra-ui/react";

import {Link} from "react-router-dom";

export default function LogOut() {
    return (
        <Flex direction="column" alignItems={"center"} py={16}>
            <Text
                fontSize="4xl"
                fontFamily="roboto"
                fontWeight="700"
                color="blue.400"
                pt={2}
            >
                LOGGED OUT SUCCESSFULLY!
            </Text>
            <Text
                fontSize="2xl"
                fontFamily="roboto"
                fontWeight="700"
                pb={2}
            >
                Hope you had a nice time!
            </Text>
            <Link to="/">
                <Text
                    fontSize="l"
                    fontFamily="roboto"
                    fontWeight="400"
                    color="blue.400"
                    _hover={{color: "#00538d"}}
                    _active={{color: "#00467a"}}
                >
                    Go back to home page
                </Text>
            </Link>
        </Flex>
    );
}