import React, {useState} from 'react'
import ProfileGrid from "./ProfileGrid";
import ProductGrid from "./ProductGrid";
import {Flex} from "@chakra-ui/react";

const GridHandler = () => {
    const [activeGrid, setActiveGrid] = useState('product');

    const handleGridChange = (grid: React.SetStateAction<string>):void => {
        // Function to change the active grid layout
        setActiveGrid(grid);
    };

    return (
        <Flex>

        </Flex>
    );
};

export default GridHandler;
