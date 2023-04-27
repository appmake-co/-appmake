import React from "react";
import { Modal, FilterForm } from "../../index";

const FilterModal = ({
  open,
  query,
  fields,
  handleClose,
  handleSearch,
  handleChange,
  onKeyPress,
  handleClearFilters,
}) => {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title="Search"
      maxWidth="md"
      sx={sx.drawer}
    >
      <FilterForm
        query={query}
        fields={fields}
        handleSearch={handleSearch}
        onKeyPress={onKeyPress}
        handleChange={handleChange}
        handleClearFilters={handleClearFilters}
      />
    </Modal>
  );
};

export default FilterModal;

const sx = {
  drawer: {
    zIndex: (theme) => theme.zIndex.modal,
  },
};
