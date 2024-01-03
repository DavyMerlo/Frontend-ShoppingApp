import { useAuthStore, useMenuItemStore } from "../services/store";
import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import storage from "../hooks/useStoredState";
import User from "../entities/User";

const LoginButton = () => {
  const setTitle = useMenuItemStore((state) => state.setSideBarTitle);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = storage.get<User>("user");
  console.log(isLoggedIn);

  return (
    <>
      <NavLink to={"login"}>
        <Flex
          cursor="pointer"
          pt={3}
          borderTopRadius={5}
          justifyContent={"center"}
          height={"50px"}
          color={"#f2f2f2"}
          bg={"#232f3e"}
          width={"150px"}
          _hover={{ background: "#ff9900", color: "#000000" }}
        >
          Login
        </Flex>
      </NavLink>
    </>
  );
};

export default LoginButton;
