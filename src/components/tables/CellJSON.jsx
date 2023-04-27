import React from "react";
import { CellExpand, CellText, CellTextExpanded } from "../../index"

const CellJSON = ({ value, ...props }) => {
  let formattedValue = value;
  if (typeof value === "object") {
    formattedValue = JSON.stringify(value);
  }

  return (
    <CellExpand
      cell={<CellText value={formattedValue} />}
      cellExpanded={<CellTextExpanded value={JSON.stringify(value, null, 2)} />}
    />
  );
};

export default CellJSON;

const sx = {
  root: {},
};
