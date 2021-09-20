import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link, withRouter  } from "react-router-dom";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "#fff",
    justifyContent:"center",
  },
  chipNav:{
      margin: 16,
      padding: 16,
      backgroundColor: "#383E45",
      "&:hover": {
        backgroundColor: "#5B5B5D",
      },
      "&:focus": {
        backgroundColor: "#2F5EF9",
      }
  },
  chipActive:{
    backgroundColor: "#2F5EF9",
},
}));

function SportsNav(props) {
  const classes = useStyles();
const sports = props.sports.map((sport) =>
<Chip label={sport} color="primary" component={Link} to={"/"+sport}  clickable className={clsx({[classes.chipActive]: sport === props.match.params.sport}, classes.chipNav)}/>
);
  return (
    <div className={classes.root}>
        {sports}
    </div>
  );
}
export default withRouter(SportsNav)
