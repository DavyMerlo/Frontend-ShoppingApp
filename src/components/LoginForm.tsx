import React, { useState } from 'react';
import useAuth from "../hooks/useAuth";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
} from '@chakra-ui/react'
import {Form, useNavigate} from "react-router-dom";
import {useAuthStore} from "../services/store";

const LoginForm: React.FC = () => {

    const isLoggedIn = useAuthStore((state) => state.login);

    const [formData, setFormData] =
        useState({
        email: '',
        password: '',
    })
    const mutation = useAuth(formData);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await mutation.mutateAsync();
            navigate('/shop');
            isLoggedIn();
            console.log(isLoggedIn);

        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    const handleInputChangeEmail = (e: any) =>  setFormData({...formData, email: e.target.value})
    const handleInputChangePassword = (e: any) =>  setFormData({...formData, password: e.target.value});

    return (
    <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        color={"#f2f2f2"}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

            <Box
                rounded={'lg'}
                bg={"#232f3e"}
                boxShadow={'lg'}
                p={10}>
                <Stack spacing={4}>
                    <Stack align={'center'}>
                        <Heading fontSize={'2xl'}>Login with your E-shop account</Heading>
                    </Stack>
                    <Form onSubmit={handleSubmit}>
                        <FormControl isRequired id="email">
                            <FormLabel >Email-address</FormLabel>
                            <Input type="email" onChange={handleInputChangeEmail} />
                        </FormControl>
                        <FormControl isRequired id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={handleInputChangePassword} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>
                            <Button type='submit' bg={"#000000"} color={"#f2f2f2"}  _hover={{
                                background: "#ff9900",
                                color: "#000000",
                            }} >Login</Button>
                        </Stack>
                    </Form>
                </Stack>
            </Box>
        </Stack>
    </Flex>
    );
};

export default LoginForm;
