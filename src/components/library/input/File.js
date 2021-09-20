import React from "react";
import { Controller } from "react-hook-form";
import { Button } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";


export default function FormFile(props) {
  var { control, name, isRequired } = props;
  return (
      <Controller
        name={name}
        control={control}
        rules={isRequired && { required: `Your ${name} is required` }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
            <Button
            variant="contained"
            component="label"
            >
              <PhotoCamera />
              <input
                type="file"
                accept="image/*"
                hidden
                // value={value}
                // onChange={onChange}
                isRequired={!!isRequired}
                name={name}
                control={control}
              />
            </Button>
            </div>
        )}
      />
  );
}
