import axios from "axios";
import React, { useState } from "react";
function NewFormPage() {
  const [formTodo, setFormTodo] = useState();
  const [vald, setVald] = useState();
  const [error, setError] = useState(false);

  const [data, setData] = useState([]);
  console.log("firstssssssssssss", data);
  const handeleNewData = (e) => {
    setFormTodo(e.target.value);
  };
  console.log("data", data, vald);
  const handelAddButton = async () => {
    if (!formTodo) return alert("Please enter code:");
    if (vald === formTodo) {
      setError(true); 
    } else {
      setError(false);
    }
    try {
      const response = await axios.get(
        "https://api.zippopotam.us/us/" + formTodo
      );
      console.log("response", response);
      setVald(formTodo);
      setData(response?.data?.places);
      console.log("first=>", response?.data?.place);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number..."
        value={formTodo}
        onChange={handeleNewData}
      />

      <p>
        {error ? (
          <span className="text-danger"> Number is already in list </span>
        ) : ( " ")}
      </p>
      <button className="btn btn-danger" onClick={handelAddButton}>
        Go
      </button>

      <div>
        {data.map((val, index) => {
          return <li key={index}> {val.state} </li>;
        })}
      </div>
    </div>
  );
}

export default NewFormPage;
