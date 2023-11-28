import {Box, Button, Flex, Heading, HStack, Spacer, Stack, Text, VStack} from "@chakra-ui/react";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";


const Header = () => {
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
                       <Heading pt={6} ml={0} as='h2' size='lg'>
                           <Text color={"#f2f2f2"}>My E-shopping</Text>
                       </Heading>
                   </VStack>
                   <HStack  pt={5} spacing={5} bg={"#f2f2f2"} height={"70px"} width={"400px"}>
                      <Box borderTopRadius={5} justifyContent={"center"} pl={5} pt={3} ml={5} height={"50px"}  bg={"#232f3e"} width={"350px"}>
                          <Heading fontSize={"20px"} color={"#f2f2f2"}>
                              Categories
                          </Heading>
                      </Box>
                   </HStack>
               </VStack>
               <VStack spacing={0} height={"160px"} width={"100%"}>
                   <SearchInput/>
                   <HStack pt={5} spacing={5} height={"70px"} width={"100%"} bg={"#f2f2f2"}>
                      <NavLink to={"dashboard/home"}>
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
                       <NavLink to={"/"}>
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
                                Cart
                           </Flex>
                       </NavLink>
                       <NavLink to={"/"}>
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
                                Checkout
                           </Flex>
                       </NavLink>
                       <NavLink to={"dashboard/profile"}>
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
                                Profile
                           </Flex>
                       </NavLink>
                       <NavLink to={"/"}>
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
                               Contact
                           </Flex>
                       </NavLink>
                   </HStack>
               </VStack>
               <VStack height={"160px"} width={"350px"}>
                   <HStack spacing={5} mt={2} justifyContent={"end"} pr={5} bg={"#000000"} height={"90px"} width={"350px"}>
                       <NavLink to={"/"}>
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
                       <NavLink to={"/"}>
                           <Flex cursor="pointer"
                                 borderRadius={5}
                                 justifyContent={"center"}
                                 height={"40px"}
                                 bg={"#f2f2f2"}
                                 pt={2}
                                 width={"150px"}
                                 _hover={{background: "#ff9900",
                                     color: "#000000"}}>
                               Cart
                           </Flex>
                       </NavLink>
                   </HStack>
                   <HStack justifyContent={"end"} pr={5} pt={5} spacing={5} height={"70px"} width={"100%"} bg={"#f2f2f2"}>
                       <NavLink to={"/"}>
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
                               Login
                           </Flex>
                       </NavLink>
                       <LogoutButton/>
                   </HStack>
               </VStack>
           </HStack>
       </Flex>
    )
}

export default Header;