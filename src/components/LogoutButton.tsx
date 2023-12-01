import React from 'react';
import useLogout from "../hooks/useLogOut";
import {Link} from "react-router-dom";
import storage from "../hooks/useStoredState";
import {Flex} from "@chakra-ui/react";
import {useAuthStore} from "../services/store";

const LogoutButton: React.FC = () => {

    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    const { mutate: logout } = useLogout();
    const handleLogout = async () => {
        logout();
        storage.remove('token');
        storage.remove('user');
        console.log("storage cleared");
    };
    return (
        <Link to={"/"} >
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
                {isLoggedIn ? "Logout" : "Register"}
            </Flex>
        </Link>
    )
};

export default LogoutButton;