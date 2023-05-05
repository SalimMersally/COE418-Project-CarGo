import React from "react";
import { Box, Flex, Image, Container, Text } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";

// Components
import InfoModal from "./InfoModal";

// Images
import userProfile from "./../../assets/userProfile.png";
import name from "./../../assets/name.png";
import emailPic from "./../../assets/email.png";
import phone from "./../../assets/phone.png";
import logout from "./../../assets/logout.png";

function Info() {
  const fName = "FName";
  const lName = "LName";
  const username = "UserName";
  const phoneNB = "+961 99 999 999";
  const email = "fname.lname@gmail.com";

  return (
    <Box w="100%" bg="white" alignSelf="flex-stretch" py="10">
      <Container maxW="container.sm">
        <Flex direction= "column" >
        
        <Image src={userProfile} w="50%"  py="2" mx="auto"/>
        
        <Box >

        <Flex direction="column" justifyContent="Left" w="100%">
        <Text
            align= "center"
            fontSize="3xl"
            fontFamily="roboto"
            fontWeight="700"
            color="black"
            py="2"
          >
            {fName} {lName}
          </Text>
          <InfoModal />
          
          
          <Flex mx="6" pt="4">
            <Image src={name} w="6" h="6" mr="6" />
            <Box w="85%">
              <Text
                fontSize="xl"
                fontFamily="roboto"
                fontWeight="400"
                color="black"
                textAlign="left"
                pb="2"
              >
                {username}
              </Text>
              <hr className="info" />
            </Box>
          </Flex>
        </Flex>
        <Flex mx="6" pt="4">
          <Image src={phone} w="6" h="6" mr="6" />
          <Box w="85%">
            <Text
             
              fontSize="xl"
              fontFamily="roboto"
              fontWeight="400"
              color="black"
              textAlign="left"
              pb="2"
            >
              {phoneNB}
            </Text>
            <hr className="info" />
          </Box>
        </Flex>
        <Flex mx="6" pt="4">
          <Image src={emailPic} w="6" h="6" mr="6" />
          <Box w="85%">
            <Text
              
              fontSize="xl"
              fontFamily="roboto"
              fontWeight="400"
              color="Black"
              textAlign="left"
              pb="2"
            >
              {email}
            </Text>
            <hr className="info" />
          </Box>
        </Flex>
        <Flex mx="6" pt="4">
          <Image src={logout} w="6" h="6" mr="6" />
          <Box w="85%">
            <Text
              fontSize="xl"
              fontFamily="roboto"
              fontWeight="400"
              color="Black"
              textAlign="left"
              pb="2"
            >
              LOG OUT
            </Text>
            <hr className="info" />
          </Box>
        </Flex></Box></Flex>
      </Container>
    </Box>
  );
}

export default Info;