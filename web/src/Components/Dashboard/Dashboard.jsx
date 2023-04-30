import {Box, Container, Image, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import React, {useContext, useState} from "react";
import axios from "axios";
import {AppContext} from "../../StateProvider";
import UserInfo from "./UserInfo";
import MyCars from "./MyCars";
import MyBookings from "./MyBookings";
import MyCarsBookings from "./MyCarsBookings";

export default function Dashboard() {
    // const [image, setImage] = useState();
    // const [state, dispatch] = useContext(AppContext);

    // function onImageChange(e) {
    //     let imageData = e.target.files[0];
    //     imageData.name = "me.jpg"
    //
    //     let data = new FormData();
    //     data.append('image', imageData);
    //     setImage(URL.createObjectURL(imageData));
    //
    //     axios.post("http://localhost:8080/api/image", data, {
    //         headers: {
    //             'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    //             'Authorization': `Bearer ${state.userToken}`
    //         }
    //     }).then((response) => {
    //         console.log(response)
    //     });
    // }

    return (
        <Container maxW="container.xl" textAlign="left" p="6">
            <Text fontFamily="roboto" fontSize="5xl" fontWeight="700">
                MY DASHBOARD
            </Text>
            <Tabs>
                <TabList>
                    <Tab>Personal Information</Tab>
                    <Tab>My Cars</Tab>
                    <Tab>My Booking</Tab>
                    <Tab>My Cars' Bookings</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <UserInfo />
                    </TabPanel>
                    <TabPanel>
                        <MyCars />
                    </TabPanel>
                    <TabPanel>
                        <MyBookings />
                    </TabPanel>
                    <TabPanel>
                        <MyCarsBookings />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
        // <Box>
        //     <Input type="file" accept="image/*" onChange={onImageChange}/>
        //     <Image src={image}/>
        // </Box>
    );
}