import { useState } from "react";
import StateHoldOject from "./StateHoldObject";
import StateFunction from "./StateFunction";

export default function DynamicRending(){
   const[x]=useState(5)
   if(x>10){
    return(
        <StateHoldOject/>
    )
   }
   else{
    return(
        <StateFunction/>
    )
   }
}