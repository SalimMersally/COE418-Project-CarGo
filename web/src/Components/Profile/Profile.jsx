import {Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text,Box} from "@chakra-ui/react";
import React from "react";
import UserInfo from "./UserInfo";
import MyBookings from "./MyBookings";

export default function Profile() {

    return (
        <Container maxW="container.xl" textAlign="left" p="6">
           
            <Tabs >
            <Text fontFamily="roboto" fontSize="4xl" fontWeight="1000">
                MY PROFILE
            </Text>
                <TabList >
                    <Tab>Personal Information</Tab>
                    <Tab>My Booking</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <UserInfo/>
                    </TabPanel>
                    <TabPanel>
                        <MyBookings/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}