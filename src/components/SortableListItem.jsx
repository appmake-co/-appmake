import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

import { DragIndicator } from "@mui/icons-material";

const SortableListItem = ({
  item,
  isDragging,
  className,
  dragIconClassName,
}) => {
  return (
    <ListItem
      disableGutters
      className={clsx(classes.item, className, {
        [classes.isDragging]: isDragging,
      })}
    >
      <ListItemIcon>
        <DragIndicator className={clsx(classes.icon, dragIconClassName)} />
      </ListItemIcon>
      <ListItemText primary={item?.primary} seconeary={item?.secondary} />
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
