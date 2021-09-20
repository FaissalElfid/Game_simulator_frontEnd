import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormText from "../library/input/Text";
import ErrorCollapse from "../library/errorCollapse";
import SuccessCollapse from "../library/successCollapse";
import { addChallengeType } from "../../redux/actions/challenges/ChallengeType";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    height: "85vh",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    marginTop: theme.spacing(2),
    textAlign: "center",
    width: "100%",
  },
  paperWithResult: {
    marginTop: theme.spacing(8),
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(8),
    height: theme.spacing(7),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const { loading, error, challengesTypeAdded } = useSelector((state) => state.challengesTypes);

  const onSubmit = (data) => {
    dispatch(addChallengeType(data));
    console.log(data);
  };

  return (
    <div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SportsBaseballIcon style={{ fontSize: 30 }} />
        </Avatar>
        <Typography variant="h2" color="textPrimary">
          Create new Challenge Type
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          This challenge type will be added automaticaly to the simulator users 
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
        //   noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ErrorCollapse error={error} />
              <SuccessCollapse success={challengesTypeAdded} />
            </Grid>
            <Grid item xs={12}>
              <FormText name="title" isRequired control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormText name="description" multiline maxRows={4} control={control} />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              <div> Add new Challenge Type </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
