import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/Properties.css";

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

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

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
    <div className="properties">
      <SideBar />
      <div className="propertyCard__container">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} className="col" />
        ))}
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
    </div>
  );
};

export default Properties;
