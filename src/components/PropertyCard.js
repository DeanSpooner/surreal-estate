import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
import bath from "../images/bath.png";
import bed from "../images/bed.png";
import pound from "../images/pound.png";
import emailpic from "../images/email.png";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="propertyCard">
      <h2 className="propertyCard__title" data-testid="propertyCard__title">
        {title} in {city}
      </h2>
      <ul className="propertyCard__list">
        <li className="propertyCard__type">
          {type} in {city}
        </li>
        <li className="propertyCard__bathrooms">
          <img src={bath} alt="Bath icon" className="bath" /> {bathrooms}{" "}
          {bathrooms === 1 ? `bathroom` : `bathrooms`}
        </li>
        <li className="propertyCard__bedrooms">
          <img src={bed} alt="Bed icon" className="bed" /> {bedrooms}{" "}
          {bedrooms === 1 ? `bedroom` : `bedrooms`}
        </li>
        <li className="propertyCard__price">
          <img src={pound} alt="Pound icon" className="pound" /> £{price}
        </li>
      </ul>
      <li className="propertyCard__email">
        <a href={`mailto:${email}`} className="propertyCard__emailhref">
          <img src={emailpic} alt="Email icon" className="email" /> Click to
          email seller
        </a>
      </li>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
