import {Card, CardBody, CardFooter, Divider, Flex, GridItem, Image, Text} from "@chakra-ui/react";

import car from "./../../assets/car.png"
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../StateProvider";
import axios from "axios";

export default function MyCarCard(props) {
    const [state] = useContext(AppContext);
    const [image, setImage] = useState();

    useEffect(() => {
        if (state.isLogged) {
            axios
                .get("http://localhost:8080/api/auth", {
                    headers: {
                        'Authorization': `Bearer ${state.userToken}`
                    }
                })
                .then((res) => {
                    // console.log(res.data?.email + props.carId.toString() + ".png")
                    const imageName = res.data?.email + props.carId.toString() + ".png"

                    axios
                        .get("http://localhost:8080/api/image/" + imageName, {
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
                <Card maxW='sm' _hover={{transform: "scale(1.05)"}}
                      _active={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <CardBody p={0} >
                        <Flex h={"30vh"} alignItems={"center"} justifyContent={"center"}>
                            <Image src={image} borderRadius='0' maxW={"100%"} maxH={"100%"}/>
                        </Flex>
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
            {/*</Link>*/}
        </GridItem>
    );
}