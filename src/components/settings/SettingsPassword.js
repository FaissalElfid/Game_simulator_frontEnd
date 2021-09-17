import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updatePassword } from "../../redux/actions/login";
import FormPassword from "../library/input/Password";
import ErrorCollapse from "../library/errorCollapse";
import { useState } from "react";
import SuccessCollapse from "../library/successCollapse";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
const SettingsPassword = (props) => {
  const { loadingUpdate, error, user, uploadSuccess } = useSelector((state) => state.login);
  const [isSamePass, setIsSamePass] = useState('')
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if(data.password !== data.passwordConf){
      setIsSamePass("Sorry !! the passwords don't match.")
    }else{
      setIsSamePass('')
      console.log(data)
      dispatch(updatePassword(data.password, user.id));
    }
    
  };
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  return (
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ErrorCollapse error={error} />
                <ErrorCollapse error={isSamePass} />
                <SuccessCollapse success={uploadSuccess} />
              </Grid>
              <Grid item xs={12}>
                <FormPassword name="password" label="Confirm password" control={control} />
              </Grid>
              <Grid item xs={12}>
                <FormPassword
                  name="passwordConf"
                  label="Confirm password"
                  control={control}
                />
              </Grid>
            </Grid>
            </CardContent>
           <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            > 
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={loadingUpdate}
              >
                {loadingUpdate ? (
                  <CircularProgress size={24} color="primary" />
                ) : (
                  <div> UPDATE </div>
                )}
              </Button>
            </Box>
          </form>
      </Card>
  );
};

export default SettingsPassword;
