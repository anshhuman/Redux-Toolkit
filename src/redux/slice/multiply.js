import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 5
};

const newSlice = createSlice({
    name : "Multiply",
    initialState,
    reducers: {
        product : function(state){
            state.value *= 5
        },
        resetValue: function(state){
            state.value = 5;
        }
    }
})

export default newSlice.reducer;
export const {product,resetValue} = newSlice.actions;