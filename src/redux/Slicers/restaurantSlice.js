import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
// import { toast } from "react-toastify";



export const registerRestaurant = createAsyncThunk("restaurant/register", async(data, thunkAPI) => {
    try {
        const response = await axios.post(`${baseUrl()}/restaurant/register`, data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})

export const loginRestaurant = createAsyncThunk("restaurant/login", async(data, thunkAPI)=>{
    try{
        const response = await axios.post(`${baseUrl()}/restaurant/login`, data);
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})

export const fetchRestaurants = createAsyncThunk("restaurant/fetchAll", async(_, thunkAPI) => {
    try {
        const response = await axios.get(`${baseUrl()}/restaurants`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})

export const fetchRestaurantById = createAsyncThunk("restaurant/fetchById", async(id, thunkAPI) => {
    try{
        const response = await axios.get(`${baseUrl()}/restaurant/${id}`);
        return response.data;
    }
    catch(error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});


const initialState = {
    restaurant: [],
    currentRestaurant: null,
    loading: false,
    error: null,
    success: false
}

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        clearRestaurantState: (state)=>{
            state.loading = false;
            state.error = null;
            state.success = false;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(
            registerRestaurant.pending, (state) =>{
                state.loading = true;
            }
        )
        .addCase(registerRestaurant.fulfilled, (state)=>{
            state.loading = false;
            state.success = true;
            state.restaurant.push(action.payload.restaurant);
            state.error = null;
        })
        .addCase(registerRestaurant.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || "Something went wrong";
            state.success = false;
        })

        .addCase(loginRestaurant.pending, (state)=>{
            state.loading = true;
        })
        .addCase(loginRestaurant.fulfilled, (state, action)=>{
            state.loading = false;
            state.success = true;
            state.error = null;
            state.restaurant.push(action.payload.restaurant);
            // Storing the logged-in restaurant data in state
            // state.currentRestaurant = action.payload.restaurant || null;
        })
        .addCase(loginRestaurant.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || "Login failed";
            state.success = false;
            state.currentRestaurant = null;
        })

        // Fetching all restaurants
        .addCase(fetchRestaurants.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.loading = false;
            state.restaurant = action.payload.restaurants || [];
            state.error = null;
        })
        .addCase(fetchRestaurants.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Failed to fetch restaurants";
        })
        
        //fetch restaurant by id
        .addCase(fetchRestaurantById.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchRestaurantById.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentRestaurant = action.payload.restaurant || null;
            state.error = null;
        })
        .addCase(fetchRestaurantById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || "Failed to fetch restaurant by ID";
        })
        
    }
 
})


export const { clearRestaurantState } = restaurantSlice.actions;

export default restaurantSlice.reducer;