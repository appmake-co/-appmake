import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import { Close } from "@mui/icons-material";

const Modal = ({
  open,
  handleClose,
  title,
  subtitle,
  actions: buttons,
  children,
  maxWidth = "sm",
}) => {
  return (
    <Dialog
      sx={sx.dialog}
      fullWidth
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle sx={sx.title} onClose={handleClose}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="row">
            <Typography variant="subtitle1">{title}</Typography>
          </Box>
          <Box>
            <IconButton size="small" onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        {subtitle && <Typography variant="body1">{subtitle}</Typography>}
        {children}
      </DialogContent>
      {buttons && <DialogActions>{buttons}</DialogActions>}
    </Dialog>
  );
};

export default Modal;

const sx = {
  title: {
    marginBottom: "10px",
    height: 64,
    fontSize: "18px",
    backgroundColor: "background.primary",
  },
  dialog: {
    zIndex: (theme) => theme.zIndex.modal,
  },
};
