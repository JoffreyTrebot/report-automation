import { configureStore } from "@reduxjs/toolkit";
import ReportReducer from "./slices/ReportSlice";

export const store = configureStore({
  reducer: { report: ReportReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
