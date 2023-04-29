import {Card, CardBody, CardFooter, Divider, GridItem, Image, Text} from "@chakra-ui/react";

import car from "./../../assets/car.png"

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
            <Card maxW='sm'>
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
        </GridItem>
    );
}