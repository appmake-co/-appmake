import React from "react";
import { FilterInput, TextInput, Autosuggest, ArrayInput } from "../../index";
import { Box, IconButton } from "@mui/material";
import {
  FILTER_OPERATORS,
  FILTERABLE_TYPES,
  BOOLEAN_OPTIONS,
  BOOLEAN_FIELDS,
  DATE_FIELDS,
  STRING_FIELDS,
  NUMBER_FIELDS,
  DATE_RANGE_OPTIONS,
} from "../../lib/constants";
import { Clear } from "@mui/icons-material";

const FiltTypeInput = ({
  query = {},
  index = 0,
  filter,
  fields,
  handleChange,
  handleSearch,
  handleFilterChange,
  handleRemoveFilter,
  handleClearFilters,
  ...props
}) => {
  let filterOperators = FILTER_OPERATORS["integer"];
  let field;
  if (filter.field) {
    field = fields.find((f) => f.name == filter.field);
    filterOperators = FILTER_OPERATORS[field?.type || "integer"];
  }
  return (
    <FilterInput label={index > 0 ? "AND" : "WHERE"}>
      <Box sx={sx.inputFilter}>
        <Autosuggest
          name={"field"}
          options={fields
            .filter((field) => FILTERABLE_TYPES.includes(field?.variant))
            .map((field) => ({
              label: field.name,
              value: field.name,
            }))}
          placeholder="field"
          value={filter?.field || ""}
          onChange={(ev) => handleFilterChange(ev, index)}
        />
      </Box>
      <Box sx={sx.inputOperator}>
        <Autosuggest
          sx={sx.operator}
          name={"operator"}
          placeholder="…"
          options={filterOperators}
          value={filter?.operator || ""}
          onChange={(ev) => handleFilterChange(ev, index)}
        />
      </Box>
      <Box sx={sx.inputValue}>
        {BOOLEAN_FIELDS.includes(field?.type) && (
          <Autosuggest
            name={"value"}
            placeholder="true or false"
            options={BOOLEAN_OPTIONS}
            value={filter?.value || ""}
            onChange={(ev) => handleFilterChange(ev, index)}
          />
        )}

        {DATE_FIELDS.includes(field?.type) && (
          <>
            {["gte", "lte"].includes(filter?.operator) ? (
              <Autosuggest
                name={"value"}
                placeholder="date since"
                options={DATE_RANGE_OPTIONS}
                value={filter?.value || ""}
                onChange={(ev) => handleFilterChange(ev, index)}
              />
            ) : (
              <TextInput
                size="small"
                type={"date"}
                name={"value"}
                placeholder="value"
                value={filter?.value || ""}
                onChange={(ev) => handleFilterChange(ev, index)}
              />
            )}
          </>
        )}

        {NUMBER_FIELDS.includes(field?.type) && (
          <>
            {["in", "nin"].includes(filter?.operator) ? (
              <ArrayInput
                name={"value"}
                placeholder="values"
                value={filter.value}
                onChange={(ev) => handleFilterChange(ev, index)}
              />
            ) : (
              <TextInput
                size="small"
                type="number"
                name={"value"}
                placeholder="value"
                value={filter?.value || ""}
                onChange={(ev) => handleFilterChange(ev, index)}
              />
            )}
          </>
        )}

        {(!field?.type || STRING_FIELDS.includes(field?.type)) && (
          <TextInput
            size="small"
            name={"value"}
            placeholder="value"
            value={filter?.value || ""}
            onChange={(ev) => handleFilterChange(ev, index)}
          />
        )}
      </Box>
      <Box sx={sx.inputIcon}>
        <IconButton
          size="small"
          onClick={() => handleRemoveFilter(index)}
          sx={sx.iconButton}
        >
          <Clear sx={sx.icon} />
        </IconButton>
      </Box>
    </FilterInput>
  );
};

export default FiltTypeInput;

const sx = {
  inputFilter: {
    flexScale: 3,
    minWidth: "200px",
    mr: 1,
  },
  inputOperator: {
    flexScale: 1,
    minWidth: "150px",
    mr: 1,
  },
  inputValue: {
    flexScale: 1,
    width: "100%",
  },
  addFilterButton: {
    maxWidth: "160px",
    width: { sm: "100%" },
  },
  icon: {
    height: "20px",
    width: "20px",
    color: "icon",
  },
};
