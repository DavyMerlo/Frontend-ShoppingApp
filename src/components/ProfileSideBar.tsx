import {Box, Collapse, Flex, Stack, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {useMenuItemStore} from "../services/store";
import {Link, useNavigate} from "react-router-dom";

interface Options {
    name: string;
    subOptions: string[];
}

const ProfileSideBar = () => {

    const[selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showSubOptions, setShowSubOptions] = useState(false);
    const setSubOption = useMenuItemStore(state => state.setSubOption);
    const setOption = useMenuItemStore(state => state.setOption);
    const nav = useNavigate();

    const options: Options[] = [
        {
            name: "Account Information",
            subOptions: ["Change password", "Update Personal Information", "Gift Cards"]
        },
        {
            name: "Order History",
            subOptions: ["Orders Placed", "Canceled Orders"]
        },
        {
            name: "Returns",
            subOptions: ["Register a return ", "Registered returns"]
        },
    ]

    const handleOptionClick = (optionName: string) => {
        if (selectedOption === optionName) {
            setShowSubOptions(!showSubOptions);
            nav("overview")
        } else {
            setSelectedOption(optionName);
            setShowSubOptions(true);
            setOption(optionName);
        }
    };

    const handleSubOptionClick = (subOptionName: string) => {
        setSubOption(subOptionName);
    };

    return (
        <Flex
            bg={"#f2f2f2"}
            pl={5}
            height="100vh">
            <Box w="350px"
                 flex="250px"
                 position={"fixed"} >
                <Box bg={"#232f3e"} pb={5} borderRadius={10}>
                    <Stack
                        marginTop={0}
                        spacing="">
                        {options.map((option, index) => (
                            <Box key={index}>
                                <Box bg={"#232f3e"}
                                     padding={"5"}
                                     height="45px"
                                     display="flex"
                                     alignItems="center">
                                    <Text
                                        cursor={"pointer"}
                                        fontSize={"18px"}
                                        variant="ghost"
                                        onClick={(e) =>
                                            handleOptionClick(option.name)}
                                        w="100%"
                                        color="#f2f2f2"
                                        textAlign={"left"}
                                        fontWeight={option.name === selectedOption ? "bold" : "normal"}
                                    >
                                        {option.name}
                                    </Text>
                                </Box>
                                <Collapse
                                    in={option.name === selectedOption}>
                                    <Stack
                                        ml="0" bg={"#ff9900"}>
                                        <Box ml="5" >
                                            {options
                                                .find(option => option.name === selectedOption)
                                                ?.subOptions.map((subOption, index) => (
                                               <Link key={index} to={"password"}>
                                                   <Text
                                                       color={"#000000"}
                                                       paddingTop={2}
                                                       height={"45px"}
                                                       fontSize="18px"
                                                       onClick={(e) =>
                                                           handleSubOptionClick(subOption)}
                                                       key={index} cursor={"pointer"}>{subOption}
                                                   </Text>
                                               </Link>
                                            ))}
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

export default ProfileSideBar;