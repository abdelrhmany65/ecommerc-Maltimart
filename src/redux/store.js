import cartSlice from "./slice/cartSlice";
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
})

export default store;
