import ReportPage from "../../pages/ReportPage";
import { renderWithProviders } from "../../utils/test-utils";

/**
 * @vitest-environment jsdom
 */

describe("ReportPage", () => {
  it("renders ReportPage", () => {
    const { getByTitle } = renderWithProviders(<ReportPage />);
    expect(getByTitle("report-page-empty")).toBeInTheDocument();
  });

  it("renders ReportPage with reportId", () => {
    const { getByTitle } = renderWithProviders(<ReportPage reportId="1" />);
    expect(getByTitle("report-page")).toBeInTheDocument();
  });
});
