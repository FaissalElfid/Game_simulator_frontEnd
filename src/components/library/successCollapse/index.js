import { Collapse, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

export default function SuccessCollapse(props) {
    const [open, setOpen] = React.useState(true);

var {success} = props
  return (
    <div>
        <Collapse in={success?.length > 0 && open}>
                <Alert
                  severity="success"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  {success}
                </Alert>
              </Collapse>
    </div>
  );
}
