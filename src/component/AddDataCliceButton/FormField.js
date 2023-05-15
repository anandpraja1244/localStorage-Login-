import React, { useState } from "react";

function FormField() {
  const [formInpute, setFormInpute] = useState("");
  const [data, setData] = useState([]);
  const [inputeNew, setInputeNew] = useState("");
  const [inputePass, setInputePass] = useState(null);

  // start here Add Form Submit function........
  const handelSubmitData = (e) => {
    e.preventDefault();
    const newDataForm = {
      id: new Date().getTime().toString(),
      name: formInpute,
    };
    setData([...data, newDataForm]);
  };

  // start here delete function........
  function handleDeleteClick(id) {
   const newUpdate= data.filter((item)=>item.id !==id )
   setData(newUpdate)
  }

  // start here Edit function........
  const handleEditClick = (id) => {
   
           const  editData = data?.find((item)=>item.id ===id )
           setInputeNew(editData)
           setInputePass(id)
        
  };

  // start here Edit Form Submit function........
  const handelEditData = (e) => {
    e.preventDefault();
    const finalData = data.map((item)=>{
      if(item.id === inputePass){
        return {...item, name:inputeNew }
       } else{
        return item
       }
    })
    console.log('first====>', finalData)
    setData(finalData)
   
      
  };

  return (
    <div>
      <h2>Todo</h2>
      <div>
        <form onSubmit={handelSubmitData}>
          <input
            type="text"
            placeholder="type"
            onChange={(e) => setFormInpute(e.target.value)}
          />
          <button type="submit" className="btn btn-danger">
            Add
          </button>
        </form>
      </div>

      <div>
        <ul className="todo-list">
          {data?.map((item,i) => {
        
            return (
              <>
                <li>{item?.name} </li>

                <button onClick={() => handleDeleteClick(item?.id)}>Delete</button>
                <button onClick={() => handleEditClick(item?.id)}>Edit</button>
              </>
            );
          })}
        </ul>
      </div>
      <div></div>
      <div>
        <form onSubmit={handelEditData}>
          <input type="text" placeholder="type" value={inputeNew.name}  onChange={(e)=>setInputeNew(e.target.value)} />
          <button type="submit" className="btn btn-danger">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormField;
