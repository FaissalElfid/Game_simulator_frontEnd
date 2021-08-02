import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

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
      "&:active": {
        backgroundColor: "#215EFF",
      }
  },
  '&:hover': {
    backgroundColor: "#f00",
  }
}));

export default function SportsNav() {
  const classes = useStyles();
  const data = ["Général", "Social", "Foot", "Tennis", "Basket",  "Rugby","Hockey"];
const sports = data.map((sport) =>
<Chip label={sport} color="primary" component="a" href="#" clickable className={classes.chipNav}/>
);
  return (
    <div className={classes.root}>
        {sports}
    </div>
  );
}
