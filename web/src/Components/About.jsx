import React from "react";
import {Box, Container, Flex, Text, Image} from "@chakra-ui/react";
//Images
import AhmadImage from "../assets/ahmad.jpg";
import SalimImage from "../assets/salim.jpeg";
import LamisImage from "../assets/lamis.jpeg";
import AboutUs from "../assets/aboutus.jpg";
export default function About(){
    return (
                <Box mb="4">
                <Text fontFamily="roboto" backgroundImage={AboutUs} fontSize="5xl" fontWeight="700" color="White" bgSize="cover" >
                                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABOUT US
                                            </Text>
                    <Container maxW="container.xl" textAlign="left" px="6">


                                    <Text fontFamily="Roboto" fontSize="1.1rem" fontWeight="400" color="#333" lineHeight="1.5" my={8} textAlign="justify">


                                      Welcome to CarGo your premier destination for streamlined car rental services. We are a team of passionate professionals dedicated to providing you with an unparalleled car rental experience. Our goal is to make the rental process faster,
                                      easier, and more convenient for you through the power of technology.
                                      <br />
                                      <br />
                                      With our innovative website, you can browse, book, and manage your rental cars from anywhere,
                                      at any time. Our user-centric design ensures that you get a seamless and hassle-free experience
                                      when using our platform. We believe that renting a car should be stress-free and enjoyable,
                                      and we're here to make that a reality for you.
                                      <br />
                                      <br />
                                      At CarGo, we pride ourselves on providing exceptional customer service. Our team of experts
                                      is always available to assist you with any questions or concerns you may have. We strive to
                                      exceed your expectations and ensure that you are completely satisfied with our services.
                                      <br />
                                      <br />
                                      Thank you for choosing CarGo for your car rental needs. We look forward to serving you
                                      and making your rental experience as smooth and enjoyable as possible
                                    </Text>
                        <Flex justifyContent="center" flexWrap="wrap">
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            bg="black"
                            color="white"
                            my={5}
                            mx={10}
                            p="5"
                          >
                            <Box bg="white" borderRadius="full" mb="4">
                              <Image src={AhmadImage} alt="placeholder" w="150" h="150" borderRadius="full" />
                            </Box>
                            <Box p="6" textAlign="center">
                              <Text fontSize="1xl" fontWeight="500" mb="2">
                                Ahmad AlSayed Al Sabsabi
                              </Text>
                              <Text fontSize="1xl">
                                Computer Engineer<br />
                                ahmadalsabsabii@gmail.com
                              </Text>
                            </Box>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            bg="black"
                            color="white"
                            my={5}
                            mx={10}
                            p="5"
                          >
                            <Box bg="white" borderRadius="full" mb="4">
                              <Image src={SalimImage} alt="placeholder" w="150" h="150" borderRadius="full" />
                            </Box>
                            <Box p="6" textAlign="center">
                              <Text fontSize="1xl" fontWeight="500" mb="2">
                                Salim Al Mersally
                              </Text>
                              <Text fontSize="1xl">
                                Software Engineer <br />
                                salimalmersally@gmail.com
                              </Text>
                            </Box>
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            bg="black"
                            color="white"
                            my={5}
                            mx={10}
                            p="5"
                          >
                            <Box bg="white" borderRadius="full" mb="4">
                              <Image src={LamisImage} alt="placeholder" w="150" h="150" borderRadius="full" />
                            </Box>
                            <Box p="6" textAlign="center">
                              <Text fontSize="1xl" fontWeight="500" mb="2">
                                Lamis Armoush
                              </Text>
                              <Text fontSize="1xl">
                                Computer Engineer <br />
                                lamisarmoush@gmail.com
                              </Text>
                            </Box>
                          </Box>
                        </Flex>


                    </Container>

                </Box>
    );

}