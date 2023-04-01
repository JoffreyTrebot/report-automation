import { getReportsAction } from "../../../actions/Report/getReportsAction";
import { getReportsUsecase } from "../../../domain/usecases/getReportsUsecase";
import { REPORT_ACTION_LOADING, GET_REPORT_ACTION, REPORT_ACTION_FAILURE } from "../../../slices/ReportSlice";
import { beforeEach, describe, expect, it, vi, Mock } from 'vitest'

/**
* @vitest-environment jsdom
*/

describe("getReportsAction", () => {
  it("should return a function", () => {
    const result = getReportsAction();
    expect(typeof result).toEqual("function");
  });
});

vi.mock("../../../domain/usecases/getReportsUsecase");

const mockReports = [
  { id: 1, name: "Report 1" },
  { id: 2, name: "Report 2" },
];

describe("getReportsAction_SUCCESS", () => {
  beforeEach(() => {
    (getReportsUsecase as Mock).mockResolvedValue(mockReports);
  });

  it("should dispatch loading action before fetching reports", async () => {
    const dispatch = vi.fn();

    await getReportsAction()(dispatch);
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(dispatch).toHaveBeenCalledWith({
      type: REPORT_ACTION_LOADING,
      payload: true,
    });
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  it("should dispatch success action after fetching reports", async () => {
    const dispatch = vi.fn();

    await getReportsAction()(dispatch);
    await new Promise((resolve) => setTimeout(resolve, 0));
    
    expect(dispatch).toHaveBeenCalledWith({
      type: GET_REPORT_ACTION,
      payload: mockReports,
    });
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  it("should dispatch loading action with payload false after fetching reports", async () => {
    const dispatch = vi.fn();

    await getReportsAction()(dispatch);
    await new Promise((resolve) => setTimeout(resolve, 0));
    
    expect(dispatch).toHaveBeenCalledWith({
      type: REPORT_ACTION_LOADING,
      payload: false,
    }); 
    expect(dispatch).toHaveBeenCalledTimes(3);   
  });
});

const mockError = new Error("Something went wrong");

describe("getReportsAction_FAILURE", () => {
  beforeEach(() => {
    (getReportsUsecase as Mock).mockRejectedValue(mockError);
  });

  it("should dispatch loading action with payload true before fetching reports fails", async () => {
    const dispatch = vi.fn();

    await getReportsAction()(dispatch);
    await new Promise((resolve) => setTimeout(resolve, 0));
    
    expect(dispatch).toHaveBeenCalledWith({
      type: REPORT_ACTION_LOADING,
      payload: true,
    });   
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  it("should dispatch failure action if fetching reports fails", async () => {
    const dispatch = vi.fn();

    await getReportsAction()(dispatch);
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(dispatch).toHaveBeenCalledWith({
      type: REPORT_ACTION_FAILURE,
      payload: mockError,
    });
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  it("should dispatch loading action with payload false after fetching reports fails", async () => {
    const dispatch = vi.fn();

    await getReportsAction()(dispatch);
    await new Promise((resolve) => setTimeout(resolve, 0));
    
    expect(dispatch).toHaveBeenCalledWith({
      type: REPORT_ACTION_LOADING,
      payload: false,
    });
    expect(dispatch).toHaveBeenCalledTimes(3);    
  });
});