import React from "react";
import addidas from "../../static/image/banner/addidas.jpg";
import nike from "../../static/image/banner/nike.jpg";
import puma from "../../static/image/banner/puma.jpg";
import fila from "../../static/image/banner/fila.jpg";
const LogoBanner = () => {
  return (
    <div className="container-fluid p-9 mx-[10%]">
      <div className=" flex justify-between">
        <div className="col-xs-12 col-sm-6 col-md-3 mini-card ">
          <img
            src={addidas}
            alt=""
            className="object-cover align-middle h-[60px]"
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 mini-card">
          <img
            src={nike}
            alt=""
            className="object-cover align-middle h-[60px]"
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 mini-card">
          <img
            src={puma}
            alt=""
            className="object-cover align-middle h-[60px]"
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 mini-card">
          <img
            src={fila}
            alt=""
            className="object-cover align-middle h-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
