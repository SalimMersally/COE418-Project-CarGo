import {Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import React from "react";
import UserInfo from "./UserInfo";
import MyBookings from "./MyBookings";

export default function Profile() {

    return (
        <Container maxW="container.xl" textAlign="left" p="6">
            <Text fontFamily="roboto" fontSize="5xl" fontWeight="700">
                MY PROFILE
            </Text>
            <Tabs>
                <TabList>
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