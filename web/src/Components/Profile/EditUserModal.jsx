import React, {useContext, useState} from "react";
import {
    Button,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

//Images
import {AppContext} from "../../StateProvider";
import axios from "axios";

export default function EditUserModal(props) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [state] = useContext(AppContext);

    const [error, setError] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function submitChanges() {
        let currentError = getError();
        if (currentError === "") {
            setError(currentError);
            axios
                .put("http://localhost:8080/api/auth", {
                    firstName: fName,
                    lastName: lName,
                    phoneNumber: phoneNumber,
                }, {
                    headers: {
                        'Authorization': `Bearer ${state.userToken}`
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        props.getUserData();
                        onClose();
                    }
                })
        } else {
            setError(currentError);
        }
    }

    function getError() {
        if (fName === "" || lName === "" || phoneNumber === "") {
            return "Please Fill All Values";
        } else if ( phoneNumber > 99999999 || phoneNumber < 10000000) {
            return "Incorrect Phone format, should be 8 digits"
        } else {
            return ""
        }
    }

    function addImage(imageData, carId) {
        if (state.isLogged) {
            let data = new FormData();
            data.append('image', imageData);
            data.append("carId", carId)

            axios.post("http://localhost:8080/api/image", data, {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    'Authorization': `Bearer ${state.userToken}`
                }
            }).then((res) => {
                props.fetchCars();
            });
        }
    }

    return (
        <>
            <Flex justifyContent={"center"}>
                <Button
                    borderRadius="0"
                    mt="10"
                    mr="2"
                    p="5"
                    bg="blue.400"
                    color="white"
                    type="submit"
                    _hover={{bg: "#00538d"}}
                    onClick={onOpen}
                    w={"50%"}
                >
                    EDIT
                </Button>
            </Flex>
            {isOpen ?
                <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>
                            <Text
                                fontSize="2xl"
                                fontFamily="roboto"
                                color="black"
                                fontWeight="700"
                            >
                                Edit Your Personal Information
                            </Text>
                        </ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody my={0} py={1}>
                            <Text
                                fontFamily="roboto"
                                fontSize="sm"
                                fontWeight="400"
                                color="red"
                            >
                                {error}
                            </Text>
                            <Flex mb="1" justifyContent="space-between">
                                <Text
                                    fontSize="lg"
                                    fontFamily="roboto"
                                    color="black"
                                    fontWeight="700"
                                    lineHeight="1"
                                    alignSelf="center"
                                >
                                    First Name
                                </Text>
                                <Input
                                    placeholder={"First Name"}
                                    w={"70%"}
                                    mr="1"
                                    value={fName}
                                    onChange={(e) => {
                                        setFName(e.target.value)
                                    }}
                                />
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
                                    Last Name
                                </Text>
                                <Input
                                    placeholder={"Last Name"}
                                    w={"70%"}
                                    mr="1"
                                    value={lName}
                                    onChange={(e) => {
                                        setLName(e.target.value)
                                    }}
                                />
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
                                    Phone Number
                                </Text>
                                <Input
                                    placeholder={"Phone Number"}
                                    type={"number"}
                                    w={"70%"}
                                    mr="1"
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        setPhoneNumber(e.target.value)
                                    }}
                                />
                            </Flex>
                        </ModalBody>
                        <ModalFooter my={0} py={2}>
                            <Button
                                borderRadius="0"
                                mr="2"
                                p="5"
                                bg="black"
                                color="white"
                                type="submit"
                                _hover={{bg: "#0072C6", color: "black"}}
                                _active={{bg: "#00538d"}}
                                onClick={submitChanges}
                            >
                                Edit
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                : <></>
            }
        </>
    );
}
