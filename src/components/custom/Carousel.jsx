import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomCarousel = ({ sliderData, extraStyle }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      itemsToScroll: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      itemsToScroll: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      itemsToScroll: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      itemsToScroll: 1,
    },
  };
  const conditionalState = sliderData?.length === 1;
  return (
    <Carousel
      swipeable={conditionalState ? false : true}
      arrows={conditionalState ? false : true}
      draggable={conditionalState ? false : true}
      showDots={conditionalState ? false : true}
      infinite={conditionalState ? false : true}
      className={extraStyle}
      responsive={responsive}
    >
      {sliderData.map((img, i) => (
        <img className="rounded-[8px]" src={img.url} alt="" key={i} />
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
