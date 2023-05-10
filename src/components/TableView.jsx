import React, { useState, useEffect } from "react";
import { useResource, useSelected } from "../index";
import { Checkbox, Box, TableBody, TableHead, TableRow } from "@mui/material";
import {
  CellHeader,
  DataTable,
  DataTableCell,
  DataTableToolbar,
  TableViewRow,
  TableViewSkeleton,
  Pagination,
  FilterModal,
} from "../index";

const DEFAULT_QUERY = {
  page: 1,
  per_page: 10,
};

const TableView = ({
  url,
  defaultQuery = DEFAULT_QUERY,
  fields,
  selectable = false,
  editable = false,
  searchable = true,
  filterable = false,
  handleClick,
  handleEditClick,
  numSkeletons = 10,
  actions,
  ...props
}) => {
  let skeletons = new Array(numSkeletons).fill(0);

  const [showFilters, setShowFilters] = useState(false);
  const [activeColumn, setActiveColumn] = useState();

  const { selected, selectedIds, setSelected, setSelectedIds, handleSelect } =
    useSelected();

  const {
    loading,
    findMany,
    resources,
    paginate,
    query,
    setQuery,
    page,
    numPages,
    totalCount,
    sortDirection,
  } = useResource({
    url,
    defaultQuery,
  });

  const handleQueryChange = (ev) => {
    const { value, name } = ev.target;
    setQuery({
      ...query,
      [name]: value,
    });
  };

  const handleClearFilters = () => {
    setShowFilters(false);
    findMany({
      ...query,
      filters: [],
      keywords: "",
    });
  };

  const handleSelectAll = () => {
    if (selected?.length === resources?.length) {
      setSelected([]);
      setSelectedIds([]);
    } else {
      setSelected(resources);
      setSelectedIds(resources.map((r) => r.id));
    }
  };

  const handleSortClick = (column) => {
    let newSortDirection = sortDirection;
    if (column.name === activeColumn.name) {
      newSortDirection = sortDirection == "asc" ? "desc" : "asc";
    } else {
      newSortDirection = "asc";
    }
    findMany({
      ...query,
      sort_by: column.name,
      sort_direction: newSortDirection,
    });
    setActiveColumn(column);
  };

  const handleSearch = (keywords) => {
    findMany({
      ...query,
      keywords: keywords,
      page: 1,
    });
  };

  const handlePaginate = async (ev, page) => {
    await paginate(page);
  };

  useEffect(() => {
    if (defaultQuery) {
      findMany(defaultQuery);
    }
  }, [defaultQuery]);

  return (
    <Box sx={sx.root}>
      <DataTableToolbar
        loading={loading}
        query={query}
        searchable={searchable}
        filterable={filterable}
        selected={selected}
        actions={actions}
        handleSearch={handleSearch}
        handleFilter={() => setShowFilters(true)}
        handleClearFilters={handleClearFilters}
      />
      <DataTable>
        <TableHead>
          <TableRow>
            {selectable && (
              <DataTableCell header stickyHeader>
                <Checkbox
                  checked={
                    selected?.length === resources?.length &&
                    selected?.length > 0
                      ? true
                      : false
                  }
                  onChange={handleSelectAll}
                  value="true"
                />
              </DataTableCell>
            )}
            {editable && <DataTableCell />}
            {fields.map((field, index) => (
              <DataTableCell header key={index}>
                <CellHeader
                  label={field.label}
                  value={field.name}
                  sortable={field.sortable}
                  sortDirection={"asc"}
                  handleSort={handleSortClick}
                />
              </DataTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {resources?.length > 0 &&
            resources.map((row, index) => (
              <TableViewRow
                key={index}
                selectedIds={selectedIds}
                row={row}
                fields={fields}
                selectable={selectable}
                editable={editable}
                handleClick={handleClick}
                handleEditClick={handleEditClick}
                handleSelect={handleSelect}
              />
            ))}
        </TableBody>
      </DataTable>
      {loading && (
        <TableViewSkeleton
          numRows={numSkeletons}
          numColumns={fields.length + 2}
        />
      )}
      <Pagination
        page={page}
        numPages={numPages}
        totalCount={totalCount}
        loading={loading}
        handlePaginate={handlePaginate}
      />
      <FilterModal
        loading={loading}
        open={showFilters}
        query={query}
        handleClose={() => setShowFilters(false)}
        fields={fields}
        handleSearch={handleSearch}
        handleChange={handleQueryChange}
        handleClearFilters={handleClearFilters}
      />
    </Box>
  );
};

export default TableView;

const sx = {
  root: {
    borderRadius: 4,
    border: "1px solid",
    borderColor: "divider",
    width: {
      xs: "100vw",
      sm: "100%",
    },
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  sortIcon: {
    height: 20,
    width: 20,
    color: "text.secondary",
  },
  icon: {
    color: "text.secondary",
  },
  editIconButton: {
    mx: 2,
  },
  editIcon: {
    height: "20px",
    width: "20px",
  },
  sortButtonGroup: {
    backgroundColor: "white",
    border: "none",
    borderColor: "transparent",
  },
  sortIconButton: {
    backgroundColor: "white",
    borderRight: "0px solid white !important",
  },
  sortButton: {
    borderRight: "0px solid white !important",
  },
};
