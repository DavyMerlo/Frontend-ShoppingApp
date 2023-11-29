import {Form} from "react-router-dom";
import {HStack, Input, InputGroup, InputLeftElement, Spacer} from "@chakra-ui/react";
import {useRef} from "react";
import {useProductQueryStore} from "../services/store";


const SearchInput = () => {

    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useProductQueryStore(s => s.setSearchText);
    const setCategoryId = useProductQueryStore(s => s.setCategoryId);
    const setSubCategoryId = useProductQueryStore(s => s.setSubCategoryId);

    const handleSubmit = (catId: any, subCatId: any) => (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        if (ref.current) {
            setSearchText(ref.current.value);
            setCategoryId(catId);
            setSubCategoryId(subCatId);
        }
    }

    return (
        <HStack pl={0} width={"100%"}>
            <Form onSubmit={handleSubmit(null, null)}>
                <InputGroup bg={"#000000"} height="90px" width="830px">
                    <InputLeftElement/>
                    <Input
                        ref={ref}
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