
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector  } from "react-redux";
import { AddData, removeTodo,updateTodo } from '../componentStore/store/TodoSlice';


function TodoPage() {
  const todos = useSelector((state)=>state.todosNew?.todos);
  
  const dispatch=useDispatch()
  
  const [formData, setFromData] = useState('');
  const [formDataEdit, setFromEditData] = useState('');
  const [fromEditPass, setFromEditPass] = useState();
 console.log('firsnnnnnnnnnnnnt', fromEditPass)
  
  console.log('firsssfsfsdt  jjjjjjj======', formData)
 const handeFromData=(e)=>{
       e.preventDefault();      
      dispatch(AddData(formData));     
 }

 const handleTodoDone = (id) => {
    dispatch(removeTodo(id)); 
};

const handleTodoedit=(item,i)=>{
  setFromEditData(item,i)
  setFromEditPass(item,i)
}

const handelEditForm=(e)=>{
e.preventDefault()
dispatch(updateTodo({
  fromEditPass:fromEditPass,
  formDataEdit:formDataEdit

}
   )); 
}
  return (
    <div>
      <h2>TodoPage</h2>
      <div className='row '>
      <div className='col-4 d-flex m-2'> 
      <input type='text' placeholder='' class="form-control"    value={formData} onChange={(e)=>setFromData(e.target.value)} />
      <button type='submit' className='btn btn-warning' onClick={handeFromData}>add</button>
      </div>
      <div className='row '>
      <div className='col-4  m-2'> 
      {
        todos?.map((item,i)=>{
            return(
                <>
                <li key={i}>{item.value} </li>
                <button type='submit' className='btn btn-danger' onClick={()=>handleTodoDone(item.id)}>Delete</button>
                <button type='submit' className='btn btn-info' onClick={()=>handleTodoedit(item,i )}>edit</button>
                </>
            )
        })
      }
</div>
</div>
</div>


<div className='col-4'> 
<form>
  <div class="col-4  mb-3 mt-4">
    
    <input type="text" class="form-control" value={formDataEdit?.value} onChange={(e)=>setFromEditData(e.target.value)} />
  </div>
  <button type="submit" class="btn btn-primary"  onClick={handelEditForm}>dsdssd</button>
</form>
</div>
    </div>
  )
}

export default TodoPage