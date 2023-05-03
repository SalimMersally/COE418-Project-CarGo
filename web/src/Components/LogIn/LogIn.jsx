import React, {useContext, useRef, useState} from "react";
import {Box, Button, Container, Flex, Input, InputGroup, InputRightElement, Text,} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {AppContext} from "../../StateProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function LogIn() {
    const [, dispatch] = useContext(AppContext);
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function submit() {
        axios
            .post("http://localhost:8080/api/auth/signin", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            .then((res) => {
                if (typeof res.data === "string") {
                    setError(res.data);
                } else {
                    dispatch({ type: "SET_LOG", value: true });
                    dispatch({ type: "SET_TOKEN", value: res.data.jwtToken });
                    navigate("/profile");
                }
            });
    }

    return (
        <Box h="90vh" bg="gray.100">
            <Container maxW="container.md" h="100%">
                <Flex align="center" h="100%" w="100%">
                    <Box w="100%">
                        <Text
                            fontFamily="roboto"
                            fontWeight="900"
                            color="black"
                            fontSize="4xl"
                            textAlign="left"
                            pb="4"
                        >
                            Log In
                        </Text>
                        <Text
                            fontFamily="roboto"
                            fontWeight="400"
                            color="red"
                            fontSize="lg"
                            textAlign="left"
                            pb="2"
                        >
                            {error}
                        </Text>
                        <Box py="2">
                            <Text
                                fontFamily="roboto"
                                fontWeight="400"
                                color="black"
                                fontSize="lg"
                                textAlign="left"
                            >
                                Username
                            </Text>
                            <Input
                                placeholder="Enter Email here"
                                size="lg"
                                w="100%"
                                bg="white"
                                variant="outline"
                                borderRadius="0"
                                ref={emailRef}
                            />
                        </Box>
                        <Box py="2">
                            <Text
                                fontFamily="roboto"
                                fontWeight="400"
                                color="black"
                                fontSize="lg"
                                textAlign="left"
                            >
                                Password
                            </Text>
                            <InputGroup size="lg">
                                <Input
                                    pr="4.5rem"
                                    bg="white"
                                    variant="outline"
                                    type={show ? "text" : "password"}
                                    placeholder="Enter password here"
                                    borderRadius="0"
                                    ref={passwordRef}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") submit();
                                    }}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick}
                                        bg="gray.300"
                                    >
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Button
                            rightIcon={<ArrowForwardIcon/>}
                            bg="blue.400"
                            variant="outline"
                            color="white"
                            fontFamily="roboto"
                            fontWeight="700"
                            fontSize="xl"
                            w="100%"
                            display="flex"
                            justifyContent="space-between"
                            mt="2"
                            size="lg"
                            borderRadius="0"
                            _hover={{bg: "#00538d", color: "black"}}
                            _active={{bg: "#00467a"}}
                            onClick={submit}
                        >
                            LOG IN
                        </Button>
                        <Flex mt="1">
                            <Text
                                fontFamily="roboto"
                                fontWeight="400"
                                color="black"
                                fontSize="lg"
                                textAlign="left"
                                mr="1"
                            >
                                Don't have an account?
                            </Text>
                            <Text
                                as="a"
                                href="/signup"
                                fontFamily="roboto"
                                fontWeight="400"
                                color="blue.400"
                                fontSize="lg"
                                textAlign="left"
                            >
                                Sing Up
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default LogIn;