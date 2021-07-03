/* eslint-disable no-console */

import axios from "axios";

const postProperty = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
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
      console.log(response);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        console.error("Incomplete fields", error);
      }
      if (status === 500) {
        console.error("Server error", error);
      }
    });
};

export default postProperty;
