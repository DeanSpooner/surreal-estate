import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  const { asFragment } = render(<AddProperty />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders input correctly", () => {
    const { getByTestId } = render(<AddProperty />);
    const input = getByTestId("form-title-input");
    expect(input).toBeTruthy();
  });

  it("renders button correctly", () => {
    const { getByTestId } = render(<AddProperty />);
    const button = getByTestId("form-button");
    expect(button).toBeTruthy();
  });
});
