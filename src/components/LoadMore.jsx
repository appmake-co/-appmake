import React from "react";
import { Box, Button } from "@mui/material";
import { Waypoint } from "react-waypoint";
import { ExpandMore } from "@mui/icons-material";

const LoadMore = ({
  loading,
  enableInfiniteLoad = true,
  enableLoadMore = false,
  page = 1,
  perPage = 20,
  numPages = 1,
  loadMore,
  ...props
}) => {
  return (
    <Box sx={sx.root}>
      {page < numPages && (
        <React.Fragment>
          {enableInfiniteLoad && <Waypoint onEnter={loadMore} />}
          {enableLoadMore && (
            <Box sx={sx.loadMore}>
              <Button onClick={loadMore} endIcon={<ExpandMore />}>
                Load More
              </Button>
            </Box>
          )}
        </React.Fragment>
      )}
    </Box>
  );
};

export default LoadMore;

const sx = {
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
