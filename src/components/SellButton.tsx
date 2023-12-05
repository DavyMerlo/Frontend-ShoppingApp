import {NavLink} from "react-router-dom";
import {Flex} from "@chakra-ui/react";
import React from "react";
import {useMenuItemStore} from "../services/store";

const SellButton = () => {

    const setTitle = useMenuItemStore(state => state.setSideBarTitle);
    const handleClick = (newTitle : string) : void => {
        setTitle(newTitle);
    }

    return (
        <>
            <NavLink to={"/sell"}
                     onClick={() => handleClick("Sell")}>
                <Flex cursor="pointer"
                      pt={3}
                      borderTopRadius={5}
                      justifyContent={"center"}
                      height={"50px"}
                      color={"#f2f2f2"}
                      bg={"#232f3e"}
                      width={"150px"}
                      _hover={{background: "#ff9900",
                          color: "#000000"}}>
                    Sell
                </Flex>
            </NavLink>
        </>
    )

}

export default SellButton;