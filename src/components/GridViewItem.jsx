import React from 'react'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

const GridViewItem = ({
  item,
  handleClick,
  selected,
  objectFit = "contain",
  xs = 12,
  sm = 6,
  md = 4,
  lg = 3,
  xl = 2,
  actions,
  ...props
}) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Card
        elevation={0}
        sx={{
          ...sx.root,
          ...(selected && sx.selected),
        }}
      >
        <CardActionArea onClick={handleClick ? () => handleClick(item) : null}>
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
    </Grid>
  );
};

export default GridViewItem;

const sx = {
  root: {},
};
