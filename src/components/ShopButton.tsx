import {Flex} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import React from "react";
import {useMenuItemStore} from "../services/store";


const ShopButton = () => {

    const setTitle = useMenuItemStore(state => state.setSideBarTitle);
    const handleClick = (newTitle : string) : void => {
        setTitle(newTitle);
    }

    return (
        <>
            <NavLink to={"/shop"}
                     onClick={() => handleClick("Categories")}>
                <Flex cursor="pointer"
                      pt={3}
                      justifyContent={"center"}
                      borderTopRadius={5}
                      height={"50px"}
                      bg={"#232f3e"}
                      width={"150px"}
                      color={"#f2f2f2"}
                      _hover={{background: "#ff9900",
                          color: "#000000"}}>
                    Shop
                </Flex>
            </NavLink>
        </>
    )

}

export default ShopButton;