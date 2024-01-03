import { Heading } from "@chakra-ui/react";
import React from "react";
import { useMenuItemStore } from "../services/store";

const SideBarTitle = () => {
  const sideBarTitle = useMenuItemStore((state) => state.sideBarTitle);

  return (
    <>
      <Heading fontSize={"20px"} color={"#f2f2f2"}>
        {sideBarTitle}
      </Heading>
    </>
  );
};
export default SideBarTitle;
