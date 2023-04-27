import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  Skeleton,
} from "@mui/material";

const ImageCarouselSkeleton = ({ height=420,...props }) => {
  return (
    <Box sx={sx.root}>
      <Card
        elevation={0}
        sx={{
          ...sx.card,
          height: height
        }}
      >
        <CardActionArea disableRipple>
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={height}
            sx={sx.skeletonImage}
          />
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ImageCarouselSkeleton;

const sx = {
  root: {
    p: 2,
  },
  card: {
    width: '100%'
  },
};
