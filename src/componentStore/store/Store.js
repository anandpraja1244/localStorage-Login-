import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 import productReducer from './ProductSlice';
   import todoReducer from './TodoSlice.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        todosNew:todoReducer
    },
});

export default store;







