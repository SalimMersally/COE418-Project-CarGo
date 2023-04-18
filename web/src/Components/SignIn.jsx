import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Image,
  Container,
} from "@chakra-ui/react";
import React, { useRef } from "react";

//Images
import road from "./../assets/road.jpg";

function SignIn() {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const handleClick1 = () => setShow1(!show1);
  const handleClick2 = () => setShow2(!show2);

  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const dateRef = useRef();
  const phonesRef = useRef();

  return (
    <Box>
      <Container maxW="container.xl" textAlign="left" px="10">
        <Box h="15vh" w="100%"></Box>
        <Box mx="10">
          <Text fontFamily="roboto" fontSize="5xl" fontWeight="700" my="4">
            Register to book a ride
          </Text>
          <Text fontFamily="roboto" fontSize="sm" fontWeight="400" my="4">
            Choose your company, book your trip, enjoy your ride
          </Text>
        </Box>
        <Box h="10vh" w="100%"></Box>
        <Image src={road} w="100%" mb="14" />
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
        <Flex w="100%" justifyContent="space-between" my="2">
          <Input
            placeholder="First Name"
            size="lg"
            w="48%"
            bg="gray.300"
            borderRadius="0"
            borderWidth="0"
            ref={fNameRef}
          />
          <Input
            placeholder="Last Name"
            size="lg"
            w="48%"
            bg="gray.300"
            borderRadius="0"
            borderWidth="0"
            ref={lNameRef}
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
        />
        <Input
          placeholder="Choose a username"
          size="lg"
          w="100%"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
          my="3"
          ref={usernameRef}
        />
        <InputGroup size="lg" my="3">
          <Input
            pr="4.5rem"
            bg="gray.300"
            type={show1 ? "text" : "password"}
            placeholder="Enter password here"
            borderRadius="0"
            ref={passwordRef}
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
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick2} bg="gray.300">
              {show2 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Input
          placeholder="Date of Birth"
          size="lg"
          w="100%"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
          my="3"
          type="date"
          ref={dateRef}
        />
        <Input
          placeholder="Phone number"
          size="lg"
          bg="gray.300"
          borderRadius="0"
          borderWidth="0"
          my="3"
          type="number"
          ref={phonesRef}
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
            _hover={{ bg: "#FFC000", color: "black" }}
            _active={{ bg: "#F4B700" }}
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
            color="yellow.400"
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

export default SignIn;