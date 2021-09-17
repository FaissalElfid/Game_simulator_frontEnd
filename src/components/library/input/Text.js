import React from "react";
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";

export default function FormText(props) {
var {control, name, defaultValue, label, isRequired} = props
if(!label) label = name.charAt(0).toUpperCase() + name.slice(1); 
if(!defaultValue) defaultValue = ""
  return (
    <div>
        <Controller
                name={name}
                control={control}
                rules={ isRequired && { required: `Your ${name} is required` }}
                defaultValue={defaultValue}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    required={!!isRequired}
                    fullWidth
                    id={name}
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    {...props}
                  />
                )}
              />
    </div>
  );
}
