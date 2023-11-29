import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react";
import Header from "../components/Header";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Header/>
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>{isRouteErrorResponse(error) ? 'This page does not exists' : 'An unexpected error occurred'}</Text>
            </Box>
        </>
    )
}

export default ErrorPage;