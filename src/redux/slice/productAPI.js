import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    loading: false,
    error: null
};

export const fetchProduct = createAsyncThunk('fetch_product' , async() => {
    try {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data // This becomes action.payload for the fulfilled action case
    } catch(error) {

    }
});

const productSlice = createSlice({
    name: 'ProductAPI',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending , (state) => {
            state.loading = true
        }).addCase(fetchProduct.fulfilled , (state,action) => {
            state.loading = false
            state.products = action.payload // This is the response.data from the fetchProduct thunk
        })
    },
})
export default productSlice.reducer;


