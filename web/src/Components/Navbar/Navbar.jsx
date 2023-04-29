import React, {useContext} from "react";
import {AppContext} from "../../StateProvider";
import {Link} from "react-router-dom";
import CarGoLogo from "./../../assets/CarGoLogo.png";
import {
    Box,
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
} from "@chakra-ui/react";

import {FaUserAlt} from "react-icons/fa";

function Navbar() {
    const [state] = useContext(AppContext);

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
                </ButtonGroup>
            </Flex>
        </Flex>
        <Flex alignItems={"center"}>
            {state.isLogged ?
                <Box>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<FaUserAlt color={"#0072C6"}  size={30}/>}
                            borderWidth={0}
                            backgroundColor={"transparent"}
                            _hover={{bg: "transparent", borderWidth: "2px"}}
                            _expanded={{bg: "transparent", borderWidth: "2px", borderColor: "#0072C6"}}
                            _focus={{boxShadow: "transparent"}}
                        />
                        <MenuList>
                            <MenuItem _hover={{bg: "#38a8ff"}} _active={{bg: "#0072C6"}}>
                                <Link to={"/dashboard"}>Dashboard</Link>
                            </MenuItem>
                            <MenuItem>
                                Log Out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                :
                <Button bg="transparent" variant="link" colorScheme="button" mr="2">
                    <Link to="/login">LOGIN</Link>
                </Button>
            }
        </Flex>
    </Flex>);
}

export default Navbar;