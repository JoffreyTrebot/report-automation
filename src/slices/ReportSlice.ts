import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Report from "../domain/entities/Report";

export interface ReportState {
  reports: Report[];
  error: Error | null;
  isLoading: boolean;
}

const initialState: ReportState = {
  reports: [],
  error: null,
  isLoading: false,
};

export const ReportSlice = createSlice({
  name: "Report",
  initialState,
  reducers: {
    REPORT_ACTION_LOADING: (
      state: ReportState,
      action: PayloadAction<boolean>
    ) => {
      state.isLoading = action.payload;
    },
    GET_REPORT_ACTION: (
      state: ReportState,
      action: PayloadAction<Report[]>
    ) => {
      state.reports = action.payload;
    },
    ADD_REPORT_ACTION: (state: ReportState, action: PayloadAction<Report>) => {
      state.reports.push(action.payload);
    },
    REPORT_ACTION_FAILURE: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const {
  REPORT_ACTION_LOADING,
  GET_REPORT_ACTION,
  ADD_REPORT_ACTION,
  REPORT_ACTION_FAILURE,
} = ReportSlice.actions;

export default ReportSlice.reducer;
