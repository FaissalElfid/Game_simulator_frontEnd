import { Collapse, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
  },
  collapse: {
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default function CrudCollapse(props) {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  var { itemSelected } = props;
  return (
    <div className={classes.main}>
      <Collapse
        in={itemSelected.length > 0 && open}
      >
        <div className={classes.collapse}>
          <Alert
            severity="info"
            style={{ display: "flex", alignItems: "center" }}
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
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                console.log(itemSelected);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                console.log(itemSelected);
              }}
            >
              <EditIcon />
            </IconButton>
          </Alert>
        </div>
      </Collapse>
    </div>
  );
}
