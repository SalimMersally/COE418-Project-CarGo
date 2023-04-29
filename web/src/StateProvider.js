import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
    isLogged: false,
    userToken: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_LOG":
            return { ...state, isLogged: action.value };
        case "SET_TOKEN":
            return { ...state, userToken: action.value };
        default:
            return state;
    }
}

export function StateProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    );
}