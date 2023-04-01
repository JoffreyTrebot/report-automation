import { isLoadingReportsSelector, reportsSelector } from "../../selectors/ReportSelectors";
import { ReportState } from "../../slices/ReportSlice";

/**
 * @vitest-environment jsdom
 */

describe("ReportSelectors", () => {
  const state: { report: ReportState } = {
    report: {
      reports: [
        { id: 1, name: "Report 1" },
        { id: 2, name: "Report 2" },
      ],
      isLoading: false,
      error: null,
    },  
  };

  it("should return the reports array", () => {
    const result = reportsSelector(state);
    expect(result).toEqual(state.report.reports);
  });

  it("should return the isLoading value", () => {
    const result = isLoadingReportsSelector(state);
    expect(result).toEqual(state.report.isLoading);
  });
});