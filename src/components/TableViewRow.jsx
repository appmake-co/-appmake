import React from "react";
import { Checkbox, IconButton, TableCell } from "@mui/material";
import { Cell, DataTableRow, DataTableCell } from "../index";
import { EditOutlined } from "@mui/icons-material";

const TableViewRow = ({
  row,
  fields,
  editable = false,
  selectable = false,
  handleClick,
  handleEditClick,
  selectedIds,
  handleSelect,
  ...props
}) => {
  const selected = selectedIds?.includes(row?.id) ? true : false;

  return (
    <DataTableRow
      hover
      selected={selected}
      onClick={handleClick ? () => handleClick(row) : null}
    >
      {selectable && (
        <TableCell align={"center"} sticky>
          <Checkbox
            checked={selected}
            onChange={() => handleSelect(row)}
            value="true"
          />
        </TableCell>
      )}
      {editable && (
        <TableCell align="center">
          <IconButton
            onClick={handleEditClick ? () => handleEditClick(row) : null}
            sx={sx.editIconButton}
            size="small"
          >
            <EditOutlined sx={sx.editIcon} color="textPrimary" />
          </IconButton>
        </TableCell>
      )}
      {fields.map((column, index) => (
        <DataTableCell
          key={index}
          variant={column?.variant || "text"}
          value={row[column.name]}
          handleClick={handleClick ? () => handleClick(row, column) : null}
        >
          <Cell row={row} column={column} />
        </DataTableCell>
      ))}
    </DataTableRow>
  );
};

export default TableViewRow;

const sx = {
  editIcon: {
    height: "20px",
    width: "20px",
  },
};
