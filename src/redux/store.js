import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice'; 
import newSlice from './slice/multiply';


const store = configureStore({
    reducer : {
        countt : counterSlice,
        multiply : newSlice
    }
})
console.log(store.getState());
export default store;

