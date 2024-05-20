import React from "react";
import { IMAGE_SLIDE_SHOW } from "../../constant/slideshow";
import { Carousel } from "antd";
const SlideShow = () => {
  const contentStyle = {
    height: "492px",
    objectfit: "cover",
    width: "100%",
    backgrouynd: "#36d79",
  };
  return (
    <div className="w-full h-[500px] mt-7  ">
      <Carousel autoplay autoplaySpeed={2000}>
        {IMAGE_SLIDE_SHOW.map((item, index) => (
          <div key={index}>
            <img src={item.url} alt="..." style={{ ...contentStyle }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideShow;
