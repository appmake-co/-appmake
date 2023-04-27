import React from "react";
import TableRow from "@mui/material/TableRow";

const DataTableRow = ({
  children,
  hover = false,
  selected = false,
  handleClick,
  ...props
}) => {
  return (
    <TableRow
      hover={hover}
      sx={sx.root}
      selected={selected}
      onClick={handleClick && handleClick}
      {...props}
    >
      {children}
    </TableRow>
  );
};

export default DataTableRow;

const sx = {
  root: {
    "&.MuiTableRow-hover:hover": {
      backgroundColor: (theme) => theme.palette.common.highlight,
    },
    borderBottom: (theme) => `1px solid ${theme.palette.common.border}`,
  },
};
