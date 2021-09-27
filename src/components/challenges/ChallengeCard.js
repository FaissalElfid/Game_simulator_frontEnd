import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CircularProgress, Divider, Grid, Popover, TextField } from "@material-ui/core";

import FlashOnIcon from "@material-ui/icons/FlashOn";
import SettingsIcon from "@material-ui/icons/Settings";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import FormText from "../library/input/Text";
import { updateUserBadge } from "../../redux/actions/badges";
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
      paddingBottom: 0,
    },
  },
  cover: {
    width: 151,
  },
  description: {
    fontWeight: "bold",
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
  buttons: {
    marginLeft: 150,
  },
  popover: {
    width: 230,
    paddingTop: 10,
    overflow: "visible",
    height: 280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  popoverText: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  popoverButton: {
    marginLeft: "65%",
    alignItems: "right",
  },
  popoverTitle: {
    marginBottom: 10,
  },
}));

export default function ChallengeBar(props) {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm();
  const { user } = useSelector((state) => state.login);
  const { loading, badgeAdded } = useSelector((state) => state.badges);

  const onSubmit = (data) => {
    console.log(user.id, props._id, data.counter)
    dispatch(updateUserBadge(user.id, props._id, data.counter));
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Card className={classes.root} elevation={4}>
      <CardMedia
        className={classes.cover}
        image={
          props.image
            ? props.image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ux1CxW8P6TqImLOplK1BGg_7nJUm_tzGfA&usqp=CAU"
        }
        title="Game challenge"
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
              aria-describedby={id}
              onClick={handleClick}
            >
              <SettingsIcon fontSize="small" />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className={classes.popover}>
                <Typography variant="h4" className={classes.popoverTitle}>
                  Trigger settings
                </Typography>
                <Divider style={{ width: "100%" }} />
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.popoverText}>
                      <FormText
                        name="counter"
                        label="re-unlock"
                        variant="outlined"
                        control={control}
                        isRequired
                        style={{ marginTop: 10 }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} className={classes.popoverText}>
                      <FormText label="Exact" control={control} variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        className={classes.popoverButton}
                      >
                        {loading ? (
                          <CircularProgress size={24} color="primary" />
                        ) : (
                          <div> Save </div>
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Popover>
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
              {props.reunlockable && (
                <div> re-unlockable: {props.reunlockable}</div>
              )}
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
