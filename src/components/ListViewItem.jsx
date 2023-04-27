import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";

const ListViewItem = ({
  item,
  handleClick,
  selected,
  height = 100,
  width = 100,
  ...props
}) => {
  return (
    <ListItem
      disableGutters
      sx={{
        ...sx.root,
        ...(selected && sx.selected),
      }}
    >
      <ListItemButton onClick={handleClick ? () => handleClick(item) : null}>
        {item?.primary_image && (
          <ListItemIcon>
            <Image
              style={sx.image}
              src={item?.primary_image}
              alt={item?.primary_text}
              width={height}
              height={width}
            />
          </ListItemIcon>
        )}
        {item?.primary_text && (
          <ListItemText
            primary={item?.primary_text}
            secondary={item?.secondary_text}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default ListViewItem;

const sx = {
  root: {},
  selected: {
    border: "1px solid",
    borderColor: "common.border",
  },
  image: {
    marginRight: "10px",
    objectFit: "contain",
  },
};
