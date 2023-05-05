import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../../StateProvider";
import {Link} from "react-router-dom";
import CarGoLogo from "./../../assets/CarGoLogo.png";
import {
    Button,
    ButtonGroup,
    Center,
    Flex,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";

import {FaUserAlt} from "react-icons/fa";
import axios from "axios";

function Navbar() {
    const [state, dispatch] = useContext(AppContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (state.isLogged) {
            axios
                .get("http://localhost:8080/api/auth", {
                    headers: {
                        'Authorization': `Bearer ${state.userToken}`
                    }
                })
                .then((res) => {
                    setUser(res.data);
                });
        }
    }, [state.isLogged]);

    function logout() {
        dispatch({type: "SET_LOG", value: false});
        dispatch({type: "SET_TOKEN", value: ""});
    }

    function capitalizeFirstLetters(str) {
        let words = str.split(" ");

        let capitalizedWords = words.map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return capitalizedWords.join(" ");
    }


    return (<Flex as="header" zIndex="9999" w="100%" bg="black" px="10" py={2} justifyContent={"space-between"}>
        <Flex>
            <Center pr={10}>
                <Image src={CarGoLogo} w={32}/>
            </Center>
            <Flex pr="4" py="4">
                <ButtonGroup
                    bg="transparent"
                    variant="link"
                    colorScheme="button"
                    mr="2"
                >
                    <Button mr="2">
                        <Link to="/">HOME</Link>
                    </Button>
                    <Button mr="2">
                        <Link to="/about">ABOUT</Link>
                    </Button>
                    <Button mr="2">
                        <Link to="/contact">CONTACT</Link>
                    </Button>
                    <Button mr="2">
                        <Link to="/book-a-car">BOOK</Link>
                    </Button>
                    <Button mr="2">
                        <Link to="/navigate">NAVIGATE</Link>
                    </Button>
                </ButtonGroup>
            </Flex>
        </Flex>
        <Flex alignItems={"center"}>
            {state.isLogged ?
                <Flex alignItems={"center"}>
                    <Text color={"white"} pr={4} fontSize={'xl'}
                          fontWeight={400}>{capitalizeFirstLetters(user?.firstName + " " + user?.lastName)}</Text>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<FaUserAlt color={"#0072C6"} size={30}/>}
                            borderWidth={0}
                            backgroundColor={"transparent"}
                            _hover={{bg: "transparent", borderWidth: "2px"}}
                            _expanded={{bg: "transparent", borderWidth: "2px", borderColor: "#0072C6"}}
                            _focus={{boxShadow: "transparent"}}
                        />
                        <MenuList>
                            <Link to={"/profile"}>
                                <MenuItem _hover={{bg: "#38a8ff"}} _active={{bg: "#0072C6"}}>
                                    Profile
                                </MenuItem>
                            </Link>
                            <Link to={"/my-cars"}>
                                <MenuItem _hover={{bg: "#38a8ff"}} _active={{bg: "#0072C6"}}>
                                    My Cars
                                </MenuItem>
                            </Link>
                            <Link to={"/logout"}>
                                <MenuItem _hover={{bg: "#38a8ff"}} _active={{bg: "#0072C6"}} onClick={logout}>
                                    Log Out
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Flex>
                :
                <Button bg="transparent" variant="link" colorScheme="button" mr="2">
                    <Link to="/login">LOGIN</Link>
                </Button>
            }
        </Flex>
    </Flex>);
}

export default Navbar;