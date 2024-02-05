import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import cartSlice from "./features/cartSlice";
import orderSlice from "./features/orderSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    order: orderSlice,
  },
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
