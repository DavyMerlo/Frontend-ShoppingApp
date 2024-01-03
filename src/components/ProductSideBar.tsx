import { Box, Collapse, Flex, Stack, Text } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import { useProductQueryStore } from "../services/store";
import useSubCategories from "../hooks/useSubCategories";
import SubCategory from "../entities/SubCategory";
import Category from "../entities/Category";

const ProductSidebar = () => {
  const categories = useCategories();
  const subCategories = useSubCategories();

  const selectedCategoryId = useProductQueryStore(
    (s) => s.productQuery.categoryId
  );
  const setSelectedCategoryId = useProductQueryStore((s) => s.setCategoryId);
  const setSelectedSubCategoryId = useProductQueryStore(
    (s) => s.setSubCategoryId
  );

  const handleCategoryClick = (categoryId: number, subCategoryId: any) => {
    setSelectedCategoryId(categoryId);
    setSelectedSubCategoryId(subCategoryId);
  };

  const handleSubCategoryClick = (subCategoryId: number) => {
    setSelectedSubCategoryId(subCategoryId);
  };

  return (
    <Flex bg={"#f2f2f2"} pl={5} height="100vh">
      <Box w="350px" flex="250px" position={"fixed"}>
        <Box bg={"#232f3e"} pb={5} borderRadius={10}>
          <Stack marginTop={0} spacing="">
            {categories.data?.result.categories.map((category: Category) => (
              <Box key={category.id}>
                <Box
                  bg={"#232f3e"}
                  padding={"5"}
                  height="45px"
                  display="flex"
                  alignItems="center"
                >
                  <Text
                    cursor={"pointer"}
                    fontSize={"18px"}
                    variant="ghost"
                    onClick={() => handleCategoryClick(category.id, null)}
                    w="100%"
                    color="#f2f2f2"
                    textAlign={"left"}
                    fontWeight={
                      category.id === selectedCategoryId ? "bold" : "normal"
                    }
                  >
                    {category.name}
                  </Text>
                </Box>
                <Collapse in={category.id === selectedCategoryId}>
                  <Stack ml="0" bg={"#ff9900"}>
                    <Box ml="5">
                      {subCategories.data?.result.subcategories.map(
                        (subcategory: SubCategory) => (
                          <Text
                            color={"#000000"}
                            paddingTop={2}
                            height={"45px"}
                            fontSize="18px"
                            onClick={() =>
                              handleSubCategoryClick(subcategory.id)
                            }
                            key={subcategory.id}
                            cursor={"pointer"}
                          >
                            {subcategory.name}
                          </Text>
                        )
                      )}
                    </Box>
                  </Stack>
                </Collapse>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductSidebar;
