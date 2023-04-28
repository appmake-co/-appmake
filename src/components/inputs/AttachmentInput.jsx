import React, { useState } from "react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import Image from "next/image";
import DropZone from "./DropZone";
import { File } from "react-feather";

const IMAGE_WIDTH = 140;

const RenderAttachment = ({
  src,
  size,
  onDelete,
  variant,
  alt = "",
  ...props
}) => {
  return (
    <Box>
      {variant == "image" && (
        <Image
          alt={alt}
          style={sx.image}
          height={size}
          width={size}
          src={src}
        />
      )}
      {variant == "file" && (
        <Avatar variant="rounded" sx={sx.avatar}>
          <File size={24} />
        </Avatar>
      )}
      <IconButton
        sx={{
          ...sx.iconButton,
          ...(variant === "file" && sx.iconButtonFile),
        }}
        size="small"
        onClick={onDelete}
      >
        <DeleteOutlined />
      </IconButton>
    </Box>
  );
};

const AttachmentInput = ({
  name,
  label,
  onChange,
  value: attachment,
  onRemove: handleRemove,
  variant = "file",
  size = IMAGE_WIDTH,
  ...props
}) => {
  const [src, setSrc] = useState();

  const onDrop = async (file, preview) => {
    setSrc(preview.src);
    onChange({
      target: {
        name: name,
        value: file,
      },
    });
  };

  const onRemove = async () => {
    if (!attachment?.url) {
      onChange({
        target: {
          name: name,
          value: null,
        },
      });
    }
    setSrc(null);
  };

  const handleDelete = async (name) => {
    setSrc(null);
    handleRemove(name);
  };

  return (
    <Box sx={sx.root}>
      <Typography variant="overline" color="textSecondary">
        {label}
      </Typography>
      {!attachment?.url && src && (
        <RenderAttachment
          label="Src"
          src={src}
          size={size}
          variant={variant}
          onDelete={onRemove}
        />
      )}
      {attachment?.url && (
        <RenderAttachment
          label="Attachment"
          variant={variant}
          src={attachment.url}
          size={size}
          onDelete={() => handleDelete(name)}
        />
      )}
      <DropZone onDrop={onDrop} label={"Upload attachment"} />
    </Box>
  );
};

export default AttachmentInput;

const sx = {
  root: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    height: 64,
    width: 64,
    backgroundColor: "primary.main",
  },
  image: {
    p: 2,
    mr: 1,
    borderRadius: "4px",
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
  iconButtonFile: {
    left: 26,
    top: -10,
  },
};
