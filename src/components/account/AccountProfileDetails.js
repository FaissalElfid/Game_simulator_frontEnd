import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import FormText from "../library/input/Text";
import { updateUser } from "../../redux/actions/login";

function AccountProfileDetails(props) {
  const { user, loadingUpdate } = useSelector((state) => state.login);
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    // console.log(data);
    dispatch(updateUser(data, user.id));
  };
  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value
  //   });
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <FormText
                name="name"
                label="First name"
                defaultValue={user.name}
                control={control}
                isRequired
              />
            </Grid>
            <Grid item md={6} xs={12}>
            <FormText
                name="lastName"
                label="Last name"
                defaultValue={user.lastName}
                control={control}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormText
                label="Email Address"
                name="email"
                required
                control={control} 
                defaultValue={user.email}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormText
                label="Phone Number"
                name="phone"
                type="number"
                control={control} 
                defaultValue={user.phoneNumber}
              />
            </Grid>
            <Grid item md={12} xs={12}>
            <FormText
                label="Description"
                name="description"
                defaultValue={user.description}
                control={control} 
                isRequired
                multiline
                rows={3}
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
          <Button color="primary" variant="contained" type="submit" disabled={loadingUpdate}>
          {loadingUpdate ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              <div> Update profile </div>
            )}
          </Button>
        </Box>
      </Card>
    </form>
  );
}

export default AccountProfileDetails;
