import { getReportsUsecase } from "../../domain/usecases/getReportsUsecase";
import { GET_REPORT_ACTION, REPORT_ACTION_FAILURE, REPORT_ACTION_LOADING } from "../../slices/ReportSlice";
import { AppDispatch } from "../../store";


export const getReportsAction = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: REPORT_ACTION_LOADING,
      payload: true,
    });
    getReportsUsecase().then((reports) => {
      dispatch({
        type: GET_REPORT_ACTION,
        payload: reports,
      });
    }).catch((error) => {
      dispatch({
        type: REPORT_ACTION_FAILURE,
        payload: error,
        });
    }).finally(() => {
      dispatch({
        type: REPORT_ACTION_LOADING,
        payload: false,
      });
    });
  };
}