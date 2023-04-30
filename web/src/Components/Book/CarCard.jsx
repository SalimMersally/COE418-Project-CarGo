import {Card, CardBody, CardFooter, Divider, GridItem, Image, Text} from "@chakra-ui/react";

import car from "./../../assets/car.png"
import {Link} from "react-router-dom";

export default function CarCard(props) {

    function capitalizeFirstLetters(str) {
        let words = str.split(" ");

        let capitalizedWords = words.map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return capitalizedWords.join(" ");
    }

    return (
        <GridItem w='100%'>
            <Link to={"/car/" + props.carId}>
                <Card maxW='sm' _hover={{transform: "scale(1.05)"}}
                      _active={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <CardBody p={0}>
                        <Image src={car} borderRadius='0'/>
                        <Text fontSize={"2xl"} fontWeight={600}
                              p={4}>{capitalizeFirstLetters(props.make + " " + props.model)}</Text>
                    </CardBody>
                    <Divider/>
                    <CardFooter justifyContent={"flex-end"} p={4}>
                        <Text fontSize={"xl"} fontWeight={500}>
                            {props.costPerDay} $/day
                        </Text>
                    </CardFooter>
                </Card>
            </Link>
        </GridItem>
    );
}