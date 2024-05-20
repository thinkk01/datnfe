import React from "react";
import NavBar from "./navbar/NavBar";
import logoDark from "../../static/logo/logo-dark-removebg-preview.png";
import logoLight from "../../static/logo/logo-light-removebg-preview.png";
import "../../static/css/style.css";
import Search from "./search/Search";
import Account from "./account/Account";
const Header = (props) => {
  const { transparent } = props;
  return (
    <header
      className={`${
        transparent === false
          ? "shadow-2xl bg-gradient-to-r from-neutral-300 to-stone-400"
          : ""
      } w-full p-0 h-24 transition-all duration-1000 font-medium  z-10  `}
    >
      <div className="flex items-center justify-between h-full w-full pl-[12px] pr-[56px] pt-[24px] pb-[24px]  ">
        <div className=" flex-shrink-0 min-w-[86px] h-[86px]">
          <img
            className="h-[86px] w-auto object-cover "
            src={transparent === false ? logoLight : logoDark}
            alt="The seem has an error!"
          />
        </div>
        <Search />
        <NavBar transparent={transparent} />
        <Account />
      </div>
    </header>
  );
};

export default Header;
