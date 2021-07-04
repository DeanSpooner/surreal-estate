import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const props = {
    title: "2 bed flat",
    type: "Flat",
    bathrooms: 1,
    bedrooms: 2,
    price: 125000,
    city: "Liverpool",
    email: "dean.spooner@here.com",
  };

  return (
    <div>
      Properties Page
      <PropertyCard props={props} />
    </div>
  );
};

export default Properties;
