import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import cartSlice from "./features/cartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
