import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 import productReducer from './CartSlice';
//  import todoReducer from './TodoSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        // todo:todoReducer
    },
});

export default store;







