import React from "react";
import {
  Image,
  Tooltip,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";

//Images
import add from "./../../assets/add.png";

function BookingModal() {
   return(   <Tooltip hasArrow label="book a new car" bg="gray.600">
        <Link to="/book-a-car">
          <Image src={add}  w="8" h="8" mx="8" />
        </Link>
      </Tooltip>
      );
}

export default BookingModal;