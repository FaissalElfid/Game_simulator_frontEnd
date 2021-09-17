import React from "react";
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";

export default function FormPassword(props) {
var {control, name, defaultValue, label} = props
// var labelFromName = name.charAt(0).toUpperCase() + name.slice(1);
if(!label) label = name.charAt(0).toUpperCase() + name.slice(1); 
  return (
    <div>
        <Controller
                name={name}
                control={control}
                rules={{ required: `Your ${label} is required` }}
                defaultValue={defaultValue ? defaultValue : ""}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id={name}
                    label={label}
                    type="password"
                    name={name}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
    </div>
  );
}
