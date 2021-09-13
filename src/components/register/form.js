import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";
import FormText from "../library/input/Text";
import FormPassword from "../library/input/Password";
import ErrorCollapse from "../library/errorCollapse";
import { register } from "../../redux/actions/register";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    height: "85vh",
    alignItems: "center",
    justifyContent: "center",
  },
  link:{
    marginTop: theme.spacing(2),
    textAlign: 'center',
    width: '100%'
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
  const history = useHistory();
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const { loading, error, registered } = useSelector((state) => state.register);


  const onSubmit = (data) => {
      dispatch(register(data));
    console.log(data)
  };
    if(registered && !loading) history.push('/login');

  return (
    <div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar} >
          <LibraryBooksIcon style={{ fontSize: 30 }} />
        </Avatar>
        <Typography variant="h2"  color="textPrimary">
        Create new account
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          Use your email to create new account
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ErrorCollapse error={error} />
            </Grid>
            <Grid item xs={6}>
            <FormText name="name" isRequired control={control}/>
            </Grid>
            <Grid item xs={6}>
            <FormText name="description" control={control}/>
            </Grid>
            <Grid item xs={12}>
            <FormText name="email" isRequired control={control}/>
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
              <div> Register </div>
            )}
          </Button>
          <Link
            component="button"
            variant="body2"
            rel="noopener"
            className={classes.link}
            onClick={() => {
              history.push('/login')
            }}
          >
            You already have an account ? Login !
          </Link>
        </form>
      </div>
    </div>
  );
}
