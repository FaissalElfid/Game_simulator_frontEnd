import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@material-ui/core";

export default function FormSelect(props) {
  var { control, name, label, isRequired, menuitems } = props;
  console.log(menuitems)
  if (!label) label = name.charAt(0).toUpperCase() + name.slice(1);
    return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={isRequired && { required: `The ${label} is required` }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            id={name}
            labelId="demo-simple-select-helper-label"
            required={!!isRequired}
            error={!!error}
            value={value}
            onChange={onChange}
            {...props}
          >
              {menuitems.map((item, i) => {
                  return (<MenuItem value={item._id}>{item.title}</MenuItem>)
              })}
            
          </Select>
          <FormHelperText error>{error ? error.message : null}</FormHelperText>
          </FormControl>
        )}
      />
    </div>
  );
}
