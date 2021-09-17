import moment from "moment";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {  uploadImage } from "../../redux/actions/login";
import { PhotoCamera } from "@material-ui/icons";
import { useState } from "react";

const userStatic = {
  avatar: "/static/images/faissal.png",
  city: "Taza",
  country: "Morrocco",
  jobTitle: "Softwar Engeneer",
  name: "Faissal EL FID",
  timezone: "GTM",
};
const useStyles = makeStyles((theme) => ({
  paper: {
    alignItems: "center",
    paddingLeft: "12%",
  },

}));
function AccountProfile(props) {
  const classes = useStyles();

  const { loadingUpload, user } = useSelector((state) => state.login);
  const { handleSubmit, register } = useForm();
  const [file, setFile] = useState(null)
  const userImageRegister = register('picture', { required: true })
  const dispatch = useDispatch();
  const handleImageChange = (data) =>{
    console.log(data.target.files[0])
    setFile(URL.createObjectURL(data.target.files[0]))
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.picture[0]);
    dispatch(uploadImage(formData, user.id));
  };
  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            // src={user.profileImage}
            src={file ? file : user.profileImage}
            sx={{
              height: 100,
              width: 100,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${userStatic.city} ${userStatic.country}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${moment().format("hh:mm A")} ${userStatic.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions >
          
          <Grid item xs={12} className={classes.paper}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          noValidate
          
          {...props}
        >
          <Button
            variant="contained"
            component="label"
            fullwidth
            >
              <PhotoCamera />
              <input
                type="file"
                hidden
                accept="image/*"
                {...userImageRegister}
                onChange={(e) => {
                  userImageRegister.onChange(e);
                  handleImageChange(e);
             }}
              />
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              fullwidth
              disabled={loadingUpload}
            >
              {loadingUpload ? (
                <CircularProgress size={24} color="primary" />
              ) : (
                <div> Update profile Picture</div>
              )}
            </Button>
          
        </form>
        </Grid>

      </CardActions>
    </Card>
  );
}

export default AccountProfile;
