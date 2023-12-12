import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,VStack
} from "@chakra-ui/react";
import React from "react";
import {NavLink} from "react-router-dom";


const RegisterForm = () => {

    return (
       <Flex
           minH={'100vh'}
           align={'center'}
           justify={'center'}
           color={"#f2f2f2"}>
           <Box rounded={'lg'}
                bg={"#232f3e"}
                boxShadow={'lg'}
                p={10}>
               <Stack spacing={2}>
                   <Stack align={'center'}>
                       <Heading fontSize={'2xl'}>Create your E-shop account</Heading>
                   </Stack>
                   <FormControl isRequired>
                       <FormLabel mt={2}
                                  mb={2}
                                  color={"#f2f2f2"}
                                  fontWeight='bold'
                                  htmlFor="inputEmail4">Email</FormLabel>
                       <Input type="email" id="inputEmail4" bg={"#000000"}
                              color={"#f2f2f2"}
                              fontSize={18}
                              _focus = {{
                                  background: "#ff9900",
                                  color: "#000000",
                              }}/>
                   </FormControl>
                   <FormControl isRequired>
                       <FormLabel mt={2}
                                  mb={2}
                                  color={"#f2f2f2"}
                                  fontWeight='bold'
                                  htmlFor="inputPassword4">Password</FormLabel>
                       <Input type="password" id="inputPassword4" bg={"#000000"}
                              fontSize={18}
                              _focus = {{
                                  background: "#ff9900",
                                  color: "#000000",
                              }}/>
                   </FormControl>
                   <Stack direction={['column', 'row']} spacing={4}>
                       <FormControl isRequired>
                           <FormLabel mt={2}
                                      mb={2}
                                      color={"#f2f2f2"}
                                      fontWeight='bold'
                                      htmlFor="inputCity">Lastname</FormLabel>
                           <Input type="text" id="inputCity" bg={"#000000"}
                                  fontSize={18}
                                  _focus = {{
                                      background: "#ff9900",
                                      color: "#000000",
                                  }}/>
                       </FormControl>
                       <FormControl isRequired>
                           <FormLabel
                               mt={2}
                               mb={2}
                               color={"#f2f2f2"}
                               fontWeight='bold'
                               htmlFor="inputCity">Firstname</FormLabel>
                           <Input type="text" id="inputCity" bg={"#000000"}
                                  fontSize={18}
                                  _focus = {{
                                      background: "#ff9900",
                                      color: "#000000",
                                  }} />
                       </FormControl>
                   </Stack>
                   <FormControl isRequired>
                       <FormLabel
                           mt={3}
                           mb={2}
                           color={"#f2f2f2"}
                           fontWeight='bold'
                           htmlFor="inputAddress">Street</FormLabel>
                       <Input type="text" id="inputAddress" bg={"#000000"}
                              fontSize={18}
                              _focus = {{
                                  background: "#ff9900",
                                  color: "#000000",
                              }}/>
                   </FormControl>
                   <Stack direction={['column', 'row']} spacing={4}>
                       <FormControl isRequired>
                           <FormLabel
                               mt={2}
                               mb={2}
                               color={"#f2f2f2"}
                               fontWeight='bold'
                               htmlFor="inputAddress2">City</FormLabel>
                           <Input type="text" id="inputAddress2" bg={"#000000"}
                                  fontSize={18}
                                  _focus = {{
                                      background: "#ff9900",
                                      color: "#000000",
                                  }}/>
                       </FormControl>
                       <FormControl isRequired>
                           <FormLabel
                               mt={2}
                               mb={2}
                               color={"#f2f2f2"}
                               fontWeight='bold'
                               htmlFor="inputAddress2">Local Authority</FormLabel>
                           <Input type="text" id="inputAddress2" bg={"#000000"}
                                  fontSize={18}
                                  _focus = {{
                                      background: "#ff9900",
                                      color: "#000000",
                                  }}/>
                       </FormControl>
                   </Stack>
                   <Stack direction={['column', 'row']} spacing={4}>
                       <FormControl isRequired>
                           <FormLabel
                               mt={2}
                               mb={2}
                               color={"#f2f2f2"}
                               fontWeight='bold'
                               htmlFor="inputCity">Housenumber</FormLabel>
                           <Input type="text" id="inputCity" bg={"#000000"}
                                  fontSize={18}
                                  _focus = {{
                                      background: "#ff9900",
                                      color: "#000000",
                                  }}/>
                       </FormControl>
                       <FormControl>
                           <FormLabel mt={2}
                                      mb={2}
                                      color={"#f2f2f2"}
                                      fontWeight='bold'
                                      htmlFor="inputCity">Busnumber</FormLabel>
                           <Input type="text" id="inputCity" bg={"#000000"}
                                  fontSize={18}
                                  _focus = {{
                                      background: "#ff9900",
                                      color: "#000000",
                                  }}/>
                       </FormControl>
                       <FormControl isRequired>
                           <FormLabel mt={2}
                                      mb={2}
                                      color={"#f2f2f2"}
                                      fontWeight='bold'
                                      htmlFor="inputZip">Postalcode</FormLabel>
                           <Input type="text" id="inputZip" bg={"#000000"}
                                  fontSize={18}
                                  _focus = {{
                                      background: "#ff9900",
                                      color: "#000000",
                                  }}/>
                       </FormControl>
                   </Stack>
                   <FormControl pt={2}>
                       <Checkbox id="gridCheck">
                           <FormLabel pt={2} fontSize={18} htmlFor="gridCheck">Yes, I want the E-shopping newsletter</FormLabel>
                       </Checkbox>
                   </FormControl>
                   <VStack spacing={3} pt={2} verticalAlign={"center"}>
                       <Button
                           type="submit"
                           width={"250px"}
                           bg={"#000000"}
                           color={"#f2f2f2"}
                           _hover={{
                               background: "#ff9900",
                               color: "#000000",
                           }}
                           colorScheme='blue'>Register</Button>

                      <NavLink to={"/"}>
                          <Button
                              type="submit"
                              width={"250px"}
                              bg={"#000000"}
                              color={"#f2f2f2"}
                              _hover={{
                                  background: "#ff9900",
                                  color: "#000000",
                              }}
                              colorScheme='blue'>Go Back</Button>
                      </NavLink>
                   </VStack>
               </Stack>
           </Box>
       </Flex>
    );
}

export default RegisterForm;