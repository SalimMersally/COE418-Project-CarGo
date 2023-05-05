import {Card, CardBody, CardFooter, Divider, Flex, GridItem, Image, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function CarCard(props) {
    const [image, setImage] = useState();

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/image/" + props.imageName, {
                responseType: 'blob',
            })
            .then((res) => {
                const imageObjectURL = URL.createObjectURL(res.data);
                setImage(imageObjectURL);
            });
    }, []);

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
                        <Flex h={"30vh"} alignItems={"center"} justifyContent={"center"}>
                            <Image src={image} borderRadius='0' maxW={"100%"} maxH={"100%"}/>
                        </Flex>
                        <Text fontSize={"2xl"} fontWeight={600} p={4} pb={2}>
                            {capitalizeFirstLetters(props.make + " " + props.model)}
                        </Text>
                        <Text fontSize={"l"} fontWeight={400} px={4} pb={2}>
                            <b>Owner: </b>
                            {capitalizeFirstLetters(props.owner)}
                        </Text>
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