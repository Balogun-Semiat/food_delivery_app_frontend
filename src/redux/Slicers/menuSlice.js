import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";




export const postMenu = createAsyncThunk('menu/postMenu', async (data, thunkAPI) =>{
    try{
        const response = await axios.post(`${baseUrl()}/menu/post-menu`, data);
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})

export const fetchMenuByRestaurant = createAsyncThunk('menu/fetchByRestaurant', async (id, thunkAPI) =>{
    try{
        const response = await axios.get(`${baseUrl()}/menu/get-menu/${id}`);
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});

export const fetchMenuItemById = createAsyncThunk('menu/fetchById', async (id, thunkAPI) =>{
    try{
        const response = await axios.get(`${baseUrl()}/menu/menu/${id}`);
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});


const initialState = {
    menuItems: [],
    currentMenuItem: null,
    loading: false,
    error: null,
    success: false
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        clearMenuState: (state) =>{
            state.loading = false;
            state.error = null;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(postMenu.pending, (state)=>{
            state.loading = true;
        })
        .addCase(postMenu.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.menuItems.push(action.payload.newMenuItem);
            state.error = null;
        })
        .addCase(postMenu.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload || "Something went wrong";
        })

        //fetchMenuByRestaurant
        .addCase(fetchMenuByRestaurant.pending, (state) => {
            state.loading = true;
        })

        .addCase(fetchMenuByRestaurant.fulfilled, (state, action) => {
            state.loading = false;
            state.menuItems = action.payload.menuItems;
            state.error = null;
        })
        .addCase(fetchMenuByRestaurant.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload || "Something is wrong";
        })
    }
})


export const { clearMenuState } = menuSlice.actions;
export default menuSlice.reducer;