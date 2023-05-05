import {Box, Card, CardBody, CardFooter, Divider, Flex, GridItem, Image, Text, Tooltip} from "@chakra-ui/react";
import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../../StateProvider";
import axios from "axios";
import {FaTrash} from "react-icons/fa";
import {MdAddCircle} from "react-icons/md";
import DeleteCarModal from "./DeleteCarModal";

export default function MyCarCard(props) {
    const [state] = useContext(AppContext);
    const [image, setImage] = useState();

    useEffect(() => {
        if (state.isLogged) {
            axios
                .get("http://localhost:8080/api/image/" + props.imageName, {
                    headers: {
                        'Authorization': `Bearer ${state.userToken}`
                    },
                    responseType: 'blob',
                })
                .then((res) => {
                    // console.log(res)
                    const imageObjectURL = URL.createObjectURL(res.data);
                    setImage(imageObjectURL);
                });
        }
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
            {/*<Link to={"/car/" + props.carId}>*/}
            <Card maxW='sm'>
                <CardBody p={0}>
                    <Flex h={"30vh"} alignItems={"center"} justifyContent={"center"}>
                        <Image src={image} borderRadius='0' maxW={"100%"} maxH={"100%"}/>
                    </Flex>
                    <Text fontSize={"2xl"} fontWeight={600}
                          px={4}>{capitalizeFirstLetters(props.make + " " + props.model)} #{props.year}</Text>
                    <Text fontSize={"l"} fontWeight={400}
                          px={4} pt={1}><b>Color: </b>{props.color}</Text>
                    <Text fontSize={"l"} fontWeight={400}
                          px={4} pt={1}><b>Plate Number: </b>{props.plateNumber}</Text>
                    <Text fontSize={"l"} fontWeight={400}
                          px={4} pt={1}><b>Location: </b>{props.location}</Text>
                    <Text fontSize={"l"} fontWeight={400}
                          px={4} py={1}><b>Description : </b>{props.description}</Text>
                </CardBody>
                <Divider/>
                <CardFooter justifyContent={"space-between"} p={4}>
                    <DeleteCarModal carId={props.carId} fetchCars={props.fetchCars}/>
                    <Text fontSize={"xl"} fontWeight={500}>
                        {props.costPerDay} $/day
                    </Text>
                </CardFooter>
            </Card>
            {/*</Link>*/}
        </GridItem>
    );
}