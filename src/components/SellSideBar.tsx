import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

const SellSideBar = () => {

    return (
        <Flex
            bg={"#f2f2f2"}
            pl={5}
            height="100vh">
            <Box w="350px"
                 flex="250px"
                 position={"fixed"} >
                <Box bg={"#232f3e"} pb={5} borderRadius={10}>
                    <Text>Sell Content here</Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default SellSideBar;