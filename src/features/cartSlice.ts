import { createSlice } from "@reduxjs/toolkit";

export interface CartItemType {
  id: number;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface CartInitialStateType {
  cart: CartItemType[];
}

const initialState: CartInitialStateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // user might try to add same item multiple times from menu page
      // if the item already existed in the cart
      const oldItem = state.cart.find((item) => item.id === action.payload.id);
      if (oldItem !== undefined) {
        oldItem.quantity += 1;
        oldItem.totalPrice += oldItem.unitPrice;
      } else {
        state.cart.push(action.payload);
      }
    },
    addOneToCart(state, action) {
      const oldItem = state.cart.find(
        (item) => item.id === action.payload,
      ) as CartItemType;
      oldItem.quantity += 1;
      oldItem.totalPrice += oldItem.unitPrice;
    },
    removeOneFromCart(state, action) {
      const oldItem = state.cart.find(
        (item) => item.id === action.payload,
      ) as CartItemType;
      // it could be the one or more, if the qty is 1, the item will be removed from the cart
      if (oldItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        oldItem.quantity -= 1;
        oldItem.totalPrice -= oldItem.unitPrice;
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  addOneToCart,
  removeOneFromCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
