import React from "react";
import Carousel from "./Carousel";
import { CAROUSEL_RESPONSIVE } from "../../lib/constants";

const ImageCarousel = ({
  children,
  arrows = true,
  showDots = false,
  responsive = CAROUSEL_RESPONSIVE,
  ...props
}) => {
  p;
  return (
    <Carousel
      responsive={responsive}
      arrows={arrows}
      showDots={showDots}
      {...props}
    >
      {children}
    </Carousel>
  );
};

export default ImageCarousel;
