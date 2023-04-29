import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import {StateProvider} from "./StateProvider";

const colors = {
    black: "#252525",
    blue: {
        400: "#0072C6",
    },
    gray: {
        100: "#F5F5F5",
        400: "#C4C4C4",
        900: "#000406",
    },
    button: {
        500: "#F5F5F5",
        700: "#c6c5c5",
    },
};

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <StateProvider>
                    <App />
                </StateProvider>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);
