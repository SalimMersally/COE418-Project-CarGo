import React, {useContext, useEffect, useState} from "react";
import {Box, Container, Flex, Image, Text} from "@chakra-ui/react";

// Components
// Images
import emailPic from "./../../assets/email.png";
import phone from "./../../assets/phone.png";
import {FaUserAlt} from "react-icons/fa";
import {AppContext} from "../../StateProvider";
import axios from "axios";
import EditUserModal from "./EditUserModal";

function Info() {
    const [state] = useContext(AppContext);
    const [user, setUser] = useState({number: 0});

    useEffect(() => {
        return () => {
            getUserData()
        };
    }, []);

    function getUserData() {
        axios.get("http://localhost:8080/api/auth", {
            headers: {
                'Authorization': `Bearer ${state.userToken}`
            }
        }).then((res) => {
            setUser(res.data);
        });
    }

    return (
        <Box w="100%" bg="white" alignSelf="flex-stretch" py="10">
            <Container maxW="container.sm">
                <Flex flexDirection={"column"}>
                    <Flex flexDirection={"column"} alignItems={"center"}>
                        <FaUserAlt color={"#0072C6"} size={100}/>
                        <Text
                            align="center"
                            fontSize="3xl"
                            fontFamily="roboto"
                            fontWeight="700"
                            color="black"
                            py="2"
                        >
                            {user.firstName} {user.lastName}
                        </Text>
                    </Flex>
                    <Flex mx="6" pt="4">
                        <Image src={emailPic} w="6" h="6" mr="6"/>
                        <Box w="85%">
                            <Text
                                fontSize="xl"
                                fontFamily="roboto"
                                fontWeight="400"
                                color="Black"
                                textAlign="left"
                                pb="2"
                            >
                                {user.email}
                            </Text>
                            <hr className="info"/>
                        </Box>
                    </Flex>
                    <Flex mx="6" pt="4">
                        <Image src={phone} w="6" h="6" mr="6"/>
                        <Box w="85%">
                            <Text

                                fontSize="xl"
                                fontFamily="roboto"
                                fontWeight="400"
                                color="black"
                                textAlign="left"
                                pb="2"
                            >
                                {user.phoneNumber ? user.phoneNumber.toString().substring(0, 2) + " " + user.phoneNumber.toString().substring(2, 5) + " " + user.phoneNumber.toString().substring(5, 8): ""}
                            </Text>
                            <hr className="info"/>
                        </Box>
                    </Flex>
                    <EditUserModal getUserData={getUserData}/>
                </Flex>
            </Container>
        </Box>
    );
}

export default Info;