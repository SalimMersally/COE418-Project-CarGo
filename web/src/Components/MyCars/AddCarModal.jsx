import React, {useContext, useRef, useState} from "react";
import {
    Box,
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
    Textarea,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";

//Images
import {MdAddCircle} from "react-icons/md";
import axios from "axios";
import {AppContext} from "../../StateProvider";

export default function AddCarModal(props) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [state] = useContext(AppContext);

    const [error, setError] = useState("");
    const [image, setImage] = useState();

    const makeRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();
    const colorRef = useRef();
    const plateNumberRef = useRef();
    const locationRef = useRef();
    const costPerDayRef = useRef();
    const descriptionRef = useRef();

    function submitCar() {
        let currentError = getError();
        if (currentError === "") {
            axios
                .post("http://localhost:8080/api/car", {
                    make: makeRef.current.value,
                    model: modelRef.current.value,
                    year: yearRef.current.value,
                    color: colorRef.current.value,
                    plateNumber: plateNumberRef.current.value,
                    location: locationRef.current.value,
                    costPerDay: costPerDayRef.current.value,
                    description: descriptionRef.current.value,
                }, {
                    headers: {
                        'Authorization': `Bearer ${state.userToken}`
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        addImage(image, res.data.carId);
                        onClose();
                    }
                })
        } else {
            setError(currentError);
        }
    }

    function getError() {
        if (makeRef.current.value === ""
            || modelRef.current.value === ""
            || yearRef.current.value === ""
            || colorRef.current.value === ""
            || plateNumberRef.current.value === ""
            || locationRef.current.value === ""
            || costPerDayRef.current.value === ""
            || descriptionRef.current.value === "") {
            return "Please Fill All Values";
        } else {
            return "";
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
            <Tooltip hasArrow label="Add a new Car" bg="gray.400">
                <Box as="button">
                    <MdAddCircle size={70} onClick={onOpen} color={"#0072C6"} className={"addButton"}/>
                </Box>
            </Tooltip>
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
                                Add a New Car
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
                                    Maker
                                </Text>
                                <Input
                                    placeholder={"Car Maker"}
                                    w={"70%"}
                                    mr="1"
                                    ref={makeRef}
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
                                    Model
                                </Text>
                                <Input
                                    placeholder={"Car Model"}
                                    w={"70%"}
                                    mr="1"
                                    ref={modelRef}
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
                                    Year Of Production
                                </Text>
                                <Input
                                    placeholder={"Year Of Production"}
                                    type={"number"}
                                    w={"70%"}
                                    mr="1"
                                    ref={yearRef}
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
                                    Color
                                </Text>
                                <Input
                                    placeholder={"Color"}
                                    w={"70%"}
                                    mr="1"
                                    ref={colorRef}
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
                                    Plate Number
                                </Text>
                                <Input
                                    placeholder={"Plate Number"}
                                    w={"70%"}
                                    mr="1"
                                    ref={plateNumberRef}
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
                                    Location
                                </Text>
                                <Input
                                    placeholder={"Car current location"}
                                    w={"70%"}
                                    mr="1"
                                    ref={locationRef}
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
                                    Cost Per Day ($)
                                </Text>
                                <Input
                                    placeholder={"Cost Per Day ($)"}
                                    type={"number"}
                                    w={"70%"}
                                    mr="1"
                                    ref={costPerDayRef}
                                />
                            </Flex>
                            <Flex justifyContent="space-between">
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
                                    placeholder="Enter any additional description about thee car"
                                    w={"70%"}
                                    rows="1"
                                    mr="1"
                                    ref={descriptionRef}
                                />
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
                                    Image
                                </Text>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    w={"70%"}
                                    mr="1"
                                    borderWidth={0}
                                    borderRadius={0}
                                    px={0}
                                    onChange={(e) => setImage(e.target.files[0])}
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
                                onClick={submitCar}
                            >
                                ADD CAR
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                : <></>
            }
        </>
    );
}