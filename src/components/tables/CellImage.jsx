import React from "react";
import { Button } from "@mui/material";
import { EmptyImage } from "../../index";
import Image from "next/image";

const CellImage = ({ value, handleClick, size = 64, ...props }) => {
  if (!value) return <EmptyImage />;
  return (
    <Button sx={sx.button} onClick={handleClick}>
      <Image src={value} style={sx.image} width={size} height={size} />
    </Button>
  );
};

export default CellImage;

const sx = {
  root: {},
  button: {
    cursor: "zoom-in",
    p: 0,
  },
  image: {
    objectFit: "contain",
  },
};
