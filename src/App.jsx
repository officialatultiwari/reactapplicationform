  import { useState } from "react";;


const App=()=>{
  const [emp,setemp]=useState("")
  const [name,setname]=useState("");
  const [city,setcity]=useState("");
  const [salary,setsalary]=useState("")

  const handleSubmit=()=>{
    console.log({name:name, city:city , enp:emp , salary:salary})
  }
  return( 
    <>
   <h1>Application Form</h1>
   Enter Emp no <input type="text" value={emp}
   onChange={(e)=>{setemp(e.target.value)}} /> <br />
   Enter salary <input type="text" value={salary} onChange={(e)=>(setsalary(e.target.value))} />  <br />
   Enter name <input type="text" value={name}  
   onChange={(e)=>{setname(e.target.value)}}/>
   <br />

   Enter city <input type="text" value={city} 
   onChange={(e)=>{setcity(e.target.value)}}/>
   <button onClick={handleSubmit}>submit</button>
    </>
  )
}
export default App;