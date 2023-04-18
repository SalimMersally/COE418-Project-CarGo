import React, { useRef } from "react";
import {
  Container,
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function LogIn() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <Box h="90vh" bg="gray.300">
      <Container maxW="container.md" h="100%">
        <Flex align="center" h="100%" w="100%">
          <Box w="100%">
            <Text
              fontFamily="roboto"
              fontWeight="900"
              color="yellow.400"
              fontSize="4xl"
              textAlign="left"
              pb="4"
            >
              Log In
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
              rightIcon={<ArrowForwardIcon />}
              bg="yellow.400"
              variant="outline"
              color="white"
              fontFamily="roboto"
              fontWeight="700"
              fontSize="xl"
              w="100%"
              display="flex"
              justifyContent="space-between"
              mt="4"
              size="lg"
              borderRadius="0"
              _hover={{ bg: "#FFC000", color: "black" }}
              _active={{ bg: "#F4B700" }}
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
                href="/signIn"
                fontFamily="roboto"
                fontWeight="400"
                color="yellow.400"
                fontSize="lg"
                textAlign="left"
              >
                Sign Up
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default LogIn;