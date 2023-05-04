import {Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import React, {useContext, useEffect} from "react";
import MyCarsList from "./MyCarsList";
import MyCarsBookings from "./MyCarsBookings";
import {AppContext} from "../../StateProvider";
import {useNavigate} from "react-router-dom";

import "./MyCars.css"

export default function MyCars() {
    const [state,] = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!state.isLogged) {
            navigate("/login");
        }
    }, []);

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
                MY CARS
            </Text>
            <Tabs>
                <TabList>
                    <Tab>My Cars</Tab>
                    <Tab>My Cars' Bookings</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <MyCarsList/>
                    </TabPanel>
                    <TabPanel>
                        <MyCarsBookings/>
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