import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ListAltIcon from '@material-ui/icons/ListAlt';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormText from "../library/input/Text";
import ErrorCollapse from "../library/errorCollapse";
import SuccessCollapse from "../library/successCollapse";
import { FormControlLabel, Switch } from "@material-ui/core";
import FormSelect from "../library/input/Select";
import { addChallenge } from "../../redux/actions/challenges";

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

export default function Form(props) {
  const  dispatch = useDispatch()

  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const { loading, error, challengeAdded } = useSelector((state) => state.challenges);
  const [isReunlockable, setIsReunlockable] = useState(false)
  const onSubmit = (data) => {
    data.isReunlockable = isReunlockable
    dispatch(addChallenge(data));
    console.log(data);
  };
  
  return (
    <div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ListAltIcon style={{ fontSize: 30 }} />
        </Avatar>
        <Typography variant="h2" color="textPrimary">
          Create new Challenge
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          This challenge will be added automaticaly to the simulator users 
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ErrorCollapse error={error} />
              <SuccessCollapse success={challengeAdded} />
            </Grid>
            <Grid item xs={12}>
              <FormText name="title" isRequired control={control} />
            </Grid>
            <Grid item xs={12}>
              <FormSelect name="challengeType" menuitems={props.challengeTypes} isRequired label="Challenge Type" control={control} />
            </Grid>
            
            <Grid item xs={12}>
              <FormText name="description" multiline maxRows={4} control={control} />
            </Grid>
            <Grid item xs={6}>
            <FormControlLabel  control={<Switch color="primary" checked={isReunlockable} onClick={() => setIsReunlockable(!isReunlockable)} />} label={isReunlockable ? "Is Reunlockable" : "Unlockable only once"} />
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
              <div> Add new Challenge</div>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
