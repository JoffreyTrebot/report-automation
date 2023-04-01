/**
 * @vitest-environment jsdom
 */

import { Mock, vi } from "vitest";
import Report from "../../../domain/entities/Report";
import { getReportsUsecase } from "../../../domain/usecases/getReportsUsecase";
import { supabase } from "../../../utils/client";

describe("getReportUsecase", () => {
  vi.mock("../../utils/client", () => ({ supabase: { from: vi.fn() } }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return reports", async () => {
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
    supabase.from = vi.fn().mockImplementation(() => {
      return { select: mSelect };
    });

    const result = await getReportsUsecase();

    expect(result).toEqual(mockData);
  });

  it("should throw if select is rejected", async () => {
    const testError = new Error("Test error");

    (supabase.from as Mock).mockReturnValueOnce({
      select: vi.fn().mockRejectedValueOnce(testError),
    });

    const result = await getReportsUsecase();

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
    supabase.from = vi.fn().mockImplementation(() => {
      return { select: mSelect };
    });

    const result = await getReportsUsecase();

    expect(result).toEqual(testError);
  });
});
