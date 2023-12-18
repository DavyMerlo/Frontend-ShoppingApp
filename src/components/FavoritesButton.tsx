import {NavLink} from "react-router-dom";
import {Flex} from "@chakra-ui/react";
import React from "react";

const FavoritesButton = () => {

    return (
        <>
            <NavLink to={"/t"}>
                <Flex cursor="pointer"
                      borderRadius={5}
                      justifyContent={"center"}
                      height={"40px"}
                      bg={"#f2f2f2"}
                      pt={2}
                      width={"150px"}
                      _hover={{background: "#ff9900",
                          color: "#000000"}}>
                    Favorites
                </Flex>
            </NavLink>
        </>
    )
}

export default FavoritesButton;