import React, { useState, useEffect } from "react";
import {
  Box,
  Hidden,
  CircularProgress,
  Typography,
  Pagination as MuiPagination,
} from "@mui/material";

const Pagination = ({
  loading,
  totalCount = 0,
  startIndex = 1,
  endIndex = 1,
  page = 1,
  numPages,
  handlePaginate,
}) => {
  const [pageNumber, setPageNumber] = useState(page);

  const handleChangePage = (event, nextPage) => {
    setPageNumber(nextPage);
  };

  useEffect(() => {
    if (pageNumber) {
      //hack to prevent waiting for page to load bug
      setTimeout(() => handlePaginate({}, pageNumber), 10);
    }
  }, [pageNumber]);

  return (
    <Box sx={sx.pagination}>
      <Hidden smDown>
        <Box mx={2}>
          {loading ? (
            <CircularProgress size={24} />
          ) : (
            <Typography variant="body2" color="textSecondary">
              Results {startIndex} - {endIndex} of {totalCount}
            </Typography>
          )}
        </Box>
      </Hidden>
      <MuiPagination
        size="small"
        count={numPages}
        page={pageNumber}
        defaultPage={1}
        onChange={handleChangePage}
        color="primary"
        shape="rounded"
      />
    </Box>
  );
};

export default Pagination;

const sx = {
  pagination: {
    pt: 1,
    pb: 1,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    color: "text.secondary",
  },
};
