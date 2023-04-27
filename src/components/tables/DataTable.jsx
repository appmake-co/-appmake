import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

const DataTable = ({ children, styles = {}, ...rest }) => {
  return (
    <TableContainer
      sx={{
        ...sx.table,
        ...styles,
      }}
    >
      <Table stickyHeader>{children}</Table>
    </TableContainer>
  );
};

export default DataTable;

const sx = {
  table: {
    border: "none",
    backgroundColor: "common.white",
    "&::-webkit-scrollbar": {
      display: "none",
      msOverflowStyle: "none", //IE and Edge
      scrollbarWidth: "none", // Firefox
    },
    width: {
      sm: "100%",
      xs: "auto",
    },
    height: "100%",
  },
};
