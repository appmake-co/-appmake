import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { DragIndicator } from "@mui/icons-material";

const SortableListItem = ({
  item,
  isDragging,
  styles={},
  ...rest
}) => {
  return (
    <ListItem
      disableGutters
      sx={{
        ...sx.item, 
        ...(isDragging && sx.isDragging),
        ...styles
      }}
    >
      <ListItemIcon>
        <DragIndicator 
          sx={ sx.icon }
        />
      </ListItemIcon>
      <ListItemText 
        primary={item?.primary_text} 
        secondary={item?.secondary_text} 
      />
    </ListItem>
  );
};

export default SortableListItem;

const sx = {
  item: {},
  icon: {
    color: "text.secondary",
  },
  isDragging: {},
};
