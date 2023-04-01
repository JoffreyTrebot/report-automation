import Report from "../../../domain/entities/Report";

/**
 * @vitest-environment jsdom
 */

describe("Report", () => {
  it("should create a new report with name only", () => {
    const report = new Report("Report 1");

    expect(report.id).toBeUndefined();
    expect(report.name).toBe("Report 1");
    expect(report.created_at).toBeUndefined();
  });

  it("should create a new report with id and name", () => {
    const report = new Report("Report 1", 1);

    expect(report.id).toBe(1);
    expect(report.name).toBe("Report 1");
    expect(report.created_at).toBeUndefined();
  });

  it("should create a new report with id, name, and createdAt", () => {
    const createdAt = new Date();
    const report = new Report("Report 1", 1, createdAt);

    expect(report.id).toBe(1);
    expect(report.name).toBe("Report 1");
    expect(report.created_at).toBe(createdAt);
  });
});
