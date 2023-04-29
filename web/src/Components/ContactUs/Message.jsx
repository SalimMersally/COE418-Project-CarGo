import React, {useRef, useState} from "react";
import {Box, Button, Flex, Input, Text, Textarea} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import emailjs from "emailjs-com";

export default function Message() {

    const [error, setError] = useState("");

    const fNameRef = useRef();
    const lNameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const navigate = useNavigate();

    function check() {
        if (
            fNameRef.current.value === "" ||
            lNameRef.current.value === "" ||
            emailRef.current.value === "" ||
            subjectRef.current.value === "" ||
            messageRef.current.value === ""
        ) {
            setError("Please fill all values");
        } else if (
            messageRef.current.value > 99999999 ||
            messageRef.current.value < 10000000
        ) {
            setError("Incorrect Phone format, should be 8 digits");
        } else if (!isEmailValid(emailRef.current.value)) {
            setError("Wrong format of email");
        } else {
            setError("");
        }
    }

    function isEmailValid(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function submit() {
        check();
        if (error === "") {
            const params = {
                first: fNameRef.current.value,
                last: lNameRef.current.value,
                subject: subjectRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
            };

            emailjs
                .send(
                    "service_qqfwyns",
                    "template_e0xnsgl",
                    params,
                    "user_KLWtY2hVuNAqLpvosjCPj"
                )
                .then(
                    (result) => {
                        navigate("/");
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    }

    return (
        <Box w="50%">
            <Text fontFamily="roboto" fontSize="4xl" fontWeight="800" my="3" textAlign="center">
                SEND A MESSAGE
            </Text>
            <Flex
                m={8}
                p="6"
                direction="column"
                alignItems="start"
                bg="gray.400"
            >
                <Text fontFamily="roboto" fontSize="lg" fontWeight="400" color="red">
                    {error}
                </Text>
                <Flex w="100%" justifyContent="space-between" my="2">
                    <Input
                        placeholder="First Name"
                        size="lg"
                        w="48%"
                        bg="white"
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
                        bg="white"
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
                    bg="white"
                    borderRadius="0"
                    borderWidth="0"
                    my="3"
                    ref={emailRef}
                    onChange={check}
                    required
                />
                <Input
                    placeholder="Subject"
                    size="lg"
                    w="100%"
                    bg="white"
                    borderRadius="0"
                    borderWidth="0"
                    my="3"
                    ref={subjectRef}
                    onChange={check}
                    required
                />
                <Textarea
                    placeholder="Message"
                    bg="white"
                    borderRadius="0"
                    borderWidth="0"
                    my="3"
                    ref={messageRef}
                    onChange={check}
                    rows={10}
                />
                <Flex justifyContent="center" w="100%">
                    <Button
                        borderRadius="0"
                        my="3"
                        mr="2"
                        p="5"
                        bg="black"
                        color="white"
                        type="submit"
                        _hover={{bg: "#0072C6"}}
                        _active={{bg: "#00538d"}}
                        onClick={submit}
                    >
                        SEND
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}