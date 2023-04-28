import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";

const FieldImage = ({
  value,
  handleClick,
  height = 240,
  width = 240,
  ...props
}) => {
  return (
    <Button sx={sx.button} onClick={handleClick}>
      <Image
        src={value}
        alt={"Image"}
        width={width}
        height={height}
        style={sx.image}
      />
    </Button>
  );
};

export default FieldImage;

const sx = {
  root: {},
  image: {
    objectFit: "contain",
  },
};
