import React, { useState } from "react";

function FormTodo() {
  const [formTodo, setFormTodo] = useState();
  const [data, setData] = useState([]);
  console.log("data===>", data);
  const [edetdata, setEdetData] = useState(null);

  const handelAddButton = (e) => {
    e.preventDefault();
    if (edetdata?.id) {
      const exData = data.map((val) => {
        if (edetdata.id === val.id) return { ...val, name: formTodo };
        else return { ...val };
      });

      setData(exData);
      setEdetData(null);
    } else {
      const allnewData = {
        id: new Date().getTime().toString(),
        name: formTodo,
      };
      setData([...data, allnewData]);
    }
  };

  const handelDeleteButton = (id) => {
    const newData = data.filter((val, ind) => {
      return val.id !== id;
    });
    setData(newData);
  };

  const handeluppdateButton = (val) => {
    setFormTodo(val);
    setEdetData(val);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo..."
        value={formTodo?.name ?? formTodo}
        onChange={(e) => setFormTodo(e.target.value)}
      />
      <button className="btn btn-danger" onClick={handelAddButton}>
        Add
      </button>

      {data.map((val, n) => {
        return (
          <>
            <div key={n}>
              <h2> {val.name} </h2>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handelDeleteButton(val.id)}
            >
              X
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handeluppdateButton(val)}
            >
              update
            </button>
          </>
        );
      })}
    </div>
  );
}

export default FormTodo;
