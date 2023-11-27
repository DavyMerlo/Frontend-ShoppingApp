import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: "#f2f2f2",
            },
        }),
    },
});

export default Theme;