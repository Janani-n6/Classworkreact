import React,{useState} from "react";
export default function StateHoldOject(){
    const[form,setForm]=useState({name:"janani",age:18,year:2005});
    return(
        <div>
            <h1>Name:{form.name}</h1>
            <h1>Age:{form.age}</h1>
            <h1>Year:{form.year}</h1>
            <button onClick={()=>setForm((prevState)=>{return{...prevState,age:20}})}>change</button>
        </div>
    )
}