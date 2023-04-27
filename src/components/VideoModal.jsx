import React from "react";
import { useAlerts } from "../index";
import { Modal } from "../index";
import { Box, Button } from "@mui/material";
import { Link, Download } from "react-feather";
import copy from "copy-to-clipboard";

const VideoModal = ({ open, src, title = "", handleClose }) => {
  const { showAlertSuccess } = useAlerts();

  const handleCopyUrlClick = () => {
    copy(src);
    showAlertSuccess("Asset URL copied to clipboard");
  };

  const handleDownloadClick = () => {
    window.open(src, "_blank");
  };

  if (!title?.length > 0) {
    title = src?.split("/").pop();
  }

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      maxWidth="md"
      p={0}
      title={title}
      actions={
        <>
          <Button
            variant="outlined"
            sx={sx.button}
            startIcon={<Link />}
            onClick={handleCopyUrlClick}
          >
            Copy URL
          </Button>
          <Button
            variant="outlined"
            sx={sx.button}
            startIcon={<Download />}
            onClick={handleDownloadClick}
          >
            Download
          </Button>
        </>
      }
    >
      <Box sx={sx.root}>
        <video src={src} controls muted autoPlay sx={sx.video} />
      </Box>
    </Modal>
  );
};

export default VideoModal;

const sx = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111111",
  },
  video: {
    width: "100%",
    height: "auto",
    maxHeight: "calc(100vh - 150px)",
  },
  button: {
    color: "text.secondary",
  },
};
