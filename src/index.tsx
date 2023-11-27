import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {RouterProvider} from "react-router-dom";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import router from "./routes";
import Theme from "./theme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={Theme}>
            <ColorModeScript />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
);