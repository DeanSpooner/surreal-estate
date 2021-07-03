import React, { useState } from "react";
import postProperty from "../requests/postProperty";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    postProperty(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      <form onSubmit={handleAddProperty} className="form">
        <p>Add Property</p>
        <div className="form-field form-field-title">
          <label htmlFor="title">
            Title:
            <input
              id="title"
              name="title"
              value={fields.title}
              placeholder="2 bed detached house"
              onChange={handleFieldChange}
              className="form-title-input"
              data-testid="form-title-input"
            />
          </label>
        </div>
        <div className="form-field form-field-type">
          <label htmlFor="type">
            Property type:
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
              className="form-type-select"
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-detached">Semi-detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of terrace">End of terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="form-field form-field-bedrooms">
          <label htmlFor="bedrooms">
            Bedrooms:
            <input
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              placeholder="3"
              autoComplete="none"
              type="number"
              max="10"
              className="form-bedrooms-input"
            />
          </label>
        </div>
        <div className="form-field form-field-bathrooms">
          <label htmlFor="bathrooms">
            Bathrooms:
            <input
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              placeholder="2"
              autoComplete="none"
              type="number"
              max="10"
              className="form-bathrooms-input"
            />
          </label>
        </div>
        <div className="form-field form-field-price">
          <label htmlFor="price">
            Price: £
            <input
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
              placeholder="125000"
              autoComplete="none"
              type="number"
              min="5000"
              max="10000000"
              step="5000"
              className="form-price-input"
            />
          </label>
        </div>
        <div className="form-field form-field-city">
          <label htmlFor="city">
            City:
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
              className="form-city-select"
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="form-field form-field-email">
          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="your.email@here.com"
              autoComplete="none"
              className="form-email-input"
            />
          </label>
        </div>
        <button type="submit" className="form-button" data-testid="form-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
