import ModalComponent from "../../components/ModalComponent";
import {
  fireEvent,
  renderWithProviders,
} from "../../utils/test-utils";

/**
 * @vitest-environment jsdom
 */

describe("ModalComponent", () => {
  it("renders ModalComponent", () => {
    const { getByText } = renderWithProviders(
      <ModalComponent
        title="Test Modal"
        isOpen={true}
        onClose={() => {}}
        children={<div>children content</div>}
      />
    );
    expect(getByText("Test Modal")).toBeInTheDocument();
  });

  it("renders children content", () => {
    const { getByText } = renderWithProviders(
      <ModalComponent
        title="Test Modal"
        isOpen={true}
        onClose={() => {}}
        children={<div>children content</div>}
      />
    );
    expect(getByText("children content")).toBeInTheDocument();
  });

  it("renders close button", () => {
    const { getByText } = renderWithProviders(
      <ModalComponent
        title="Test Modal"
        isOpen={true}
        onClose={() => {}}
        isCancelable={true}
        children={<div>children content</div>}
      />
    );
    expect(getByText("Annuler")).toBeInTheDocument();
  });

  it("does not render close button", () => {
    const { queryByText } = renderWithProviders(
      <ModalComponent
        title="Test Modal"
        isOpen={true}
        onClose={() => {}}
        children={<div>children content</div>}
      />
    );
    expect(queryByText("Annuler")).toBeNull();
  });
});