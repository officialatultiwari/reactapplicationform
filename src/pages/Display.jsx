import { useState,useEffect } from "react";
import axios from "axios";
const Display = () => {
  const [mydata,setMydata]=useState([]);

  const loadAData=async()=>{
    let api="http://localhost:3000/student ";
    const response=await axios.get(api);
    setMydata(response.data);
  }
  useEffect(()=>{
    loadAData();
  },[]);

  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.rolln}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      
      </>
    )
  })
  return (
    <>
      <table>
        <tr>
        <th>rolln</th>
        <th>name</th>
        <th>city</th>
        <th>fees</th>
        </tr>
      </table>
      {ans}

      
    </>
  )
}

export default Display;