// Images
import editBlack from "./../../assets/editBlack.png";
import React from "react";
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
  Textarea,
  Input,
  Flex,
  Select,
  Box,
} from "@chakra-ui/react";


function EditModal(){
    const { isOpen, onOpen, onClose } = useDisclosure();
   
    // Current date
  const now = new Date();

  return (
    <>
      <Tooltip hasArrow label="edit" bg="gray.600">
        <Box as="button">
          <Image src={editBlack}  w="5" h="5" mx="4" onClick={onOpen} />
        </Box>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="blue.200">
          <ModalHeader>
            <Text
              fontSize="2xl"
              fontFamily="roboto"
              color="black"
              fontWeight="700"
            >
              Edit Your Trip Specs
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex mb="1" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                From
              </Text>
              <Flex w="80%">
                <Input
                  placeholder="City"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                />
                <Input
                  placeholder="Street"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                />
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                />
              </Flex>
            </Flex>
            <Flex my="1" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                To
              </Text>
              <Flex w="80%">
                <Input
                  placeholder="City"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                />
                <Input
                  placeholder="Street"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                  mr="1"
                />
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  borderRadius="0"
                  borderWidth="0"
                />
              </Flex>
            </Flex>
            <Flex my="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="center"
              >
                Company
              </Text>
              <Select
                w="80%"
                placeholder="-- None --"
                size="sm"
                bg="white"
                borderRadius="0"
                borderWidth="0"
              ></Select>
            </Flex>
            <Flex my="4">
              <Flex w="50%" justifyContent="space-between">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                >
                  Date
                </Text>
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  w="60%"
                  borderRadius="0"
                  borderWidth="0"
                  type="date"
                  min={now.toISOString().substring(0, 10)}
                />
              </Flex>
              <Flex w="50%" justifyContent="space-between">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                  pl="4"
                >
                  Time
                </Text>
                <Input
                  placeholder="Building"
                  size="sm"
                  bg="white"
                  w="60%"
                  borderRadius="0"
                  borderWidth="0"
                  type="time"
                />
              </Flex>
            </Flex>
            <Flex my="4">
              <Flex w="50%" justifyContent="space-between">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                >
                  Seats
                </Text>
                <Input
                  placeholder="Number of Seats"
                  size="sm"
                  bg="white"
                  w="60%"
                  borderRadius="0"
                  borderWidth="0"
                  type="number"
                  min="1"
                  max="7"
                />
              </Flex>
              <Flex w="50%" justifyContent="space-between">
                <Text
                  fontSize="lg"
                  fontFamily="roboto"
                  color="black"
                  fontWeight="700"
                  lineHeight="1"
                  alignSelf="center"
                  pl="4"
                >
                  Luggages
                </Text>
                <Input
                  placeholder="Number of Luggages"
                  size="sm"
                  bg="white"
                  w="60%"
                  borderRadius="0"
                  borderWidth="0"
                  type="number"
                />
              </Flex>
            </Flex>
            <Flex mt="4" justifyContent="space-between">
              <Text
                fontSize="lg"
                fontFamily="roboto"
                color="black"
                fontWeight="700"
                lineHeight="1"
                alignSelf="flex-start"
              >
                Description
              </Text>

              <Textarea
                placeholder="Enter any additional description (Specific location, need, etc...)"
                size="sm"
                bg="white"
                rows="4"
                borderRadius="0"
                w="80%"
                borderWidth="0"
              />
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
              Book
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );

}
export default EditModal;
