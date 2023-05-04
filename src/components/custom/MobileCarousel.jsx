import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MobileCarousel = ({ sliderData, extraStyle, border }) => {
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
      {sliderData?.map((img, i) => (
        <div key={i} className="mobile_carousel">
          <img src={img.url} alt="" style={{ border: `2px solid ${border}` }} />
        </div>
      ))}
    </Carousel>
  );
};

export default MobileCarousel;
