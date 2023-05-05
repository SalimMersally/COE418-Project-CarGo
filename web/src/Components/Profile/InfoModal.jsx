import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Tooltip,
  Text,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";

//Images
import edit from "./../../assets/editBlack.png";

export default function InfoModal(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box as="button" alignSelf="flex-end">
        <Tooltip hasArrow label="Edit" bg="gray.400">
          <Image src={edit} w="4" h="4" mr="6" onClick={onOpen} />
        </Tooltip>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="blue.600">
          <ModalHeader>
            <Text
              fontSize="2xl"
              fontFamily="roboto"
              color="black"
              fontWeight="700"
            >
              Edit your information
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
                w="30%"
              >
                First Name
              </Text>
              <Input
                placeholder="First Name"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="65%"
              />
            </Flex>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
                w="30%"
              >
                Last Name
              </Text>
              <Input
                placeholder="Last Name"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
                w="65%"
              />
            </Flex>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="flex-start"
                w="30%"
              >
                Old Password
              </Text>
              <InputGroup size="sm" w="65%">
                <Input
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  placeholder="Type your old password"
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={handleClick}
                    bg="gray.300"
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="flex-start"
                w="30%"
              >
                New Password
              </Text>
              <InputGroup size="sm" w="65%">
                <Input
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  placeholder="Type your old password"
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={handleClick}
                    bg="gray.300"
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex mb="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="flex-start"
                w="30%"
              >
                Confirm New Password
              </Text>
              <InputGroup size="sm" w="65%">
                <Input
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  placeholder="Type your old password"
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={handleClick}
                    bg="gray.300"
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              borderRadius="0"
              p="5"
              bg="black"
              color="white"
              type="submit"
              _hover={{ bg: "#252525", color: "#FFC000" }}
              _active={{ bg: "black" }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
