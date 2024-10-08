import { configureStore } from "@reduxjs/toolkit";
import sheetSlice from './slice/sheetSlice'
const store = configureStore({
  reducer: { sheetSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
