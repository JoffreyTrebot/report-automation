/**
 * @vitest-environment jsdom
 */

import { Mock, vi } from "vitest";
import Report from "../../../domain/entities/Report";
import { addReportUsecase } from "../../../domain/usecases/addReportUsecase";
import { supabase } from "../../../utils/client";

describe("addReportUsecase", () => {
  vi.mock("../../utils/client", () => ({ supabase: { from: vi.fn() } }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should insert report and return this new report", async () => {
    const mockNewReport = new Report("Rapport test", 1, new Date());
    const mockData = [
      {
        name: mockNewReport.name,
        id: mockNewReport.id,
        created_at: mockNewReport.created_at,
      },
    ];
    const mockResponse = { data: mockData, error: null };
    const mSelect = vi
      .fn()
      .mockImplementation(() => Promise.resolve(mockResponse));
    const mInsert = vi.fn().mockImplementation(() => { return { select: mSelect }});
    supabase.from = vi.fn().mockImplementation(() => {
      return { insert: mInsert };
    });

    const result = await addReportUsecase(mockNewReport);

    expect(result).toEqual(mockNewReport);
  });

  it("should throw if select is rejected", async () => {
    const testError = new Error("Test error");

    (supabase.from as Mock).mockReturnValueOnce({
      insert: vi.fn().mockReturnValueOnce({ select: vi.fn().mockRejectedValueOnce(testError) }),
    });

    const newReport = new Report("Test Report");
    const result = await addReportUsecase(newReport);

    expect(result).toEqual(testError);
  });

  it("should throw if select return an error", async () => {
    const testError = new Error("Test error");
    const mockNewReport = new Report("Rapport test", 1, new Date());
    const mockData = [
      {
        name: mockNewReport.name,
        id: mockNewReport.id,
        created_at: mockNewReport.created_at,
      },
    ];
    const mockResponse = { data: mockData, error: testError };
    const mSelect = vi
      .fn()
      .mockImplementation(() => Promise.resolve(mockResponse));
    const mInsert = vi.fn().mockImplementation(() => { return { select: mSelect }});
    supabase.from = vi.fn().mockImplementation(() => {
      return { insert: mInsert };
    });

    const result = await addReportUsecase(mockNewReport);

    expect(result).toEqual(testError);
  });
});
