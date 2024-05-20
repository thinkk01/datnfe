import React from "react";
import ListProduct from "../../components/product-item/ListProduct";
import LogoBanner from "../../components/banner/Banner";

const ConTentHomePage = () => {
  return (
    <div className="content">
      <LogoBanner />
      <ListProduct />
    </div>
  );
};

export default ConTentHomePage;
