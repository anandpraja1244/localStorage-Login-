import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const Navigate = useNavigate();
  const [error , setError]=useState(false)
  const [allForm, setAllForm] = useState({
    name: " ",
    email:" ",
  });

  const handelOnChange =(e)=>{
    setAllForm({
        ...allForm,
        [e.target.name]: e.target.value,
    })
  }
  const handelButton = (e) => {
     e.preventDefault();
     if(!allForm.name || !allForm.email){
     return setError(true)
     }
    localStorage.setItem('login', JSON.stringify(allForm));
    Navigate('/read') 
  };
  return (
    <div>
      <h2>Create</h2>
      <form  className="col-4">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="exampleInputPassword1" 
          
          name="name"
          value={allForm.name}
          onChange={handelOnChange}
          />
          {error && allForm.name && (
                        <span className="text-danger">
                          {" "}
                          please enter vailed username{" "}
                        </span>
                      )}
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
           name="email"
            value={allForm.email}
          onChange={handelOnChange}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handelButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
