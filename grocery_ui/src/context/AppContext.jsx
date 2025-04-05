import { createContext, useContext } from "react";

export const AppContext = createContext(); //creating a context

export const useAppContext = () => {
    return useContext(AppContext);  //uses react hooks to access context
}

