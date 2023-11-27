import {Form} from "react-router-dom";
import {Box, HStack, Input, InputGroup, InputLeftElement, Spacer} from "@chakra-ui/react";


const SearchInput = () => {

    return (
        <HStack pl={0} width={"100%"}>
            <Form>
                <InputGroup bg={"#000000"} height="90px" width="830px">
                    <InputLeftElement />
                    <Input
                        mt={6}
                        height="40px"
                        borderRadius={5}
                        bg={"#f2f2f2"}
                        placeholder="Search products..."
                        _placeholder={{ opacity: 1,color: '#000000'}}
                        size="lg" />
                </InputGroup>
            </Form>
            <Spacer/>
        </HStack>
    );
}

export default SearchInput;