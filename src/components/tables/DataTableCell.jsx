import React from "react";
import TableCell from "@mui/material/TableCell";

const DataTableCell = ({
  children,
  header = false,
  stickyHeader = false,
  stickyCell = false,
  ...rest
}) => {
  return (
    <TableCell
      align={header ? "center" : "left"}
      sx={{
        ...sx.root,
        ...(header && sx.header),
        ...(stickyHeader && sx.stickyHeader),
        ...(stickyCell && sx.stickyCell),
      }}
    >
      {children}
    </TableCell>
  );
};

export default DataTableCell;

const sx = {
  root: {
    px: 1,
  },
  header: {
    zIndex: (theme) => theme.zIndex.modal - 3,
    p: 0,
    whiteSpace: "nowrap",
  },
  stickyHeader: {
    px: 1,
    position: "sticky",
    left: 0,
    zIndex: (theme) => theme.zIndex.modal - 1,
    boxShadow: "none",
  },
  stickyCell: {
    zIndex: (theme) => theme.zIndex.modal - 2,
    position: "sticky",
    left: 0,
    width: 40,
    borderRight: (theme) => `1px solid ${theme.palette.common.border}`,
    backgroundColor: "common.white",
  },
};
