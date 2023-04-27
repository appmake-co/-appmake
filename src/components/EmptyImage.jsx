import React from "react";
import { Image as ImageIcon } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const EmptyImage = (props) => {
  return (
    <Avatar sx={sx.avatar} variant="rounded">
      <ImageIcon />
    </Avatar>
  );
};

export default EmptyImage;

const sx = {
  avatar: {
    height: "64px",
    width: "64px",
    border: (theme) => `2px solid ${theme.palette.common.white}`,
    backgroundColor: "background.light",
  },
  icon: {
    color: "icon",
  },
};
