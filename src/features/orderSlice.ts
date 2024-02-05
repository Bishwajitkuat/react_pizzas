import { createSlice } from "@reduxjs/toolkit";
import { CartInitialStateType } from "./cartSlice";

const initialState: CartInitialStateType = {
  cart: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder(state, action) {
      state.cart = action.payload;
    },
    removeFromOrder(state) {
      state.cart = [];
    },
  },
});

export const { addToOrder, removeFromOrder } = orderSlice.actions;
export default orderSlice.reducer;
