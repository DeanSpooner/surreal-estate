import axios from "axios";
import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: true,
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
        console.error("Server error", error);
      });
  }, []);

  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} className="col" />
      ))}
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
};

export default Properties;
