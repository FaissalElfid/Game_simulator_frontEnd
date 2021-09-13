import { Collapse, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

export default function ErrorCollapse(props) {
    const [open, setOpen] = React.useState(true);

var {error} = props
  return (
    <div>
        <Collapse in={error?.length > 0 && open}>
                <Alert
                  severity="error"
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
                  {error}
                </Alert>
              </Collapse>
    </div>
  );
}
