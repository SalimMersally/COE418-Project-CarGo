import React from "react";
import {Box, Container, Flex, Grid, GridItem, Image, Link, Text, background} from "@chakra-ui/react";


import AhmadImage from "../../assets/ahmad.jpg";
import SalimImage from "../../assets/salim.jpeg";
import LamisImage from "../../assets/lamis.jpeg";
import AboutUs from "../../assets/aboutus.jpg";
import { useSpeechSynthesis } from 'react-speech-kit';
export default function About() {
    const { speak, cancel } = useSpeechSynthesis();

    const handleMouseOver = (e) => {
      speak({ text: e.target.innerText });
      e.target.style.background = "lightgray";
    };
  
    const handleMouseOut = (e) => {
      cancel();
      e.target.style.background = "white";
    };
    return (
        <Box mb="4">
            <Box backgroundImage={AboutUs} backgroundRepeat="no-repeat" backgroundSize="cover">
                <Container maxW="container.xl" textAlign="left" px="6">
                    <Box mx="10" pt={10}>
                        <Text fontFamily="roboto" fontSize="5xl" fontWeight="700" color="white">
                            ABOUT US
                        </Text>
                    </Box>
                </Container>
            </Box>
            <Container maxW="container.xl" textAlign="left" px="6">
                <Box mx="10" pt={4}>
                    
                    <Text fontFamily="Roboto" fontSize="1.1rem" fontWeight="400" color="#333" lineHeight="1.5" my={8}
                          textAlign="justify">
                        <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        Welcome to CarGo your premier destination for streamlined car rental services.We are a team of
                        passionate professionals dedicated to providing you with an unparalleled car rental experience.
                        Our
                        goal is to make the rental process faster,
                        easier, and more convenient for you through the power of technology.</p>
                    
                        <br/><p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        With our innovative website, you can browse, book, and manage your rental cars from anywhere,
                        at any time. Our user-centric design ensures that you get a seamless and hassle-free experience
                        when using our platform. We believe that renting a car should be stress-free and enjoyable,
                        and we're here to make that a reality for you.</p>
                        
                        <br/><p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        At CarGo, we pride ourselves on providing exceptional customer service. Our team of experts
                        is always available to assist you with any questions or concerns you may have. We strive to
                        exceed your expectations and ensure that you are completely satisfied with our services.</p>
                        
                        <br/><p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        Thank you for choosing CarGo for your car rental needs. We look forward to serving you
                        and making your rental experience as smooth and enjoyable as possible</p>
                    </Text>
                </Box>
                <Grid templateColumns='repeat(3, 1fr)' gap={6} my={6}>
                    <GridItem>
                        <Flex alignItems={"center"} justifyContent={"center"} W={"100%"}>
                            <Image src={AhmadImage} maxW={"70%"} borderRadius={10}/>
                        </Flex>
                        <Text fontSize="1xl" fontWeight="500" my="2" textAlign={"center"}>
                            Ahmad AlSayed Al Sabsabi
                        </Text>
                        <Text fontSize="1xl" textAlign={"center"}>
                            Computer Engineer
                        </Text>
                        <Text fontSize="1xl" textAlign={"center"}>
                            <Link href="mailto:ahmad.alsayedalsabsabi@lau.edu" _hover={{color: "#0072C6"}}>ahmad.alsayedalsabsabi@lau.edu</Link>
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Flex alignItems={"center"} justifyContent={"center"} W={"100%"}>
                            <Image src={SalimImage} maxW={"70%"} borderRadius={10}/>
                        </Flex>
                        <Text fontSize="1xl" fontWeight="500" my="2" textAlign={"center"}>
                            Salim Al Mersally
                        </Text>
                        <Text fontSize="1xl" textAlign={"center"}>
                            Computer Engineer
                        </Text>
                        <Text fontSize="1xl" textAlign={"center"}>
                            <Link href="mailto:salim.almersally@lau.edu" _hover={{color: "#0072C6"}}>salim.almersally@lau.edu</Link>
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Flex alignItems={"center"} justifyContent={"center"} W={"100%"}>
                            <Image src={LamisImage} maxW={"70%"} borderRadius={10}/>
                        </Flex>
                        <Text fontSize="1xl" fontWeight="500" my="2" textAlign={"center"}>
                            Lamis Armoush
                        </Text>
                        <Text fontSize="1xl" textAlign={"center"}>
                            Computer Engineer
                        </Text>
                        <Text fontSize="1xl" textAlign={"center"}>
                            <Link href="mailto:lamis.armoush@lau.edu" _hover={{color: "#0072C6"}}>lamis.armoush@lau.edu</Link>
                        </Text>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );

}