import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, Divider } from "@material-ui/core";

import FlashOnIcon from "@material-ui/icons/FlashOn";
import SettingsIcon from "@material-ui/icons/Settings";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 342,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    fontSize: 12,
    padding: 8,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  cover: {
    width: 151,
  },
  description: {
    fontWeight: 'bold',
    fontSize: "0.9rem",
    maxWidth: 250,
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
  },
  button: {
    width: 50,
  },
  recurrent: {
    fontSize: "0.7rem",
  },
  infos: {
    marginTop: 10,
    marginBottom: 1,
    paddingBottom: 0,
  },
  iconButton: {
    borderStyle: "solid",
    borderWidth: 1,
    minWidth: 0,
    padding: 1,
    color: "#252525",
    marginLeft: 9,

  },
  buttons:{
    marginLeft: 150,
  }
}));

export default function ChallengeBar(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKF1fRXtW_h1RTN9w4BLnc02M7fHAkS2Dkw&usqp=CAU"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component="h1"
            variant="h1"
            className={classes.description}
          >
            {props.title}
          </Typography>
          <div className={classes.buttons}>
            <Button
              color="primary"
              component="span"
              className={classes.iconButton}
            >
              <SettingsIcon fontSize="small" />
            </Button>
            <Button
              edge="start"
              color="primary"
              component="span"
              className={classes.iconButton}
            >
              <FlashOnIcon fontSize="small" />
            </Button>
          </div>

          <div className={classes.infos}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.recurrent}
            >
              
              {props.recurrent && <div> recurrent: {props.recurrent}</div>}
              {props.reunlockable && <div> re-unlockable: {props.reunlockable}</div>}
            </Typography>
            <Divider />
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.recurrent}
            >
              coins: {props.coins}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
