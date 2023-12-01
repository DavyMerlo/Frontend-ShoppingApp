import React, {useState} from "react";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
} from "@chakra-ui/react";
import {Form} from "react-router-dom";


const PasswordBox: React.FC = () => {

    const [formData, setFormData] =
        useState({
            currentPassword: '',
            newPassword: '',
            confirmationPassword: ''
        })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted with data:', formData);
    };

    const handleInputChangeCurrentPassword = (e: any) =>  setFormData({...formData, currentPassword: e.target.value})
    const handleInputChangeNewPassword = (e: any) =>  setFormData({...formData, newPassword: e.target.value});
    const handleInputChangeConfirmPassword = (e: any) =>  setFormData({...formData, confirmationPassword: e.target.value});

    return (
        <Box bg={"#232f3e"} borderBottomRadius={10}>
            <Card bg={"#232f3e"} align='start'>
                <CardHeader>
                    <Heading color={"#f2f2f2"} size='md'>Change password</Heading>
                </CardHeader>
                <CardBody width={"100%"} height={"100%"}>
                    <Stack justifyContent={"start"} width={"100%"}  height={"100%"}>
                        <Form onSubmit={handleSubmit}>
                            <FormControl id="currentPassword">
                                <FormLabel color={"#f2f2f2"}>Current Password</FormLabel>
                                <Input
                                    onChange={handleInputChangeCurrentPassword}
                                    type="text"/>
                            </FormControl>
                            <FormControl id="newPassword">
                                <FormLabel color={"#f2f2f2"}>New Password</FormLabel>
                                <Input
                                    onChange={handleInputChangeNewPassword}
                                    type="text" />
                            </FormControl>
                            <FormControl id="confirmationPassword">
                                <FormLabel color={"#f2f2f2"}>Confirm password</FormLabel>
                                <Input
                                    onChange={handleInputChangeConfirmPassword}
                                    type="text" />
                            </FormControl>
                            <Stack pt={5}>
                                <Button type="submit" width={"250px"} bg={"#000000"} color={"#f2f2f2"}  _hover={{
                                    background: "#ff9900",
                                    color: "#000000",
                                }} colorScheme='blue'>Submit</Button>
                            </Stack>
                        </Form>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}

export default PasswordBox;