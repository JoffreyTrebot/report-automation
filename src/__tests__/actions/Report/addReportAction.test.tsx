import { beforeEach, describe, it, Mock, vi } from "vitest";
import { addReportAction } from "../../../actions/Report/addReportAction";
import Report from "../../../domain/entities/Report";
import { addReportUsecase } from "../../../domain/usecases/addReportUsecase";
import {
  ADD_REPORT_ACTION,
  REPORT_ACTION_FAILURE,
} from "../../../slices/ReportSlice";

/**
 * @vitest-environment jsdom
 */

const fakeReport = new Report("Report Name");
describe("addReportAction", () => {
  it("should retourn a function", () => {
    const result = addReportAction(fakeReport);
    expect(typeof result).toEqual("function");
  });
});

vi.mock("../../../domain/usecases/addReportUsecase");

describe("addReportAction_SUCCESS", () => {
  const mockReport = new Report("Report Name", 1, new Date());

  beforeEach(() => {
    (addReportUsecase as Mock).mockResolvedValue(mockReport);
  });

  it("should dispatch sucess action posting report", async () => {
    const dispatch = vi.fn();

    await addReportAction(fakeReport)(dispatch);
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(dispatch).toHaveBeenCalledWith({
      type: ADD_REPORT_ACTION,
      payload: mockReport,
    });
  });
});

describe("addReportAction_FAILURE", () => {
  const mockError = new Error("Something went wrong");

  beforeEach(() => {
    (addReportUsecase as Mock).mockRejectedValue(mockError);
  });

  it("should dispatch failure action if posting report fails", async () => {
    const dispatch = vi.fn();

    await addReportAction(fakeReport)(dispatch);
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(dispatch).toHaveBeenCalledWith({
      type: REPORT_ACTION_FAILURE,
      payload: mockError,
    });
  });
});
