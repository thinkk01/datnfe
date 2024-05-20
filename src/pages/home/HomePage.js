import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import "../../App.css";
import ConTentHomePage from "./ContentHomePage";
import { Carousel } from "antd";
import { IMAGE_SLIDE_SHOW } from "../../constant/slideshow";
const HomePage = (props) => {
  const { transparent } = props;
  const contentStyle = {
    height: "100%",
    objectfit: "cover",
    width: "100%",
    backgrouynd: "#36d79",
    border: "none",
    outline: "none",
    position: "relative",
  };
  return (
    <>
      <div className="w-full h-full bg-no-repeat bg-cover ">
        <Carousel autoplay autoplaySpeed={3000}>
          {IMAGE_SLIDE_SHOW.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt="..." style={{ ...contentStyle }} />
            </div>
          ))}
        </Carousel>
        <div className=" w-full top-0 absolute">
          <Header transparent={transparent} />
        </div>
        <ConTentHomePage />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
