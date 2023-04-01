import { ReportState } from "../slices/ReportSlice";

export const reportsSelector = ({ report } : { report: ReportState}) => report.reports;
export const isLoadingReportsSelector = ({ report } : { report: ReportState}) => report.isLoading;
