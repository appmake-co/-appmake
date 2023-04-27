import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import { Icon } from "../index";

const AvatarIcon = ({ size = 32, ...props }) => {
  return (
    <Avatar
      variant="rounded"
      sx={{
        ...sx.avatar,
        height: size,
        width: size,
      }}
    >
      <Icon {...props} />
    </Avatar>
  );
};

AvatarIcon.propTypes = {
  size: PropTypes.number,
};

export default AvatarIcon;

const sx = {
  avatar: {
    border: (theme) => `2px solid ${theme.palette.common.white}`,
    backgroundColor: "common.gradient",
  },
};
