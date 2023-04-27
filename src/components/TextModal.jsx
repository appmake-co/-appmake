import React from "react";
import { Modal } from "../index";
import { Typography } from "@mui/material";

const TextModal = ({ open, text, title = "Preview", handleClose }) => {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title={title}
      maxWidth="md"
      p={2}
    >
      <Typography my={2} variant="body2" sx={sx.text}>
        {text}
      </Typography>
    </Modal>
  );
};

export default TextModal;

const sx = {
  text: {
    whiteSpace: "pre-wrap",
  },
};
