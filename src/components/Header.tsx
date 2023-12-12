import {Box, Flex, HStack, VStack} from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";
import {useAuthStore} from "../services/store";
import HomeButton from "./HomeButton";
import ShopButton from "./ShopButton";
import SellButton from "./SellButton";
import ContactButton from "./ContactButton";
import LoginButton from "./LoginButton";
import FavoritesButton from "./FavoritesButton";
import CartButton from "./CartButton";
import Title from "./Title";
import SideBarTitle from "./SideBarTitle";
import ProfileButton from "./ProfileButton";
import RegisterButton from "./RegisterButton";
import {useNavigate} from "react-router-dom";

const Header: React.FC = () => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    return (
       <Flex>
           <HStack
               spacing={0}
               overflow-y="hidden"
               height="160px"
               width={"100%"}
               zIndex="1"
               position="fixed"
               justifyContent={"center"}
               bg={"#000000"}>
               <VStack spacing={0} height={"160px"}>
                   <VStack height={"90px"} width={"400px"} bg={"#000000"}>
                       <Title/>
                   </VStack>
                   <HStack  pt={5} spacing={5} bg={"#f2f2f2"} height={"70px"} width={"400px"}>
                      <Box borderTopRadius={5} justifyContent={"center"} pl={5} pt={3} ml={5} height={"50px"}  bg={"#232f3e"} width={"350px"}>
                          <SideBarTitle/>
                      </Box>
                   </HStack>
               </VStack>
               <VStack spacing={0} height={"160px"} width={"100%"}>
                   <SearchInput/>
                   <HStack pt={5} spacing={5} height={"70px"} width={"100%"} bg={"#f2f2f2"}>
                       <HomeButton/>
                       <ShopButton/>
                       <SellButton/>
                       <ContactButton/>
                   </HStack>
               </VStack>
               <VStack height={"160px"} width={"350px"}>
                   <HStack spacing={5} mt={2} justifyContent={"end"} pr={5} bg={"#000000"} height={"90px"} width={"350px"}>
                       <FavoritesButton/>
                       <CartButton/>
                   </HStack>
                   <HStack justifyContent={"end"} pr={5} pt={5} spacing={5} height={"70px"} width={"100%"} bg={"#f2f2f2"}>
                       {isLoggedIn ? <ProfileButton/> : <LoginButton/>}
                       {isLoggedIn ? <LogoutButton/> : <RegisterButton/>}
                   </HStack>
               </VStack>
           </HStack>
       </Flex>
    )
}

export default Header;