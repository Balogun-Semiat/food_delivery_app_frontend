import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./Slicers/userSlice";
import restaurantReducer from "./Slicers/restaurantSlice";
import menuReducer from "./Slicers/menuSlice";
import cartReducer from "./Slicers/cartSlice";


export const store = configureStore({
    reducer: {
      users: userReducer,
      restaurant: restaurantReducer,
      menu: menuReducer,
      cart: cartReducer
    },
  })