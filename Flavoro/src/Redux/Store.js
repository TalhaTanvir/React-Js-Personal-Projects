import { configureStore } from "@reduxjs/toolkit";
import CartSilce from './Slices/CartSlice'
import CategorySlice from './slices/CategorySlice'
import SearchSlice from './Slices/SearchSlice'


const Store = configureStore({
    reducer:{
        cart: CartSilce,
        category: CategorySlice,
        search: SearchSlice,
    }

})


export default Store;