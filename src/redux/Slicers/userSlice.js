import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseUrl"
import { toast } from "react-toastify";

export const createUser = createAsyncThunk("user/create-user", async(data, thunkAPI)=>{
    try {
        const response = await axios.post(`${baseUrl()}/create-user`, data)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})

export const verifyEmailToken = createAsyncThunk("user/verify-email", async(token, thunkAPI)=>{
    try {
        const response = await axios.get(`${baseUrl()}/verify-email?token=${token}`);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.response?.data?.message)
    }
})

export const loginUser = createAsyncThunk("user/login", async(data, thunkAPI)=>{
    try{
        const response = await axios.post(`${baseUrl()}/sign-in`, data)
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response?.data?.message)
    }
})

export const requestPasswordReset = createAsyncThunk("user/reset-mail", async(data, thunkAPI) => {
    try{
        const res = await axios.post(`$baseUrl()/reset-mail`, data);
        return res.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response?.data?.message)
    }
})

export const resetPassword = createAsyncThunk("user/reset-pass", async(data, thunkAPI) => {
    try{
        const response = await axios.patch(`${baseUrl()}/reset-pass?token=${token}`, data)
    } catch (error){
        return thunkAPI.rejectWithValue(error.response?.data?.message)
    }
})

export const getUser = createAsyncThunk("user/get-user", async( _, thunkAPI) => {
    try{
        const response = await axios.get(`${baseUrl}/user/${id}`)
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response)
    }
})

export const getAllUsers = createAsyncThunk("user/all-users", async(_, thunkAPI)=>{
    try{
        const response = await axios.get(`${baseUrl()}/users`);
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})

export const updateUsers = createAsyncThunk('users/edit', async(data, thunkAPI) => {
    try{
        const response = await axios.patch(`${baseUrl}/edit/${id}`, data);
        return response.data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})

const initialState = {
    users: [],
    currentUser: null,
    isLoading: false,
    error: null,
    success: null
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        clearUserState: (state) => {
            state.isLoading = false;
            state.error = null;
            state.success = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = 'User created successfully!';
            state.users.push(action.payload);
            toast.success("User created successfully!")
        })
        .addCase(createUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            toast.error("Error creating user: " + action.payload);
            console.error("Error creating user:", action.payload);
        })

        //verifyemail
        .addCase(verifyEmailToken.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(verifyEmailToken.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = "Token has been verified";
            toast.success("Token has been verified");
            state.users.push(action.payload)
        })
        .addCase(verifyEmailToken.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            toast.error("Error verifying email: " + action.payload);
            // console.error("Error verifying email", action.payload)
        })

        //user login
        .addCase(loginUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = "User logged in successfully";
            state.users.push(action.payload)
        })
        .addCase(loginUser.rejected, (state, action) =>{
            state.isLoading = false;
            state.error = action.payload;
            toast.error("Error logging user in: " + action.payload);
            // alert("Error looging user in", action.payload)
        })

        //requesstpassword reset
        .addCase(requestPasswordReset.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(requestPasswordReset.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = "Reset link has been sent to your email";
            state.users.push(action.payload);
        })
        .addCase(requestPasswordReset.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            console.error("Error resetting password", action.payload)
        })

        //reset password 
        .addCase(resetPassword.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(resetPassword.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = "Password reset successful";
            state.users.push(action.payload);
        })
        .addCase(resetPassword.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            console.error("Error resetting password", action.payload)
        })

        //get user
        .addCase(getUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = "Usser found";
            state.users.push(action.payload);
        })
        .addCase(getUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            console.error("Error finding user", action.payload)
        })

        //get all users
        .addCase(getAllUsers.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = "Users found";
            state.users.push(action.payload);
        })
        .addCase(getAllUsers.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            console.error("Error finding users", action.payload)
        })

        //update user
        .addCase(updateUsers.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(updateUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = "User has been updated";
            state.users.push(action.payload); 
        })
        .addCase(updateUsers.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            console.error("Error updating users", action.payload)
        })  
    }
})


export const { clearUserState } = userSlice.actions;
export default userSlice.reducer;