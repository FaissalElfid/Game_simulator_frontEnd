import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormText from "../library/input/Text";
import ErrorCollapse from "../library/errorCollapse";
import SuccessCollapse from "../library/successCollapse";
import PropTypes from 'prop-types';
import { Tab, Tabs, Box, Switch, FormControlLabel } from "@material-ui/core";
import { addBadge } from "../../redux/actions/badges";
import { PhotoCamera } from "@material-ui/icons";

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
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
function BadgesFormModal(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ListAltIcon style={{ fontSize: 30 }} />
        </Avatar>
        <Typography variant="h2" color="textPrimary">
          Create new Badge for {props.currentChallenge.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          This challenges will be added automaticaly to the simulator users
        </Typography>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Bronze" {...a11yProps(0)} />
          <Tab label="Silver" {...a11yProps(1)} />
          <Tab label="Gold" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Form level="bronze" id={props.currentChallenge._id}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Form level="silver" id={props.currentChallenge._id} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Form level="gold"  id={props.currentChallenge._id}/>
      </TabPanel>
    </Box>
    </div>
    </div>
  );
}
function BadgesReunlockableModal(props) {
    const classes = useStyles();

  
    return (
      <div>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ListAltIcon style={{ fontSize: 30 }} />
          </Avatar>
          <Typography variant="h2" color="textPrimary">
            Create new Badge
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="body2">
            This challenges will be added automaticaly to the simulator users
          </Typography>
          <Form level="none" id={props.currentChallenge._id}/>
         
        </div>
      </div>
    );
  }

  function Form(props){
    const dispatch = useDispatch();
    const classes = useStyles();
    const [recurrent, isRecurrent] = useState(false);
    const { handleSubmit, control, register } = useForm();
    const { loading, error, badgeAdded } = useSelector(
      (state) => state.badges
    );
      // picture 
    const [file, setFile] = useState(null)
    const userImageRegister = register('picture', { required: true })
    const handleImageChange = (data) =>{
      console.log(data.target.files[0])
      setFile(URL.createObjectURL(data.target.files[0]))
    }
    console.log(props.level)

    const onSubmit = (data) => {
      data.level = props.level
      data.idChallenge = props.id
      if(recurrent){
        delete data.reunlockable
      }else{
        delete data.recurrent
      }
      // const formData = new FormData();
      // formData.append("file", data.picture[0]);
      // formData.append("badge", data);
      // console.log(data);
      dispatch(addBadge(data))
    };
      return(
    <form
    className={classes.form}
    onSubmit={handleSubmit(onSubmit)}
    noValidate
  >
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ErrorCollapse error={error} />
        <SuccessCollapse success={badgeAdded} />
      </Grid>
      <Grid item xs={12}>
        <FormText name="title" isRequired control={control} />
      </Grid>
      <Grid item xs={12}>
        <FormText
          name="description"
          multiline
          maxRows={4}
          control={control}
        />
      </Grid>
      <Grid item xs={6}>
      {recurrent ? <FormText name="recurrent" type="number" control={control} /> :
      <FormText name="reunlockable" type="number" control={control} />}
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel  control={<Switch color="primary" checked={recurrent} onClick={() => isRecurrent(!recurrent)} />} label={!recurrent ? "Is Reunlockable" : "Is Recurrent"} />
      </Grid>
      <Grid item xs={12}>
      <FormText name="coins" type="number" control={control} />
      </Grid>
      <Grid item xs={12}>
      <FormText name="pronos" type="number" control={control} />
      </Grid>
      <Grid item xs={6}>
      <Avatar
            // src={user.profileImage}
            src={file ? file : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ux1CxW8P6TqImLOplK1BGg_7nJUm_tzGfA&usqp=CAU"}
            sx={{
              height: 200,
              width: 200,
            }}
          />
          </Grid>
          <Grid item xs={6}>
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
        <div> Add new Badge</div>
      )}
    </Button>
  </form>)
  }
export default function BadgeModal(props) {
  const currentChallenge = props.challenges.find(
    (challenge) => challenge._id === props.itemSelected
  );
    return (!currentChallenge.reunlockable ? <BadgesReunlockableModal currentChallenge={currentChallenge} /> : <BadgesFormModal currentChallenge={currentChallenge} />)

}
