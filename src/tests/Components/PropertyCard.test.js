import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "2 bed flat",
    type: "Flat",
    bathrooms: 1,
    bedrooms: 2,
    price: 125000,
    city: "Liverpool",
    email: "dean.spooner@here.com",
  };

  const { asFragment } = render(<PropertyCard props={validProps} />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<PropertyCard props={validProps} />);

    expect(getByText("2 bed flat in Liverpool")).toHaveClass(
      "propertyCard__title"
    );
    expect(getByText("Flat in Liverpool")).toHaveClass("propertyCard__type");
    expect(getByText("1 bathroom")).toHaveClass("propertyCard__bathrooms");
    expect(getByText("2 bedrooms")).toHaveClass("propertyCard__bedrooms");
    expect(getByText("£125000")).toHaveClass("propertyCard__price");
    expect(getByText("Click to email seller")).toHaveClass(
      "propertyCard__emailhref"
    );
  });
});
