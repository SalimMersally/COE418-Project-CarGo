import React, {useContext} from "react";
import {
    Box,
    Button,
    Flex,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import {FaTrash} from "react-icons/fa";
import axios from "axios";
import {AppContext} from "../../StateProvider";

//Images

export default function DeleteCarModal(props) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [state] = useContext(AppContext);

    function deleteTrip() {
        axios
            .delete("http://localhost:8080/api/car/" + props.carId, {
                headers: {
                    'Authorization': `Bearer ${state.userToken}`
                }
            })
            .then((res) => {
                if(res.status === 200) {
                    props.fetchCars();
                    onClose();
                }
            })
    }

    return (
        <>
            <Tooltip hasArrow label="Delete Car" bg="gray.400">
                <Box as="button">
                    <FaTrash size={30} color={"#0072C6"} className={"trashIcon"} onClick={onOpen}/>
                </Box>
            </Tooltip>
            {isOpen ?
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size="sm"
                    closeOnOverlayClick={false}
                    isCentered
                >
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader pb={0}>
                            <Text
                                fontSize="2xl"
                                fontFamily="roboto"
                                color="black"
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
                                    mr="8"
                                    p="5"
                                    bg="black"
                                    color="white"
                                    type="submit"
                                    _hover={{bg: "#0072C6", color: "black"}}
                                    _active={{bg: "#00538d"}}
                                    onClick={deleteTrip}
                                >
                                    Delete
                                </Button>
                                <Button
                                    borderRadius="0"
                                    mr="2"
                                    p="5"
                                    bg="black"
                                    color="white"
                                    type="submit"
                                    _hover={{bg: "#0072C6", color: "black"}}
                                    _active={{bg: "#00538d"}}
                                    onClick={onClose}
                                >
                                    Cancel
                                </Button>
                            </Flex>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                : <></>}
        </>
    );
}