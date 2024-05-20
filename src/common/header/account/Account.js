import React, { useState } from "react";
import img from "../../../static/account/user/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png";
import { NavLink } from "react-router-dom";
const Account = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className="flex items-center cursor-pointer relative text-white "
      id="menu-button"
      aria-expanded={isMenuOpen ? "true" : "false"}
      aria-haspopup="true"
      onClick={handleToggleMenu}
    >
      <div className="flex-shrink-0 min-w-[48px] h-[48px] mr-3 ">
        <img className="h-[48px] w-auto object-cover " src={img} />
      </div>
      Account
      <svg
        className="ml-1 cursor-pointer h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
      {isMenuOpen && (
        <div
          className=" z-50 absolute top-[75px] -left-8 z-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <NavLink
              to="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Register
            </NavLink>
            <NavLink
              to="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
