import { configureStore } from "@reduxjs/toolkit";
import { cleanup, render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { afterEach } from "vitest";
import ReportReducer from "../slices/ReportSlice";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

export function renderWithProviders(
  ui: React.ReactElement,
  {
    store = configureStore({ reducer: { report: ReportReducer }}),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
