import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    value: 10
}

const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: function(state) {
            state.count += 1;
        },
        decrement: function(state) {
        state.count -= 1;
        },
        reset: function(state) {
            state.count = 0;
    }
}})
console.log(counterSlice.actions);
export default counterSlice.reducer;
export const {increment,decrement,reset} = counterSlice.actions;
