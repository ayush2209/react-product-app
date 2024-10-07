import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            // Mutating the state
            // Add a item to the cart.
            state.items.push(action.payload);
        },

        removeItems: (state, action) => {
            //Remove item from the cart.
        },

        clearItems: (state, action) => {
            //Clear the cart.
        }
    }
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;