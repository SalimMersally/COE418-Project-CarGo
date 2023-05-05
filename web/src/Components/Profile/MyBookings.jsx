import React, {useContext, useEffect, useState} from "react";

import {Box, Flex, Text, Tooltip} from "@chakra-ui/react";

// Components
import {Link} from "react-router-dom";
import {RiAddCircleFill} from "react-icons/ri";
import axios from "axios";
import {AppContext} from "../../StateProvider";
import BookingItem from "./BookingItem";

// Images

export default function MyBookings() {
    const [state] = useContext(AppContext);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        getBookings();
    }, []);

    function getBookings() {
        axios
            .get("http://localhost:8080/api/booking", {
                headers: {
                    'Authorization': `Bearer ${state.userToken}`
                }
            })
            .then((res) => {
                setBookingList(res.data);
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
                <Flex alignItems="center">
                    <Tooltip hasArrow label="book a new car" bg="gray.600">
                        <Link to="/book-a-car">
                            <RiAddCircleFill size={30} color={"#00538d"}/>
                        </Link>
                    </Tooltip>
                </Flex>
            </Flex>
            <hr className="info" my="2"/>
            <Box my="2">
                {bookingList.map((booking) => <BookingItem booking={booking} key={booking.bookingId} getBookings={getBookings}/>)}
            </Box>
        </>
    );
}

