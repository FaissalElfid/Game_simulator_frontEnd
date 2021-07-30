import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, Divider } from "@material-ui/core";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import SettingsIcon from '@material-ui/icons/Settings';
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
  },
  cover: {
    width: 151,
  },
  description: {
    fontSize: "0.8rem",
    paddingBottom: 15,
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
  },
}));

export default function MediaControlCard() {
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
            component="h5"
            variant="h5"
            className={classes.description}
          >
            Réalise 50 pronos Foot toutes compétitions confondues
          </Typography>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<SettingsIcon fontSize="small"/>}
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<FlashOnIcon fontSize="small"/>}
          />
          <div className={classes.infos}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.recurrent}
            >
              recurrent: 50
            </Typography>
            <Divider />
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.recurrent}
            >
              coins: 50
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
