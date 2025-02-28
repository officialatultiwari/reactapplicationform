import axios from "axios";
import { useState } from "react";
const Serch=()=>{
    const [inpute,setInpute]=useState({});
    const handleInpute=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInpute(values=>({...values,[name]:value}));
        console.log(inpute);
    
    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/student";
        axios.get(api,inpute).then((res)=>{
            alert("data recived")
        })
    }
    return(
        <>
        <h1> wellcome to  my Serch page</h1>
        Search:
        <inpute type="search" name="search" onchange={handleInpute} />
        </>
    )

}
export default Serch;