import React from "react";
import { Box, IconButton, Menu } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { useMenu } from "../index";

const MenuIconButton = ({ children, size = "small", ...props }) => {
  const { open, anchorEl, closeMenu, toggleMenu } = useMenu();

  // Ensure menu closes after click
  const handleDefaultClick = (e) => {
    if (open) closeMenu();
  };

  return (
    <Box onClick={handleDefaultClick}>
      <IconButton size={size} onClick={toggleMenu}>
        <MoreHoriz />
      </IconButton>
      <Menu open={open} anchorEl={anchorEl} onClose={closeMenu}>
        {children}
      </Menu>
    </Box>
  );
};

export default MenuIconButton;
