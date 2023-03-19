const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, actions) {
        state.push(actions.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
   increment(state, action) {
     console.log('-----nanand---- :>> ', state); 
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer; 

















