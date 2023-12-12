import Product from "../entities/Product";
import React from "react";
import {Card, CardBody, Heading, HStack, Text, Image, CardHeader, Button} from "@chakra-ui/react";
import CroppedText from "./CroppedText";


interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
    return (
        <Card bg={"#232f3e"}>
            <CardHeader height={"240px"}>
                <HStack justifyContent={"start"} fontSize='2xm'>
                    <Text color={"#f2f2f2"} >{product.category?.subCategory?.name}</Text>
                </HStack>
                <HStack pt={2} justifyContent="center">
                    <Image background={"green"} style={{ width: 120, height: 180 }} src={product.imageUrl} />
                    <CroppedText>{product.description}</CroppedText>
                </HStack>
            </CardHeader>
            <CardBody pt={5}>
                <Heading pb={2}>
                    <Text color={"#f2f2f2"} height="45px" fontSize="1.0vw" >{product.name}</Text>
                </Heading>
                <HStack justifyContent='space-between'>
                    <Text color={"#ff9900"} fontSize='1.0vw'>{product.purchasePrice} EUR</Text>
                    <Button bg={"#000000"} color={"#f2f2f2"}  _hover={{
                        background: "#ff9900",
                        color: "#000000",
                    }} >ADD TO CART</Button>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default ProductCard;