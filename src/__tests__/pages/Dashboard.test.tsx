import Dashboard from "../../pages/Dashboard";
import { renderWithProviders } from "../../utils/test-utils";

/**
 * @vitest-environment jsdom
 */

describe("Dashboard", () => {
  it("renders Dashboard", () => {
    const { getByTitle } = renderWithProviders(<Dashboard />);
    expect(getByTitle("dashboard")).toBeInTheDocument();
  });
});
