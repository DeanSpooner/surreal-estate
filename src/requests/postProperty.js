/* eslint-disable no-console */

import axios from "axios";

const postProperty = (
  { title, type, bedrooms, bathrooms, price, city, email },
  setAlert
) => {
  const endpoint = "http://localhost:4000/api/v1/PropertyListing";

  return axios
    .post(endpoint, {
      title,
      type,
      bedrooms,
      bathrooms,
      price,
      city,
      email,
    })
    .then((response) => {
      setAlert({
        message: "Property Added",
        isSuccess: true,
      });
      console.log(response);
    })
    .catch((error) => {
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      });
      console.error("Server error", error);
    });
};

export default postProperty;
