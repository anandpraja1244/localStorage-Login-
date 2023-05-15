import { v4 as uuidv4 } from "uuid";
const { createSlice } = require("@reduxjs/toolkit");

const createTodo = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    AddData(state, action) {
      const newData = { id: uuidv4(), value: action.payload };
      state.todos = [...state.todos, newData];
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo(state,action ){
      console.log('first  action.payloadjjj', action.payload)
      const {formDataEdit,fromEditPass   }=  action.payload;
      console.log('first====up=>', formDataEdit)
      const data =state.todos.map((user)=>{
        if(user.id===fromEditPass?.id){
          return{
            id:user.id,
            value:formDataEdit
          }
        }else return user
      })
      state.todos=data;
      
    }
  },
});
export const { AddData, removeTodo , updateTodo } = createTodo.actions;
export default createTodo.reducer;
