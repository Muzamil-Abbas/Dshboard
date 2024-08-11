// store.ts
import { configureStore } from "@reduxjs/toolkit";
import medicineReducer from "./medicineSlice.ts";

const store = configureStore({
  reducer: {
    medicines: medicineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
