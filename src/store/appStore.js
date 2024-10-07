import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // Below reducer is for big reducer app level
    reducer: {
        cart: cartReducer, // Small reducer for small state management
    }
})

export default appStore;