import { CircularProgress, Collapse, IconButton } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteChallenge } from "../../redux/actions/challenges";
import SuccessCollapse from "../library/successCollapse";

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
  const dispatch = useDispatch()
  const {challengeDeleted, loading} = useSelector(state => state.challenges)
  const classes = useStyles();
  const handleDelete = (ids) => {
    ids.forEach(element => {
      dispatch(deleteChallenge(element))
    });
    
  }
  var { itemSelected } = props;
  return (
    <div className={classes.main}>
      <SuccessCollapse success={challengeDeleted} />
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
                handleDelete(itemSelected);
              }}
            >{
              loading ? (
                <CircularProgress size={24} color="primary" />
              ) : (
              <DeleteIcon />
              )}
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
