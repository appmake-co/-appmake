import React from "react";
import { Avatar } from "@mui/material";
import { User } from "react-feather";

const UserAvatar = ({ src, size = 40, variant = "circle" }) => {
  return (
    <Avatar
      variant={variant}
      color="primary"
      sx={{
        ...sx.avatar,
        backgroundColor: src ? "transparent" : "common.white",
        width: size,
        height: size,
      }}
      src={src}
    >
      <User
        style={{
          ...sx.icon,
        }}
        size={size / 2}
      />
    </Avatar>
  );
};

export default UserAvatar;

const sx = {
  avatar: {
    color: "text.secondary",
  },
  icon: {
    maxHeight: "32px",
    maxWidth: "32px",
  },
};
