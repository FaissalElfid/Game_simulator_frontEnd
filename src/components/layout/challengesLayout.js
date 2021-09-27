import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Paper, Typography } from "@material-ui/core";

import ProgressChallenge from "../challenges/ProgressChallenge";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChallenge } from "../../redux/actions/shared";
import { Tab, Tabs, Box, Badge } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
  },
  main: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    height: "300",
    overflow: "hidden",
    width: 700,
    padding: "20px",
    backgroundColor: "#181B1F",
    color: "#FFF",
  },
  CheckButton: {
    marginTop: "40px",
    fontSize: 20,
    textTransform: "capitalize",
  },
  challengesContainer: {
    backgroundColor: "#F9FAFC",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  challenge: {
    marginTop: 20,
    margin: 10,
    backgroundColor: "#E6E6E6",
    height: 140,
    width: 140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    display: "flex",
  },
  image: {
    paddingTop: 5,
    height: 120,
    borderRadius: 10,
    // paddingLeft: "12%",
  },
  imageNotFound: {
    height: 142,
    width: 140,
    borderRadius: 5,
  },
  boxTab: { borderBottom: 1, borderColor: theme.palette.primary.main },
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function ChallengeReunlockable(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
const {badges, badgeGold, badgeSilver}= props
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={classes.boxTab}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Bronze" {...a11yProps(0)} />
          <Tab label="Silver" {...a11yProps(1)} />
          <Tab label="Gold" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ChallengeBadges badges={badges} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChallengeBadges badges={badgeSilver}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ChallengeBadges badges={badgeGold}/>
      </TabPanel>
    </div>
  );
}
function ChallengeBadges(props) {
  const classes = useStyles();
  const { badges, progress } = props;
  return (
    <div>
      <div className={classes.row}>
        <BadgeContent index={0} badges={badges} />
        <BadgeContent index={1} badges={badges} />
        <BadgeContent index={2} badges={badges} />
      </div>
      <div className={classes.row}>
        <BadgeContent index={3} badges={badges} />
        <BadgeContent index={4} badges={badges} />
        <BadgeContent index={5} badges={badges} />
      </div>
      <div className={classes.row} style={{ marginBottom: 10 }}>
        <BadgeContent index={6} badges={badges} />
        <BadgeContent index={7} badges={badges} />
        <BadgeContent index={8} badges={badges} />
      </div>
    </div>
  );
}
function BadgeContent(props) {
  const classes = useStyles();
  const { badges, index } = props;
  let challengeCounter = 0;
  let couleur = "primary"
  const {user} = useSelector(state => state.login)
  // const {_id} = badges[index]
  // user.badgesUnlocked.filter((element) => element._id === badges[index]._id)
  if(badges[index]){
    let filtered = user.badgesUnlocked.filter((element) => element.badge === badges[index]._id)
    // console.log(filtered)
    if(filtered[0]){challengeCounter = filtered[0].counter; if(filtered[0].counter >= badges[index].recurrent) couleur="secondary"};
  }
  
  // if(badgesUnlocked[0].counter)
  // challengeCounter = badgesUnlocked[0].counter;
  return (
    
    <Paper className={classes.challenge}>
      <Badge badgeContent={challengeCounter} color={couleur}>
      {badges && badges.length > index ? (
        <div>
          {badges[index].image ? (
            <img
              src={badges[index].image}
              alt={badges[index].title}
              className={classes.image}
            />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ux1CxW8P6TqImLOplK1BGg_7nJUm_tzGfA&usqp=CAU"
              className={classes.image}
              alt={badges[index].title}
            />
          )}
          {/* here i should add the user pronos */}
          <Typography
            color="textPrimary"
            gutterBottom
            // className={}
            variant="subtitle2"
          >
            {
              props.badges[index].level ==='none' &&
              <ProgressChallenge
              current={badges[index].pronos}
              max={badges[badges.length - 1].pronos}
            />
            }
            

            {badges[index].title}
          </Typography>
        </div>
      ) : (
        <div>
          <img
            src="https://www.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"
            className={classes.imageNotFound}
            alt="Badge not found"
          />
        </div>
      )}
      </Badge>
    </Paper>
    
  );
}
export default function ChallengesLayout(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.shared);
  // const { badges } = useSelector((state) => state.badges);
  useEffect(() => {
    dispatch(setCurrentChallenge(props.item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return (
    <Paper className={classes.main} elevation={0}>
      <Paper className={classes.challengesContainer} elevation={10}>
        <Paper className={classes.challenge}></Paper>
        <Typography color="textPrimary" gutterBottom variant="h4">
          {props.item.title}
        </Typography>
        {/* <h2 style={{}}>{props.item.title}</h2> */}
        {props.item.reunlockable ? (
          <ChallengeReunlockable badges={props.item.badges} badgeSilver={props.item.badgeSilver} badgeGold={props.item.badgeGold} />
        ) : (
          <ChallengeBadges badges={props.item.badges} />
        )}
      </Paper>
    </Paper>
  );
}
