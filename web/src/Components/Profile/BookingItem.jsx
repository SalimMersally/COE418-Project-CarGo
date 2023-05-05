import React from "react";
import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import EditModal from "./EditModal"


// Components
import DeleteModal from "./DeleteModal";

function BookingItem(props) {
  const from = props.info.from;
  const to = props.info.to;
  const time = props.info.time;
  const compName = props.info.compName;
  const driverName = props.info.driverName;
  const carModel = props.info.carModel;
  const compNb = props.info.compNb;
  const driverNb = props.info.driverNb;
  const carNb = props.info.carNb;

  let sx;
  if (props.isHistory) {
    sx = `rgba(196, 196, 196, ${props.opacity})`;
  } else {
    sx = `rgba(	0, 114, 198, ${props.opacity})`;
  }

  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      textAlign="left"
      p="4"
      my="2"
      sx={{
        backgroundColor: sx,
      }}
    >
      <Box  w="45%" verticalAlign="center">
        <Text fontFamily="roboto" fontWeight="600" fontSize="lg">
          From: {from}
        </Text>
        <Text fontFamily="roboto" fontWeight="600" fontSize="lg">
          To: {to}
        </Text>
      </Box>
      <Box w="45%">
        <Text fontFamily="roboto" fontWeight="600" fontSize="md">
          Car Id: {compName}
        </Text>
        <Text fontFamily="roboto" fontWeight="600" fontSize="md">
          Car Model: {carModel}
        </Text>
        <Text fontFamily="roboto" fontWeight="600" fontSize="md">
          Plate Nb: {carNb}
        </Text>
        <Text fontFamily="roboto" fontWeight="600" fontSize="md">
          Booking Time: {driverNb}
        </Text>
      </Box>
      <Flex w="10%" justifyContent="flex-end" alignItems="center">
        <EditModal/>
        <DeleteModal />
      </Flex>
    </Flex>
  );
}

export default BookingItem;