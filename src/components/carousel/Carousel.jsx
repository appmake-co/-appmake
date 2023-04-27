import React from "react";
import Carousel from "react-multi-carousel";
import { Box } from "@mui/material";
import { useResponsive } from "../../index";
import { CAROUSEL_RESPONSIVE } from "../../lib/constants";
import CarouselDot from "./CarouselDot";

const ReactCarousel = ({
  children,
  arrows = false,
  responsive = CAROUSEL_RESPONSIVE,
  ...props
}) => {
  const { isMobile } = useResponsive();

  return (
    <Box sx={sx.carousel}>
      {children?.length > 0 ? (
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          infinite
          autoPlay
          arrows={arrows}
          showDots
          customDot={<CarouselDot />}
        >
          {children}
        </Carousel>
      ) : null}
    </Box>
  );
};

export default ReactCarousel;

const sx = {
  carousel: {
    py: 5,
    px: {
      xs: 0,
      sm: 2,
    },
  },
};
