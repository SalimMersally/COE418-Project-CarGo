import React, {useContext, useEffect, useState} from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {AppContext} from "../../StateProvider";
import MyCarBookingItem from "./MyCarBookingItem";
import axios from "axios";

export default function MyCarsBookings() {
    const [state] = useContext(AppContext);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        getBookings();
    }, []);

    function getBookings() {
        axios
            .get("http://localhost:8080/api/booking/car", {
                headers: {
                    'Authorization': `Bearer ${state.userToken}`
                }
            })
            .then((res) => {
                setBookingList(res.data);
                console.log(res.data)
            });
    }

    return (
        <>
            <Flex justifyContent="space-between" alignItems="center" pt="2">
                <Text
                    fontFamily="roboto"
                    fontSize="3xl"
                    fontWeight="700"
                    textAlign="left"
                >
                    Bookings
                </Text>
            </Flex>
            <hr className="info" my="2"/>
            <Box py={2}>
                {bookingList.map((booking) => <MyCarBookingItem booking={booking} key={booking.bookingId} getBooking={getBookings}/>)}
            </Box>
        </>
    );
}