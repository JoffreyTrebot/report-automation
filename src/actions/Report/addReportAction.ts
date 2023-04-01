import Report from "../../domain/entities/Report";
import { addReportUsecase } from "../../domain/usecases/addReportUsecase";
import { ADD_REPORT_ACTION, REPORT_ACTION_FAILURE, } from "../../slices/ReportSlice";
import { AppDispatch } from "../../store";

export const addReportAction = (report: Report) => {
  return (dispatch: AppDispatch) => {
    addReportUsecase(report).then((report) => {
      dispatch({
        type: ADD_REPORT_ACTION,
        payload: report,
      });
    }).catch((error) => {
      dispatch({
        type: REPORT_ACTION_FAILURE,
        payload: error,
        });
    });
  };
};
