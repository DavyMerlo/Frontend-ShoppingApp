import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Form, useNavigate } from "react-router-dom";
import useChangePassword from "../hooks/useChangePassword";
import storage from "../hooks/useStoredState";
import User from "../entities/User";
import { useFormStore } from "../services/store";

const PasswordBox: React.FC = () => {
  const { formData, fieldErrors, setFormData, setFieldError } = useFormStore();
  const user = storage.get<User>("user");
  const mutation = useChangePassword(formData, user.userName);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
      await mutation.mutateAsync();
      navigate("/shop");
    } catch (error: any) {
      if (
        error?.response &&
        error?.response?.data &&
        error?.response?.data?.errors
      ) {
        const errors = error?.response?.data?.errors;
        errors.forEach((error: any) => {
          setFieldError({ field: error?.field, message: error?.message });
        });
      }
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    setFieldError({ field, message: "" });
  };

  return (
    <Box bg={"#232f3e"} borderBottomRadius={10}>
      <Card bg={"#232f3e"} align="center">
        <CardHeader>
          <Heading mt={5} color={"#f2f2f2"} size="md">
            Change password
          </Heading>
        </CardHeader>
        <CardBody bg={"#232f3e"}>
          <Stack justifyContent={"center"} width={"500px"} height={"100%"}>
            <Form onSubmit={handleSubmit}>
              <FormControl
                id="currentPassword"
                isInvalid={fieldErrors.currentPassword !== ""}
              >
                <FormLabel mt={5} mb={3} color={"#f2f2f2"} fontWeight="bold">
                  Current Password
                </FormLabel>
                <Input
                  bg={"#000000"}
                  color={"#f2f2f2"}
                  fontSize={18}
                  onChange={(e) =>
                    handleInputChange("currentPassword", e.target.value)
                  }
                  type="text"
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
                <FormErrorMessage>
                  {fieldErrors.currentPassword}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="newPassword"
                isInvalid={fieldErrors.newPassword !== ""}
              >
                <FormLabel mt={5} mb={3} color={"#f2f2f2"} fontWeight="bold">
                  New Password
                </FormLabel>
                <Input
                  bg={"#000000"}
                  color={"#f2f2f2"}
                  fontSize={18}
                  onChange={(e) =>
                    handleInputChange("newPassword", e.target.value)
                  }
                  type="text"
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
                <FormErrorMessage>{fieldErrors.newPassword}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="confirmationPassword"
                isInvalid={fieldErrors.confirmationPassword !== ""}
              >
                <FormLabel mt={5} mb={3} color={"#f2f2f2"} fontWeight="bold">
                  Confirm password
                </FormLabel>
                <Input
                  bg={"#000000"}
                  color={"#f2f2f2"}
                  fontSize={18}
                  onChange={(e) =>
                    handleInputChange("confirmationPassword", e.target.value)
                  }
                  type="text"
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
                <FormErrorMessage>
                  {fieldErrors.confirmationPassword}
                </FormErrorMessage>
              </FormControl>
              <Stack pt={5} align={"center"}>
                <Button
                  mt={5}
                  type="submit"
                  width={"250px"}
                  bg={"#000000"}
                  color={"#f2f2f2"}
                  _hover={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                  colorScheme="blue"
                >
                  Submit
                </Button>
              </Stack>
            </Form>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default PasswordBox;
