import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

// Components
import Summary from "./Summary";
import Info from "./Info";

function Footer() {

    return (
        <Box>
            <Box bg="black" px="20" pt={12} pb="6">
                <Flex justifyContent="space-between">
                    <Summary/>
                    <Info/>
                </Flex>
            </Box>

            <Box bg="gray.900">
                <Text
                    fontFamily="roboto"
                    fontWeight="300"
                    fontSize="md"
                    color="gray.300"
                    textAlign="left"
                    py="6"
                    px="20"
                >
                    2023 © All Rights Reserved
                </Text>
            </Box>
        </Box>
    );
}

export default Footer;