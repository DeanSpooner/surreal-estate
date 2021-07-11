import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/Properties.css";

const Properties = ({ userID }) => {
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

  const handleSaveProperty = async (propertyId) => {
    await axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userID.id,
    });
  };

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
          <PropertyCard
            key={property._id}
            {...property}
            className="col"
            userID={userID}
            onSaveProperty={handleSaveProperty}
          />
        ))}
        <Alert
          message={alert.message}
          success={alert.isSuccess}
          setAlert={setAlert}
        />
      </div>
    </div>
  );
};

export default Properties;

Properties.propTypes = {
  userID: PropTypes.shape({
    id: PropTypes.string,
    imgURL: PropTypes.string,
    userName: PropTypes.string,
  }).isRequired,
};
