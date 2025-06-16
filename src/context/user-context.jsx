import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [result, setResult] = useState(null);
  const {isSignedIn,isLoaded} = useAuth()
 
  const getResult = async (message) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:3636/users/api/diagnosis",
        {
          message,
        }
      );
      if (res) {
        
        
        setResult(res.data.result);
        return res.data.result;
      }
      else{
        console.log("No result");
        
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const value = { result, setResult, getResult,isSignedIn,isLoaded };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
