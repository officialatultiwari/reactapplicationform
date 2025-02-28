import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditData = () => {
  const { id } = useParams();
  const [empData, setEmpData] = useState({});

  const loadData = async () => {
    const api = `http://localhost:3000/EmpInfo/${id}`;
    const response = await axios.get(api);
    setEmpData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEmpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const api = `http://localhost:3000/EmpInfo/${id}`;
    await axios.put(api, empData);
    alert("data updated succesfully")
  };

  return (
    <div>
      <h1>Edit Data</h1>
      First Name: 
      <input type="text" name="firstName" value={empData.firstName || ""} onChange={handleInput} />

      Last Name: 
      <input type="text" name="lastName" value={empData.lastName || ""} onChange={handleInput} />

      Designation: 
      <input type="text" name="designation" value={empData.designation || ""} onChange={handleInput} />

      Email: 
      <input type="text" name="email" value={empData.email || ""} onChange={handleInput} />

      Phone: 
      <input type="text" name="phone" value={empData.phone || ""} onChange={handleInput} />

      Address: 
      <input type="text" name="address" value={empData.address || ""} onChange={handleInput} />

      City: 
      <input type="text" name="city" value={empData.city || ""} onChange={handleInput} />

      State: 
      <input type="text" name="state" value={empData.state || ""} onChange={handleInput} />

      Zip: 
      <input type="text" name="zip" value={empData.zip || ""} onChange={handleInput} />

      <button onClick={handleSubmit}>Save Data</button>
    </div>
  );
};

export default EditData;