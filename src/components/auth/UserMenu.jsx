import React from "react";
import { Badge, Box, Menu, MenuItem } from "@mui/material";

const UserMenu = ({
  open,
  anchorEl,
  toggleMenu,
  handleClick,
  handleLogoutClick,
  ...props
}) => {
  return (
    <Menu open={open} onClose={toggleMenu} anchorEl={anchorEl}>
      <MenuItem onClick={handleClick}>My Account</MenuItem>
      <MenuItem onClick={handleLogoutClick}>
        <Badge
          color="success"
          variant="dot"
          classes={{
            dot: sx.badgeOnline,
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box mx={1} />
        </Badge>
        Sign Out
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;

const sx = {
  badgeOnline: {
    height: 10,
    width: 10,
  },
};
