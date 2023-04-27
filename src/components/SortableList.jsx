import React from "react";
import { Box, List } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const SortableList = ({ items, droppableId, renderItem, handleDrop }) => {
  const reorder = (items, startIndex, endIndex) => {
    const result = Array.from(items);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result.map((item, index) => ({
      ...item,
      position: index + 1,
    }));
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return items;
    }
    const sorted = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    handleDrop(sorted);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={droppableId}>
        {(provided) => {
          return (
            <Box sx={sx.root}>
              <List
                sx={sx.list}
                dense
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={String(item?.id)}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          ...sx.draggableItem,
                          ...(snapshot.isDragging && sx.isDragging),
                        }}
                      >
                        {renderItem({
                          ...item,
                          isDragging: snapshot.isDragging,
                        })}
                      </Box>
                    )}
                  </Draggable>
                ))}
              </List>
              {provided.placeholder}
            </Box>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default SortableList;

const sx = {
  root: {
    width: "100%",
  },
  list: {
    overflowY: "scroll",
    width: "100%",
  },
  draggableItem: {},
  isDragging: {
    marginLeft: ["0", "-320px"],
  },
};
