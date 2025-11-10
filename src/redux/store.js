import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice.js'; 
import newSlice from './slice/multiply.js';
import productSlice from './slice/productAPI.js';


const store = configureStore({
    reducer : {
        countt : counterSlice,
        multiply : newSlice,
        productAPI : productSlice
    }
})
console.log(counterSlice)
console.log(store.getState());
export default store;

