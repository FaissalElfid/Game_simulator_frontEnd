import {
  Button,
  CircularProgress,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteChallenge } from "../../redux/actions/challenges";
import SuccessCollapse from "../library/successCollapse";
import BadgesFormModal from "./BadgeModal";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
  },
}));
export default function CrudCollapse(props) {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();
  const { challengeDeleted,challenges, loading } = useSelector(
    (state) => state.challenges
  );
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleDelete = (element) => {
    dispatch(deleteChallenge(element));
  };
  var { itemSelected } = props;
  return (
    <div className={classes.main}>
      <SuccessCollapse success={challengeDeleted} />
      <Collapse in={itemSelected.length > 1 && open}>
        <div className={classes.collapse}>
          <Alert
            severity="info"
            style={{ display: "flex", alignItems: "center" }}
            action={
              <div>
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
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    handleDelete(itemSelected);
                  }}
                >
                  {loading ? (
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
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </div>
            }
          >
            <Button variant="outlined" onClick={handleClickOpen}>
              Add A Badge to this Challenge
            </Button>
            <Dialog
              open={openModal}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Create a new new challenge"}
              </DialogTitle>
              <DialogContent>
                <BadgesFormModal itemSelected={props.itemSelected} challenges={challenges}/>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Alert>
        </div>
      </Collapse>
    </div>
  );
}
