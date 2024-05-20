import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../../constant/nav";
const NavBar = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { transparent } = props;
  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <nav className="flex items-center">
      {NAV_ITEMS.map((item, index) => (
        <NavLink
          to={item.url}
          key={index}
          onClick={() => handleNavItemClick(index)}
          className={`${
            activeIndex === index ? "active" : ""
          } px-4 py-5 hover:text-primary transition-colors ${
            transparent === false ? "text-black" : "text-white"
          } text-b-500 font-medium hover:opacity-50`}
        >
          {item.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
