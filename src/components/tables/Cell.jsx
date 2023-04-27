import React from "react";
import { Box } from "@mui/material";
import {
  CellArray,
  CellBoolean,
  CellDate,
  CellEnum,
  CellHasMany,
  CellHasOne,
  CellHABTM,
  CellImage,
  CellJSON,
  CellLabel,
  CellLink,
  CellText,
  CellParagraph,
  CellRating,
  CellBelongsTo,
  CellVideo,
} from "../../index";

const Cell = ({ row, column, handleClick, ...props }) => {
  let totalCount = 0;

  let value = row[column.name];
  let { name, label, variant } = column || {};

  switch (variant) {
    case "video":
    case "file":
    case "image":
      value = row[name]?.url;
      break;
    case "belongs_to":
      value = row[name]?.primary_text;
      break;
    case "has_one":
      value = row[name]?.primary_text;
      break;
    case "has_many":
      totalCount = row[name]?.length || 0;
      value = `${label} (${totalCount})`;
    case "habtm":
      totalCount = row[name]?.length || 0;
      value = `${label} (${totalCount})`;
      break;
  }

  return (
    <Box sx={sx.root}>
      {variant === "array" && <CellArray value={value} />}

      {variant === "enumerable" && <CellEnum value={value} />}

      {variant === "boolean" && <CellBoolean value={value} />}

      {variant === "belongs_to" && (
        <CellBelongsTo value={value} handleClick={handleClick} />
      )}

      {variant === "date" && <CellDate value={value} />}

      {variant === "datetime" && <CellDate value={value} />}

      {variant === "has_one" && (
        <CellHasOne value={value} handleClick={handleClick} />
      )}

      {variant === "has_many" && (
        <CellHasMany value={value} handleClick={handleClick} />
      )}

      {variant === "habtm" && (
        <CellHABTM value={value} handleClick={handleClick} />
      )}

      {variant === "image" && (
        <CellImage value={value} handleClick={handleClick} />
      )}

      {variant === "json" && <CellJSON value={value} />}

      {variant === "label" && <CellLabel value={value} />}

      {variant === "link" && (
        <CellLink value={value} handleClick={handleClick} />
      )}
      {variant === "paragraph" && (
        <CellParagraph value={value} handleClick={handleClick} />
      )}

      {variant === "text" && <CellText value={value} />}

      {variant === "rating" && <CellRating value={value} />}

      {variant === "video" && (
        <CellVideo value={value} handleClick={handleClick} />
      )}
    </Box>
  );
};

export default Cell;

const sx = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  default: {
    fontFamily: "Roboto Mono",
  },
};
