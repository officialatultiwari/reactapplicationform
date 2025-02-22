import { useState } from "react";
import axios from "axios";
const Insert=()=>{

    
      const [input,setInput]=useState({})
      const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
    
        setInput(values=>({...values,[name]:value}));
        console.log(input);
      }
    

    
      const handleSubmit=()=>{
        let api="http://localhost:3000/student";
        axios.post(api,input).then((res)=>{
          alert("data recived")
        })

      }


    return(
        <>
        <h1> Inset Data</h1>
     

        enter rollno <input type="text"  name="rollno" onChange={handleInput}/> <br />

        enter rollno <input type="text"  name="name" onChange={handleInput}/> <br />
        enter city <input type="text"  name="city" onChange={handleInput}/> <br />
      enter fees <input type="text"  name="fees" onChange={handleInput}/> <br />



<button onClick={handleSubmit}>submit</button>



    
    

        
        </>
    )

  
  
}
    
    
    export default Insert;
