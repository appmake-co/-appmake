import React,{ useEffect } from "react";
import { Box,Button } from "@mui/material";
import { useResource } from "../../index";
import { FormInput } from "../../index";

const Form = ({ id, fields, name, url, validationSchema, ...props }) => {
  const {
    loading,
    errors,
    findOne,
    resource,
    setResource,
    update,
    create,
    handleChange,
    removeAttachment,
  } = useResource({
    id,
    name,
    url,
  });

  const handleSubmit = async (e) => {
    try {
      let resp;
      if (resource?.id) {
        resp = await update(resource);
      } else {
        resp = await create(resource);
      }
      if (resp?.data.id) {
        setResource(resp?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async (name) => {
    await removeAttachment(name, resource?.id);
  };

  useEffect(() => {
    if (id) {
      findOne(id);
    }
  }, [findOne, id]);

  return (
    <Box sx={sx.root}>
      {fields.map((field, index) => (
        <FormInput
          key={index}
          variant={field.variant}
          name={field.name}
          label={field.label}
          value={resource[field.name]}
          onChange={handleChange}
          errors={errors}
          onRemove={handleRemove}
        />
      ))}
      <Button variant="contained" onClick={handleSubmit} disabled={loading}>
        {resource?.id ? "Update" : "Save"}
      </Button>
    </Box>
  );
};

export default Form;

const sx = {
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};
