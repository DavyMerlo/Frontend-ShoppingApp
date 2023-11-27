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
    useColorModeValue,
} from '@chakra-ui/react'
import {Form, useNavigate} from "react-router-dom";

const LoginForm: React.FC = () => {
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
            navigate('/dashboard');
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
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={10}>
                <Stack spacing={4}>
                    <Stack align={'center'}>
                        <Heading fontSize={'2xl'}>Login with your E-shop account</Heading>
                    </Stack>
                    <Form onSubmit={handleSubmit}>
                        <FormControl id="email">
                            <FormLabel>Email-address</FormLabel>
                            <Input type="email" onChange={handleInputChangeEmail} />
                        </FormControl>
                        <FormControl id="password">
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
                            <Button
                                type='submit'
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Login
                            </Button>
                        </Stack>
                    </Form>
                </Stack>
            </Box>
        </Stack>
    </Flex>
    );
};

export default LoginForm;
