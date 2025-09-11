import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";


export const placeOrder = createAsyncThunk("order/place", async (data, thunkAPI) => {
    try {
        const response = await axios.post(`${baseUrl()}/order/place`, data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});

export const getOrderByEmail = createAsyncThunk("order/get", async(email, thunkAPI)=>{
    try{
        const response = await axios.get(`${baseUrl()}/order/get/${email}`);
        return response.data;
    } catch(error){
         return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})

const initialState = {
    order: [],
    currentOrder: null,
    loading: false,
    error: null,
    success: false
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        clearOrderState: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(placeOrder.pending, (state) => {
                state.loading = true;
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.order.push(action.payload);
                state.error = null;
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })

            .addCase(getOrderByEmail.pending, (state, action)=>{
                state.loading = true;
            })
            .addCase(getOrderByEmail.fulfilled, (state, action)=>{
                state.loading = false;
                state.success = true;
                state.order = action.payload;
                state.error = null;  
            })
    }
});

export const { clearOrderState } = orderSlice.actions;
export default orderSlice.reducer;