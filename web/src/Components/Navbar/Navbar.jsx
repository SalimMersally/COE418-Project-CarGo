import React, {useContext, useState} from "react";
import {AppContext} from "../../StateProvider";
import {Link, useNavigate} from "react-router-dom";
import CarGoLogo from "./../../assets/CarGoLogo.png";
import {Button, ButtonGroup, Center, Flex, Image,} from "@chakra-ui/react";

function Navbar() {
    const [state] = useContext(AppContext);
    const [name, setName] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    // 	if (state.user[0]) {
    // 		setName(state.user[0].firstName + " " + state.user[0].lastName);
    // 		navigate("/dashboard");
    // 	} else if (state.company[0]) {
    // 		setName(state.company[0].name);
    // 		setIsCompany(false);
    // 		navigate("/dashboard");
    // 	} else {
    // 		setName(null);
    // 	}
    // }, [state]);

    return (
        <Flex as="header" zIndex="9999" w="100%" bg="black" px="10" py={2}>
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
                        <Link to="/login">LOGIN</Link>
                    </Button>
                </ButtonGroup>
            </Flex>
        </Flex>
    );
}

export default Navbar;