import React from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import { UploadCloud, DownloadCloud } from "react-feather";

const DropZone = ({
  onDrop,
  label = "Upload file",
  dropLabel = "Drop file here",
  ...props
}) => {
  const handleOnDrop = (files) => {
    const reader = new FileReader();
    const file = files[0];
    reader.onload = (e) => {
      let preview = {
        src: e.target.result,
        name: file.name,
        size: file.size,
        type: file.type,
      };
      onDrop(file, preview);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleOnDrop,
  });

  return (
    <Box sx={sx.dropZone} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <DownloadCloud size={36} sx={sx.icon} />
      ) : (
        <UploadCloud size={36} sx={sx.icon} />
      )}
      <Typography variant="body2" color="textSecondary">
        {isDragActive ? dropLabel : label}
      </Typography>
    </Box>
  );
};

export default DropZone;

const sx = {
  dropZone: {
    m: 0,
    height: 140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
    backgroundColor: "white",
    textAlign: "center",
    border: "1px solid",
    borderColor: "common.inputBorder",
    marginBottom: 2,
  },
  icon: {
    color: "icon",
  },
  iconButton: {
    fontSize: 11,
    top: 0,
    left: -48,
    color: "text.secondary",
    "&& ": {
      backgroundColor: "common.white",
    },
  },
};
