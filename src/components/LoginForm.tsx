import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { Form, useNavigate } from "react-router-dom";
import { useAuthStore, useFormStore } from "../services/store";

const LoginForm: React.FC = () => {
  const isLoggedIn = useAuthStore((state) => state.login);
  const { formData, setFormData } = useFormStore();
  const mutation = useAuth(formData);
  const navigate = useNavigate();
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync();
      navigate("/shop");
      isLoggedIn();
    } catch (error: any) {
      const status = error?.response?.data.status;
      checkResponseStatus(status);
    }
  };

  const checkResponseStatus = (status: number) => {
    if (status === 400 || status === 401) {
      setInvalidCredentials(true);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} color={"#f2f2f2"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box rounded={"lg"} bg={"#232f3e"} boxShadow={"lg"} p={10}>
          <Stack spacing={8}>
            <Stack align={"center"}>
              <Heading fontSize={"2xl"}>Login with your E-shop account</Heading>
              {invalidCredentials && (
                <Text color={"red"}>
                  Invalid credentials. Please try again.
                </Text>
              )}
            </Stack>
            <Form onSubmit={handleSubmit}>
              <FormControl id="email">
                <FormLabel>Email-address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  fontSize={18}
                  bg={"#000000"}
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
              </FormControl>
              <FormControl marginTop={5} id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  bg={"#000000"}
                  fontSize={18}
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
              </FormControl>
              <Stack>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  marginTop={5}
                  marginBottom={5}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"blue.400"}>Forgot password?</Text>
                </Stack>
                <Button
                  type="submit"
                  bg={"#000000"}
                  color={"#f2f2f2"}
                  _hover={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                >
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
