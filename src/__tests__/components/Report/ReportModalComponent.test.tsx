import { describe, it, expect, vi } from "vitest";
import ReportModalComponent from "../../../components/Report/ReportModalComponent";
import { renderWithProviders } from "../../../utils/test-utils";
/**
* @vitest-environment jsdom
*/

describe("ReportModalComponent", () => {
  it("renders with title 'Nouveau Compte Rendu'", () => {
    const { getByText, getByTitle } = renderWithProviders(<ReportModalComponent isOpen={true} onClose={() => {}} />);

    expect(getByText("Nouveau Compte Rendu")).toBeInTheDocument();
  });
});