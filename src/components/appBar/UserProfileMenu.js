import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, CircularProgress } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/login";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  chip: {
    flexGrow: 1,
    fontSize: 15,
    color: "inherit",
    marginLeft: 17,
    borderColor: "inherit",
  },
}));

export default function UserProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { loading, user } = useSelector((state) => state.login);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    console.log(user.name)
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div>
      <Chip
        variant="outlined"
        size="medium"
        icon={<FaceIcon />}
        label={user ? user.name.split(' ')[0] : "Unkown"}
        className={classes.chip}
        onClick={handleClick}
      />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>history.push('/profile/account')}>My account</MenuItem>
        <MenuItem onClick={()=>history.push('/profile/settings')}>Settings</MenuItem>
        
        {loading ? (
          <CircularProgress size={24} color="primary" />
        ) : (
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        )}
      </Menu>
    </div>
  );
}
