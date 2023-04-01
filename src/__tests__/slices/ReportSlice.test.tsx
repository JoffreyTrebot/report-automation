import { ADD_REPORT_ACTION, GET_REPORT_ACTION, REPORT_ACTION_FAILURE, REPORT_ACTION_LOADING } from "../../slices/ReportSlice";
import reportReducer, { ReportState } from "../../slices/ReportSlice";
import Report from "../../domain/entities/Report";

/**
* @vitest-environment jsdom
*/
describe("ReportSlice", () => {
  const mockReport = new Report("Report Name");
  const mockReports = [mockReport];
  const mockError = new Error("Error message");
  let initialState: ReportState;

  beforeEach(() => {
    initialState = {
      reports: [],
      error: null,
      isLoading: false
    };
  });

  it("should add report", () => {
    const nextState = reportReducer(initialState, ADD_REPORT_ACTION(mockReport));
    
    expect(nextState.reports.length).toEqual(1);
    expect(nextState.reports[0]).toEqual(mockReport);
    expect(nextState.isLoading).toEqual(initialState.isLoading);
    expect(nextState.error).toEqual(initialState.error);
  });

  it("should update loading to true", () => {
    const nextState = reportReducer(initialState, REPORT_ACTION_LOADING(true));

    expect(nextState.isLoading).toEqual(true);
    expect(nextState.reports).toEqual(initialState.reports);
    expect(nextState.error).toEqual(initialState.error);
  })

  it("should get reports", () => {
    const nextState = reportReducer(initialState, GET_REPORT_ACTION(mockReports));

    expect(nextState.reports).toEqual(mockReports);
    expect(nextState.isLoading).toEqual(initialState.isLoading);
    expect(nextState.error).toEqual(initialState.error);
  })

  it("should get error", () => {
    const nextState = reportReducer(initialState, REPORT_ACTION_FAILURE(mockError));

    expect(nextState.error).toEqual(mockError);
    expect(nextState.isLoading).toEqual(initialState.isLoading);
    expect(nextState.reports).toEqual(initialState.reports);
  })
});
