import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || {
    cartItems: [],
    // totalAmount: 0
}


const cartSlice =  createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(existingItem){
                alert("Item already in cart");
                return;
            }
            state.cartItems.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state))
        },
        removeFromCart: (state, action) =>{
            state.cartItems = state.cartItems.filter(item => item.menuItemsId !== action.payload.menuItemsId);
            localStorage.setItem("cart", JSON.stringify(state))
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cart", JSON.stringify(state))
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;