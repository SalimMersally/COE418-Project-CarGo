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
import close from "./../../assets/close.png";

function DeleteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box as="button">
        <Tooltip hasArrow label="Delete" bg="gray.600">
          <Image src={close} w="5" h="5" onClick={onOpen} />
        </Tooltip>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="blue.200">
          <ModalHeader>
            <Text
              fontSize="2xl"
              fontFamily="roboto"
              color="gray.800"
              fontWeight="700"
              textAlign="center"
            >
              Are you sure you want to delete this trip?
            </Text>
          </ModalHeader>
          <ModalFooter>
            <Flex justifyContent="center" w="100%">
              <Button
                borderRadius="0"
                p="5"
                bg="black"
                color="white"
                type="submit"
                _hover={{ bg: "#252525", color: "red" }}
                _active={{ bg: "black" }}
                mr="4"
              >
                Delete
              </Button>
              <Button
                borderRadius="0"
                p="5"
                bg="black"
                color="white"
                type="submit"
                _hover={{ bg: "#252525", color: "blue.600" }}
                _active={{ bg: "black" }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteModal;