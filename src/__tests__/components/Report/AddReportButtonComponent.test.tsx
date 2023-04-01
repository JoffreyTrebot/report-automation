import {
  fireEvent,
  renderWithProviders,
} from "../../../utils/test-utils";
import AddReportButtonComponent from "../../../components/Report/AddReportButtonComponent";
import { Mock, vi } from "vitest";

import { addReportAction } from "../../../actions/Report/addReportAction";
import Report from "../../../domain/entities/Report";
import { useAppDispatch } from "../../../utils/hook";

/**
 * @vitest-environment jsdom
 */

describe("AddReportButtonComponent", () => {
  vi.mock("../../../utils/hook", () => ({
    useAppDispatch: vi.fn(),
  }));
  vi.mock("../../../actions/Report/addReportAction");
  it("renders ReportComponent", () => {
    const { getByPlaceholderText, getByRole } = renderWithProviders(
      <AddReportButtonComponent />
    );
    const reportNameInput = getByPlaceholderText("Report name");
    const button = getByRole("button");
    expect(reportNameInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("input accepts user input", () => {
    const { getByPlaceholderText } = renderWithProviders(
      <AddReportButtonComponent />
    );
    const input = getByPlaceholderText("Report name");
    fireEvent.change(input, { target: { value: "Test Report" } });
    expect(input).toHaveValue("Test Report");
  });

  it("renders error message when input is empty", () => {
    const { getByPlaceholderText, getByText } = renderWithProviders(
      <AddReportButtonComponent />
    );
    const input = getByPlaceholderText("Report name");
    const button = getByText("Créer");
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);
    expect(
      getByText("Le nom de votre compte rendu n'est pas valide.")
    ).toBeInTheDocument();
  });

  it("renders error message when input is undefined", () => {
    const { getByPlaceholderText, getByText } = renderWithProviders(
      <AddReportButtonComponent />
    );
    const input = getByPlaceholderText("Report name");
    const button = getByText("Créer");
    fireEvent.change(input, { target: { value: undefined } });
    fireEvent.click(button);
    expect(
      getByText("Le nom de votre compte rendu n'est pas valide.")
    ).toBeInTheDocument();
  });

  it("renders error message when input is null", () => {
    const { getByPlaceholderText, getByText } = renderWithProviders(
      <AddReportButtonComponent />
    );
    const input = getByPlaceholderText("Report name");
    const button = getByText("Créer");
    fireEvent.change(input, { target: { value: null } });
    fireEvent.click(button);
    expect(
      getByText("Le nom de votre compte rendu n'est pas valide.")
    ).toBeInTheDocument();
  });

  it("should dispatch addReportAction when button clicked", () => {
    const dispatch = vi.fn();
    const mockReport = new Report("Test report");
    (useAppDispatch as Mock).mockReturnValue(dispatch);
    const { getByPlaceholderText, getByText } = renderWithProviders(
      <AddReportButtonComponent />
    );
    const input = getByPlaceholderText("Report name");
    const button = getByText("Créer");

    fireEvent.change(input, { target: { value: "Test reportt" } });
    fireEvent.click(button);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(
      addReportAction(mockReport)
    );
  });
});
