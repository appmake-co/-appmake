import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { useClickOrDrag } from "../index";

const CarouselViewItem = ({
  item,
  handleClick,
  objectFit = "contain",
  actions,
  ...props
}) => {
  const { onMouseUp, onMouseDown } = useClickOrDrag({
    onClick: handleClick,
  });

  return (
    <Box sx={sx.root}>
      <Card
        elevation={0}
        sx={{
          ...sx.card,
        }}
      >
        <CardActionArea
          disableRipple
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
        >
          <CardMedia
            component="img"
            height="140"
            image={item.primary_image}
            alt={item.primary_text}
            sx={{
              objectFit: objectFit,
            }}
          />
          <CardContent>
            <Typography variant="body1">{item.primary_text}</Typography>
            <Typography variant="body2">{item.secondary_text}</Typography>
          </CardContent>
        </CardActionArea>
        {actions && <CardActions>{actions}</CardActions>}
      </Card>
    </Box>
  );
};

export default CarouselViewItem;

const sx = {
  root: {
    p: 2,
  },
  card: {},
};
