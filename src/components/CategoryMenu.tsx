import {Box, Button, Heading, HStack, List, ListItem, Text, VStack} from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import useProductQueryStore from "../services/store";


const CategoryMenu = () => {

    const { data, isLoading, error } = useCategories();
    const selectedCategoryId =
        useProductQueryStore(s => s.productQuery.categoryId);
    const setSelectedCategoryId =
        useProductQueryStore(s => s.setCategoryId);

    return (
        <>
            <List background={"red"}>
                {data?.result.categories.map((category) => (
                    <ListItem key={category.id} paddingY="5px">
                        <HStack>
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={category.id === selectedCategoryId ? "bold" : "normal"}
                                onClick={() => setSelectedCategoryId(category.id)}
                                fontSize="md"
                                color={"white"}
                                variant="link"
                            >
                                {category.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )


}


export default CategoryMenu;