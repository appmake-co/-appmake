import React from "react";
import { useAlerts } from "../index";
import { Modal } from "../index";
import { Box, Button } from "@mui/material";
import { Link, Download } from "react-feather";
import copy from "copy-to-clipboard";
import Image from "next/image";

const ImageModal = ({ open, src, image, title = "", handleClose }) => {
  const { showAlertSuccess } = useAlerts();

  const handleCopyUrlClick = () => {
    copy(image?.url);
    showAlertSuccess("Asset URL copied to clipboard");
  };

  const handleDownloadClick = () => {
    window.open(image?.url, "_blank");
  };

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title={title}
      maxWidth="md"
      p={0}
      actions={
        <>
          <Button
            variant="outlined"
            startIcon={<Link />}
            onClick={handleCopyUrlClick}
          >
            Copy URL
          </Button>
          <Button
            variant="outlined"
            startIcon={<Download />}
            onClick={handleDownloadClick}
          >
            Download
          </Button>
        </>
      }
    >
      <Box sx={sx.root}>
        <Box sx={sx.imageContainer}>
          <Image
            src={image?.url}
            style={sx.image}
            height={image?.height}
            width={image?.width}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageModal;

const sx = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "500px",
    maxHeight: "500px",
    objectFit: "contain",
  },
};
