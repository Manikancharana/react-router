import { createContext, useContext, useState } from "react";

const giftcontext = createContext()  // creating context

export const Giftprovider = ({children}) =>{            //creating function provider
     const[suprise,setsuprise]=useState("Mani")

     return(
        <giftcontext.Provider value={{suprise,setsuprise}}> 
           {children}
        </giftcontext.Provider>
         )
}

export const useData =()=> useContext(giftcontext)