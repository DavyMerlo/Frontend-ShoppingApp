import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Form, NavLink, useNavigate } from "react-router-dom";
import { useFormStore } from "../services/store";
import useRegister from "../hooks/userRegister";

const RegisterForm: React.FC = () => {
  const { formData, fieldErrors, setFormData, setFieldError } = useFormStore();
  const mutation = useRegister(formData);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
      await mutation.mutateAsync();
      navigate("/confirmation");
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
    <Flex minH={"100vh"} align={"center"} justify={"center"} color={"#f2f2f2"}>
      <Box rounded={"lg"} bg={"#232f3e"} boxShadow={"lg"} p={10}>
        <Stack spacing={2}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"}>Create your E-shop account</Heading>
          </Stack>
          <Form onSubmit={handleSubmit}>
            <FormControl
              isRequired
              id="email"
              isInvalid={fieldErrors.email !== ""}
            >
              <FormLabel mt={2} mb={2} color={"#f2f2f2"} fontWeight="bold">
                Email
              </FormLabel>
              <Input
                type="text"
                bg={"#000000"}
                color={"#f2f2f2"}
                fontSize={18}
                onChange={(e) => handleInputChange("email", e.target.value)}
                _focus={{
                  background: "#ff9900",
                  color: "#000000",
                }}
              />
              <FormErrorMessage>{fieldErrors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              id="password"
              isInvalid={fieldErrors.password !== ""}
            >
              <FormLabel mt={2} mb={2} color={"#f2f2f2"} fontWeight="bold">
                Password
              </FormLabel>
              <Input
                type="text"
                bg={"#000000"}
                fontSize={18}
                onChange={(e) => handleInputChange("password", e.target.value)}
                _focus={{
                  background: "#ff9900",
                  color: "#000000",
                }}
              />
              <FormErrorMessage>{fieldErrors.password}</FormErrorMessage>
            </FormControl>
            <Stack direction={["column", "row"]} spacing={4}>
              <FormControl
                isRequired
                id="lastname"
                isInvalid={fieldErrors.lastName !== ""}
              >
                <FormLabel mt={2} mb={2} color={"#f2f2f2"} fontWeight="bold">
                  Lastname
                </FormLabel>
                <Input
                  type="text"
                  bg={"#000000"}
                  fontSize={18}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
                <FormErrorMessage>{fieldErrors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                id="firstname"
                isInvalid={fieldErrors.firstName !== ""}
              >
                <FormLabel mt={2} mb={2} color={"#f2f2f2"} fontWeight="bold">
                  Firstname
                </FormLabel>
                <Input
                  type="text"
                  bg={"#000000"}
                  fontSize={18}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
                <FormErrorMessage>{fieldErrors.firstName}</FormErrorMessage>
              </FormControl>
            </Stack>
            <FormControl
              isRequired
              id="street"
              isInvalid={fieldErrors.street !== ""}
            >
              <FormLabel mt={3} mb={2} color={"#f2f2f2"} fontWeight="bold">
                Street
              </FormLabel>
              <Input
                type="text"
                bg={"#000000"}
                fontSize={18}
                onChange={(e) => handleInputChange("street", e.target.value)}
                _focus={{
                  background: "#ff9900",
                  color: "#000000",
                }}
              />
              <FormErrorMessage>{fieldErrors.street}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              id="localAuthority"
              isInvalid={fieldErrors.localAuthority !== ""}
            >
              <FormLabel mt={2} mb={2} color={"#f2f2f2"} fontWeight="bold">
                City
              </FormLabel>
              <Input
                type="text"
                bg={"#000000"}
                fontSize={18}
                onChange={(e) =>
                  handleInputChange("localAuthority", e.target.value)
                }
                _focus={{
                  background: "#ff9900",
                  color: "#000000",
                }}
              />
              <FormErrorMessage>{fieldErrors.localAuthority}</FormErrorMessage>
            </FormControl>
            <Stack direction={["column", "row"]} spacing={4}>
              <FormControl
                isRequired
                id="houseNumber"
                isInvalid={fieldErrors.houseNumber !== ""}
              >
                <FormLabel mt={2} mb={2} color={"#f2f2f2"} fontWeight="bold">
                  Housenumber
                </FormLabel>
                <Input
                  type="text"
                  bg={"#000000"}
                  fontSize={18}
                  onChange={(e) =>
                    handleInputChange("houseNumber", e.target.value)
                  }
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
                <FormErrorMessage>{fieldErrors.houseNumber}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="busNumber"
                isInvalid={fieldErrors.busNumber !== ""}
              >
                <FormLabel mt={2} mb={2} color={"#f2f2f2"} fontWeight="bold">
                  Busnumber
                </FormLabel>
                <Input
                  type="text"
                  bg={"#000000"}
                  fontSize={18}
                  onChange={(e) =>
                    handleInputChange("busNumber", e.target.value)
                  }
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
                <FormErrorMessage>{fieldErrors.busNumber}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                id="postalCode"
                isInvalid={fieldErrors.postalCode !== ""}
              >
                <FormLabel mt={2} mb={2} color={"#f2f2f2"} fontWeight="bold">
                  Postalcode
                </FormLabel>
                <Input
                  type="text"
                  bg={"#000000"}
                  fontSize={18}
                  onChange={(e) =>
                    handleInputChange("postalCode", e.target.value)
                  }
                  _focus={{
                    background: "#ff9900",
                    color: "#000000",
                  }}
                />
                <FormErrorMessage>{fieldErrors.postalCode}</FormErrorMessage>
              </FormControl>
            </Stack>
            <FormControl pt={2}>
              <Checkbox id="gridCheck">
                <FormLabel pt={2} fontSize={18} htmlFor="gridCheck">
                  Yes, I want the E-shopping newsletter
                </FormLabel>
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
                colorScheme="blue"
              >
                Register
              </Button>

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
                  colorScheme="blue"
                >
                  Go Back
                </Button>
              </NavLink>
            </VStack>
          </Form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
