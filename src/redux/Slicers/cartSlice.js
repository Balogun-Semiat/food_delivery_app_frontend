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
                // alert("Item already in cart");
                existingItem.quantity += 1;
                // return;
            } else {
                state.cartItems.push({...action.payload, quantity: 1});
            localStorage.setItem("cart", JSON.stringify(state))
            }
        },
        increaseQty: (state, action)=>{
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if(item){
                item.quantity += 1;
            }
            localStorage.setItem("cart", JSON.stringify(state))
        },
        decreaseQty: (state, action)=>{
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if(item && item.quantity > 1){
                item.quantity -= 1;
            } else{
                state.cartItems = state.cartItems.filter(item => item.menuItemsId !== action.payload.menuItemsId);
            }
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

export const {addToCart, increaseQty, decreaseQty,  removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;