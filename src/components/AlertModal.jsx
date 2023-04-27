import React from "react";
import { Button } from "@mui/material";
import { Placeholder, Modal } from "../index";
import { Bell } from "react-feather";

const AlertModal = ({
  open,
  title = "Are you sure?",
  subtitle = "Please confirm or cancel",
  handleCloseClick,
  handleConfirmClick,
}) => {
  return (
    <Modal
      open={open}
      buttons={
        <>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleConfirmClick}
          >
            Confirm
          </Button>
          <Button variant="outlined" color="primary" onClick={handleCloseClick}>
            Cancel
          </Button>
        </>
      }
      handleClose={handleCloseClick}
    >
      <Placeholder icon={Bell} title={title} description={subtitle} />
    </Modal>
  );
};

export default AlertModal;

const sx = {
  icon: {
    color: "secondary.main",
    height: 32,
    width: 32,
  },
};
