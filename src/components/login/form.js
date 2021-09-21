import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { login } from "../../redux/actions/login";
import { useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";
import ErrorCollapse from "../library/errorCollapse";
import FormText from "../library/input/Text";
import FormPassword from "../library/input/Password";
import { registeredFalse } from "../../redux/actions/register";
import { ADMIN_ROUTES } from "../../utils/admin_routes";
import { getChallengesType } from "../../redux/actions/challenges/ChallengeType";
const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    height: "85vh",
    alignItems: "center",
    justifyContent: "center",
  },
  paperWithResult: {
    marginTop: theme.spacing(8),
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(8),
    height: theme.spacing(7),
  },
  link:{
    marginTop: theme.spacing(2),
    textAlign: 'center',
    width: '100%'
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
  const history = useHistory();
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const { loading, error, connected, isAdmin } = useSelector((state) => state.login);
  const { url } = useSelector((state) => state.shared);
   useEffect(() => {
     dispatch(registeredFalse())
   }, [dispatch])

  const onSubmit = (data) => {
      dispatch(login(data.email, data.password));
  };
    if(connected && !loading) {
      dispatch(getChallengesType());
      if(ADMIN_ROUTES.includes(url) && !isAdmin){
        history.push('/404');
      }
        history.push(url);
    }
  return (
    <div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon style={{ fontSize: 30 }} />
        </Avatar>
        <Typography variant="h2"  color="textPrimary">
          Sign in
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          Sign in on the internal platform
        </Typography>
        <form
          className={classes.form}
          // autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
         <Grid container spacing={2}>
            <Grid item xs={12}>
              <ErrorCollapse error={error} />
            </Grid>
            <Grid item xs={12}>
            <FormText name="email" control={control} isRequired/>
            </Grid>
            <Grid item xs={12}>
              <FormPassword name="password" control={control} />
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
              <div> Login </div>
            )}
          </Button>
          <Link
            component="button"
            variant="body2"
            rel="noopener"
            className={classes.link}
            onClick={() => {
              history.push("/register")
            }}
          >
            You don't have an account ? Create a new one !
          </Link>
        </form>
      </div>
    </div>
  );
}
