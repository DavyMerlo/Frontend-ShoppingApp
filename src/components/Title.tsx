import {Heading, Text} from "@chakra-ui/react";
import React from "react";


const Title = () => {
    return (
        <>
            <Heading pt={6} ml={0} as='h2' size='lg'>
                <Text color={"#f2f2f2"}>My E-shopping</Text>
            </Heading>
        </>
    )
}

export default Title;