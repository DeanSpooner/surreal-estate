import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import magnifier from "../images/magnifier.png";
import "../styles/SideBar.css";

const Sidebar = () => {
  const [query, setQuery] = useState("");

  const history = useHistory();

  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sideBar">
      <form onSubmit={handleSearch} className="sideBar__form">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="sideBar__input"
        />
        <button type="submit" className="sideBar__button">
          <img
            src={magnifier}
            alt="Search icon"
            className="sideBar__magnifier"
          />
        </button>
      </form>
      <Link
        to={buildQueryString("query", { city: "Manchester" })}
        className="sideBar__item sideBar__Manchester"
      >
        Manchester
      </Link>
      <Link
        to={buildQueryString("query", { city: "Liverpool" })}
        className="sideBar__item sideBar__Liverpool"
      >
        Liverpool
      </Link>
      <Link
        to={buildQueryString("query", { city: "Leeds" })}
        className="sideBar__item sideBar__Leeds"
      >
        Leeds
      </Link>
      <Link
        to={buildQueryString("query", { city: "Sheffield" })}
        className="sideBar__item sideBar__Sheffield"
      >
        Sheffield
      </Link>
      <Link
        to={buildQueryString("sort", { price: 1 })}
        className="sideBar__item sideBar__ascending"
      >
        Sort: ascending price
      </Link>
      <Link
        to={buildQueryString("sort", { price: -1 })}
        className="sideBar__item sideBar__descending"
      >
        Sort: descending price
      </Link>
    </div>
  );
};

export default Sidebar;
