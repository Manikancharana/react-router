import React from "react";
import { useData } from "./Delhi";


const Mumbai=({gift}) =>{
    const{suprise}=useData()
    return(
        <div>
            <h2> My name is {suprise}</h2>
        </div>
    )
}

export default Mumbai