import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "0px",
    display: "flex",
    fontSize: 30,
    backgroundColor: '#25272B',
    alignItems: "center",
    width: "20%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: '#FFF',

  },
  iconButton: {
    padding: 10,
    color: '#FFF',
  },
  iconEmail: {
    color: '#80827E',
    marginLeft: 5,
  },
  divider: {
    height: 35,
    color: '#FFF',

  },
  placeholder: {
    color: "#aaa",
  },
}));
export default function SearchUserButton() {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.main}>
      <Divider className={classes.divider} orientation="vertical" />
      <MailOutlineIcon  className={classes.iconEmail} />
      <InputBase className={classes.input} placeholder="User Email" />
      <Divider className={classes.divider} orientation="vertical" />

      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="User Email"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
