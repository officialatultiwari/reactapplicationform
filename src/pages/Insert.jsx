import { useState } from "react";
import axios from "axios";
const Insert=()=>{
  const [input,setInpute]=useState({})
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInpute(value=>({...value,[name]:value}));
    console.log(input);
  }

  const handleInpute=(e)=>{
    let api="http://localhost:3000/student";
    axios.post(api,input).then((res)=>{
      alert("your data has beeen recived");
    })
  }
  return(
    <>
    <h1>Insert data</h1>

    Enter Empno:<input type="text" name="empno" onChange={handleInpute} /><br/>
    Enter the name:<input type="text" name="name" onChange={handleInpute} /><br/>
    Enter the city:<input type="text" name="city" onChange={handleInpute} /><br/>
    enter the fess:<input type="text" name="fess" onChange={handleInpute} /><br/>
    <button onClick={handleInpute}>sabmite!</button>
    </>
  )

}
export default Insert;

