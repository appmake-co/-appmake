import React, { useContext } from "react";
import { AppContext } from "../index";
import { LinearProgress } from "@mui/material";

const Loader = (props) => {
  const { loading } = useContext(AppContext);
  return loading ? (
    <LinearProgress color="primary" sx={sx.linearProgress} />
  ) : null;
};
export default Loader;

const sx = {
  root: {
    position: "relative",
  },
  linearProgress: {
    position: "fixed",
    backgroundColor: "transparent",
    top: 0,
    height: 3,
    width: "100vw",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  },
};
