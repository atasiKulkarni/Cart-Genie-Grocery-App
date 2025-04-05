import { useNavigate } from "react-router-dom";
import {useState } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);   //state variable to store the currently logged-in user.
    const [isSeller, setIsSeller] = useState(false);  //a boolean state that says whether the user is a seller.
  
    const value = { navigate, user, setUser, isSeller, setIsSeller };
  
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  };