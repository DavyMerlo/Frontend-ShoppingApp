import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader, Flex,
    Heading,
    HStack,
    Stack,
    Text,
} from "@chakra-ui/react";
import storage from "../hooks/useStoredState";
import User from "../entities/User";
import useLoggedInUser from "../hooks/useLoggedInUser";
import React from "react";
import {useMenuItemStore} from "../services/store";

const ProfileBox = () => {

    const user = storage.get<User>("user");

    const { data, isLoading, isError } = useLoggedInUser(user.id.toString());

    const option = useMenuItemStore(state => state.option);

    const fullName = user.firstName + " " + user.lastName;
    const street = data?.result.user.address.street;
    const houseNumber = data?.result.user.address.houseNumber;
    const busNumber = data?.result.user.address.busNumber;
    const localAuthority = data?.result.user.address.localAuthority;
    const postalCode = data?.result.user.address.postalCode;


    return (
        <Box  bg={"#232f3e"} borderBottomRadius={10}>
            <Card bg={"#232f3e"} align='start'>
                <CardHeader>
                    <Heading color={"#f2f2f2"} size='md'>{option}</Heading>
                </CardHeader>
                <CardBody width={"100%"} height={"100%"}>
                    <HStack justifyContent={"start"} width={"100%"} height={"100%"}>
                        <Avatar height={"240px"} width={"240px"} src='https://bit.ly/sage-adebayo' />
                        <Box pl={10} justifyContent={"center"}>
                            <Heading>
                                <Text color={"#f2f2f2"} fontWeight='bold'>{fullName}</Text>
                            </Heading>
                            <Text mt={5} color={"#f2f2f2"} fontSize="lg" fontWeight="bold">{street} {houseNumber} {busNumber}</Text>
                            <Text mt={5} color={"#f2f2f2"} fontSize="lg" fontWeight="bold">{postalCode} {localAuthority}</Text>
                            <Text mt={5} color={"#f2f2f2"} fontSize="lg" fontWeight="bold">{user.email}</Text>
                            <Text mt={5} color={"#f2f2f2"} fontSize="lg" fontWeight="bold">Client Number: {user.userName}</Text>
                        </Box>
                    </HStack>
                </CardBody>
                <CardFooter width={"100%"} height={"100%"}>
                    <HStack justifyContent={"end"} width={"100%"}>
                        <Heading>
                            <Text color={"#ff9900"} fontSize='1.0vw'>New address? Other name? You can adjust that and more here.</Text>
                        </Heading>
                        <Button bg={"#000000"} color={"#f2f2f2"}  _hover={{
                            background: "#ff9900",
                            color: "#000000",
                        }} colorScheme='blue'>Update Personal Information</Button>
                    </HStack>
                </CardFooter>
            </Card>
        </Box>
    )
}

export default ProfileBox;