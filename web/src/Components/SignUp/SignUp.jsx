import {Box, Button, Container, Flex, Image, Input, InputGroup, InputRightElement, Text,} from "@chakra-ui/react";
import React, {useRef, useState} from "react";

//Images
import axios from "axios";
import {useNavigate} from "react-router-dom";

//Images
import road from "./../../assets/road.jpg";

function SignUp() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClick1 = () => setShow1(!show1);
    const handleClick2 = () => setShow2(!show2);

    const [error, setError] = useState("");
    const [error2, setError2] = useState("");

    const fNameRef = useRef();
    const lNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();
    const phonesRef = useRef();

    const navigate = useNavigate();

    function submitUser() {
        check()
        checkPass()
        if (error === "" && error2 === "") {
            axios
                .post("http://localhost:8080/api/auth/signup", {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                    firstName: fNameRef.current.value,
                    lastName: lNameRef.current.value,
                    phoneNumber: phonesRef.current.value,
                })
                .then((res) => {
                    if (res.data === "User registered successfully!") {
                        navigate("/login");
                    }
                });
        }
    }

    function checkPass() {
        if (passwordRef.current.value !== confirmPassRef.current.value) {
            setError("Password Should Match!!!");
        } else {
            setError("");
        }
    }

    function isEmailValid(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function check() {
        if (
            fNameRef.current.value === "" ||
            lNameRef.current.value === "" ||
            emailRef.current.value === "" ||
            passwordRef.current.value === "" ||
            confirmPassRef.current.value === "" ||
            phonesRef.current.value === ""
        ) {
            setError2("Please fill all values");
        } else if (
            phonesRef.current.value > 99999999 ||
            phonesRef.current.value < 10000000
        ) {
            setError2("Incorrect Phone format, should be 8 digits");
        } else if (! isEmailValid(emailRef.current.value)) {
            setError2("Wrong format of email");
        }
        else {
            setError2("");
        }
    }

    return (
        <Box>
            <Container maxW="container.xl" textAlign="left" px="6">
                <Box h="15vh" w="100%"></Box>
                <Box mx="10">
                    <Text fontFamily="roboto" fontSize="5xl" fontWeight="700" my="4">
                        Register to Rent Your Car
                    </Text>
                    <Text fontFamily="roboto" fontSize="sm" fontWeight="400" my="4">
                        It’s always for free and always will be!
                    </Text>
                </Box>
                <Box h="10vh" w="100%"></Box>
                <Image src={road} w="100%" mb="14"/>
            </Container>
            <Flex
                w="40vw"
                p="10"
                direction="column"
                alignItems="start"
                position="absolute"
                zIndex="10"
                top="20vh"
                right="20"
                bg="white"
            >
                <Text fontFamily="roboto" fontSize="2xl" fontWeight="800" my="3">
                    Sign up now
                </Text>
                <Text fontFamily="roboto" fontSize="lg" fontWeight="400" color="red">
                    {error2}
                </Text>
                <Flex w="100%" justifyContent="space-between" my="2">
                    <Input
                        placeholder="First Name"
                        size="lg"
                        w="48%"
                        bg="gray.300"
                        borderRadius="0"
                        borderWidth="0"
                        ref={fNameRef}
                        onChange={check}
                        required
                    />
                    <Input
                        placeholder="Last Name"
                        size="lg"
                        w="48%"
                        bg="gray.300"
                        borderRadius="0"
                        borderWidth="0"
                        ref={lNameRef}
                        onChange={check}
                        required
                    />
                </Flex>
                <Input
                    placeholder="Email address"
                    size="lg"
                    w="100%"
                    bg="gray.300"
                    borderRadius="0"
                    borderWidth="0"
                    my="3"
                    ref={emailRef}
                    onChange={check}
                    required
                />
                <InputGroup size="lg" my="3">
                    <Input
                        pr="4.5rem"
                        bg="gray.300"
                        type={show1 ? "text" : "password"}
                        placeholder="Enter password here"
                        borderRadius="0"
                        ref={passwordRef}
                        onChange={check}
                        required
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick1} bg="gray.300">
                            {show1 ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <InputGroup size="lg" my="3">
                    <Input
                        pr="4.5rem"
                        bg="gray.300"
                        type={show2 ? "text" : "password"}
                        placeholder="Confirm password"
                        borderRadius="0"
                        ref={confirmPassRef}
                        onChange={() => {
                            check();
                            checkPass();
                        }}
                        required
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick2} bg="gray.300">
                            {show2 ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Text fontFamily="roboto" fontSize="lg" fontWeight="400" color="red">
                    {error}
                </Text>
                <Input
                    placeholder="Phone number"
                    size="lg"
                    bg="gray.300"
                    borderRadius="0"
                    borderWidth="0"
                    my="3"
                    type="number"
                    ref={phonesRef}
                    onChange={check}
                    required
                />
                <Text
                    fontFamily="roboto"
                    fontWeight="400"
                    fontSize="sm"
                    textAlign="left"
                    my="3"
                >
                    By proceeding, I agree to LAU TAXI’s <span>Terms of Use</span> and
                    acknowledge that I have read the <span>Privacy Policy.</span>
                </Text>
                <Text
                    fontFamily="roboto"
                    fontWeight="400"
                    fontSize="sm"
                    textAlign="left"
                    my="3"
                >
                    I also agree that LAU Taxi or its offered companies may contact me by
                    email, phone, or SMS (including by automated means) at the email
                    address or number I provide, including for marketing purposes.
                </Text>
                <Flex alignItems="center">
                    <Button
                        borderRadius="0"
                        my="3"
                        mr="2"
                        p="5"
                        bg="black"
                        color="white"
                        type="submit"
                        _hover={{bg: "#0072C6", color: "black"}}
                        _active={{bg: "#00538d"}}
                        onClick={submitUser}
                    >
                        SIGN UP
                    </Button>
                    <Text
                        fontFamily="roboto"
                        fontWeight="400"
                        fontSize="sm"
                        textAlign="left"
                        pr="2"
                    >
                        Already have an account?
                    </Text>
                    <Text
                        fontFamily="roboto"
                        fontWeight="400"
                        fontSize="sm"
                        textAlign="left"
                        color="blue.400"
                        as="a"
                        href="/login"
                    >
                        Sign in
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default SignUp;