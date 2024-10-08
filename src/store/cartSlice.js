import { createSlice, current } from '@reduxjs/toolkit';

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
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },

        clearItems: (state, action) => {
            //Clear the cart.
            console.log(state);
            console.log(current(state));
            state.items.length = 0;
        }
    }
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;