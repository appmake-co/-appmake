import React,{ useContext } from "react";
import {
  IconButton,
  Typography,
  Slide,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import { AppContext } from "../index";
import { Close } from "@mui/icons-material";

const TransitionDown = (props) => <Slide {...props} direction="down" />;

const Alert = ({ ...props }) => {
  const { alert, setAlert } = useContext(AppContext);

  const handleClose = () => setAlert();

  return (
    <Snackbar
      open={Boolean(alert)}
      onClose={handleClose}
      TransitionComponent={TransitionDown}
      autoHideDuration={2500}
      sx={sx.snackbar}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <SnackbarContent
        sx={sx.alert}
        message={<Typography variant="subtitle2">{alert}</Typography>}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default Alert;

const sx = {
  alert: {
    backgroundColor: "primary.main",
    color: "common.white",
  },
  snackbar: {
    width: "100%",
  },
};
