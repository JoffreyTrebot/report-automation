import { configureStore } from "@reduxjs/toolkit";
import ReportReducer from "./slices/ReportSlice";

export const store = configureStore({ reducer: { reports: ReportReducer } });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;