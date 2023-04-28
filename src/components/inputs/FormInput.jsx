import React from "react";
import {
  ArrayInput,
  CheckboxInput,
  DateInput,
  FileInput,
  ImageInput,
  JSONInput,
  RatingInput,
  SelectInput,
  SwitchInput,
  TextInput,
} from "../../index";

const FormInput = ({ variant, ...props }) => {
  return (
    <>
      {variant === "array" && <ArrayInput {...props} />}
      {variant === "text" && <TextInput {...props} />}
      {variant === "link" && <TextInput {...props} />}
      {variant === "html" && <TextInput multiline rows={6} {...props} />}
      {variant === "paragraph" && <TextInput multiline rows={6} {...props} />}
      {variant === "password" && <TextInput type="password" {...props} />}
      {variant === "email" && <TextInput {...props} />}
      {variant === "number" && <TextInput {...props} />}
      {variant === "date" && <DateInput {...props} />}
      {variant === "checkbox" && <CheckboxInput {...props} />}
      {variant === "boolean" && <SwitchInput {...props} />}
      {variant === "enumerable" && <SelectInput {...props} />}
      {variant === "rating" && <RatingInput {...props} />}
      {variant === "file" && <FileInput {...props} />}
      {variant === "image" && <ImageInput {...props} />}
      {variant === "video" && <FileInput {...props} />}
      {variant === "json" && <JSONInput {...props} />}
    </>
  );
};

export default FormInput;
