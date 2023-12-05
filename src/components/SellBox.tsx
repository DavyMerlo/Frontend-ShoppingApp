import {Box, Card, CardBody, CardFooter, CardHeader, Heading, HStack} from "@chakra-ui/react";
import React from "react";

const SelBox = () => {

    return (
        <Box  bg={"#232f3e"} borderBottomRadius={10}>
            <Card bg={"#232f3e"} align='start'>
                <CardHeader>
                    <Heading color={"#f2f2f2"} size='md'>Sell Content Here</Heading>
                </CardHeader>
                <CardBody width={"100%"} height={"100%"}>
                    <HStack justifyContent={"start"} width={"100%"} height={"100%"}>

                    </HStack>
                </CardBody>
                <CardFooter width={"100%"} height={"100%"}>
                    <HStack justifyContent={"end"} width={"100%"}>

                    </HStack>
                </CardFooter>
            </Card>
        </Box>
    )
}

export default SelBox;