import React from "react";
import { useData } from "./Delhi";


const Kolkata =({gift}) =>{
    const {suprise}= useData()
return(
    <div>
        <h2>{suprise} Good morning!</h2>
    </div>
)
}
export default Kolkata