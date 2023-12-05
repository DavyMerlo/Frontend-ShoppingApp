import React from 'react';
import useLogout from "../hooks/useLogOut";
import {Link, NavLink} from "react-router-dom";
import storage from "../hooks/useStoredState";
import {Flex} from "@chakra-ui/react";
import {useAuthStore} from "../services/store";

const LogoutButton: React.FC = () => {

    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const logout = useAuthStore((state) => state.logout);

    // const { mutate: logout } = useLogout();
    const handleLogout = async () => {
        const user = storage.remove('token');
        const token = storage.remove('user');
        logout();
        console.log(user);
        console.log(token);
        console.log(isLoggedIn);
        console.log("storage cleared");
    };
    return (
        <NavLink to={"/"} onClick={handleLogout} >
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
        </NavLink>
    )
};

export default LogoutButton;