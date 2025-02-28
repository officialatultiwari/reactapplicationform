import axios from "axios";
import { useState , useEffect } from "react";

// import editimg from "img/d"
import delimg from "../../src/emages/del.png";
// import delimg from "../img/delete.png";

const Update=()=>{
  
const [mydata, setMydata]= useState([]);
const loadData=async()=>{
  let api="http://localhost:3000/student";
  const response=await axios.get(api);
  console.log(response.data);
  setMydata(response.data);
}


useEffect(()=>{
  loadData();
},[]);

const myedit=(id)=>{
const api="http://localhost:3000/student"+id;
axios.delete(api);
// const api=
loadData();
  alert("edit");
}

const ans=mydata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.empno}</td>
      <td>{key.name}</td>
      <td>{key.designation}</td>
      <td>{key.salary}</td>
      <td>
      <img src={delimg} width="20" height="20" onClick={()=>{mydel(key.id)}} />

      </td>
      <td>
      <img src={delimg} width="20" height="20" onClick={()=>{myedit(key.id)}} />

      </td>
    </tr>
    </>
  )
})

    return(
        <>
        <h1>this is display</h1>


        <table width="500"  border="1 solid red" bgcolor="yellow">
        <tr>
          <th>roll</th>
          <th>name</th>
          <th>designation</th>
          <th>salary</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        {ans}

        </table>
        </>
      )
    }
    export default Update;