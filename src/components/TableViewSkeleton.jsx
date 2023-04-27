import React from "react";
import { Skeleton } from "@mui/material";
import { DataTable } from "../index";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TableViewSkeleton = ({ numRows = 10, numColumns = 6, ...props }) => {
  let rows = new Array(numRows).fill(0);
  let cells = new Array(numColumns).fill(0);

  return (
    <DataTable>
      <TableHead>
        <TableRow sx={sx.row}>
          {cells.map((cell, i) => (
            <TableCell header key={i}>
              <Skeleton
                height={14}
                sx={sx.skeleton}
                variant="rectangular"
                animation="wave"
              />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i} sx={sx.row}>
            {cells.map((cell, j) => (
              <TableCell sx={sx.tableCell} key={j}>
                <Skeleton
                  height={14}
                  sx={sx.skeleton}
                  variant="rectangular"
                  animation="wave"
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  );
};

export default TableViewSkeleton;

const sx = {
  root: {
    width: "100%",
    height: {
      xs: "calc(100vh - 200px)",
      sm: "calc(100vh - 160px)",
    },
  },
  tableCell: {
    p: 1,
  },
  skeleton: {
    m: 0.5,
    opacity: 0.1,
    borderRadius: (theme) => theme.shape.borderRadius,
    backgroundColor: "text.secondary",
  },
};
