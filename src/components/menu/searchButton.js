import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "1px 2px",
    display: "flex",
    fontSize: 30,
    alignItems: "center",
    width: 800,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 35,
  },
  formControl: {
    minWidth: 120,
    borderBlockStyle: "inherit",
    boxShadow: "none",
  },
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    color: "#aaa"
  }
}));
const Placeholder = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.placeholder}>{children}</div>;
};
export default function SearchButton() {
  const classes = useStyles();
  const [answer, setAnswer] = React.useState("");
  return (
    <Paper component="form" className={classes.main}>
      <FormControl className={classes.formControl}>
        {/* <InputLabel htmlFor="grouped-select" disableShrink={false}>
          Filter
        </InputLabel> */}
        <Select
          defaultValue=""
          id="grouped-select"
          disableUnderline={true}
          displayEmpty
          onChange={(event) => setAnswer(event.target.value)}
          renderValue={
            answer !== "" ? undefined : () => <Placeholder>Filter</Placeholder>
          }
          className={classes.root}
        >
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase className={classes.input} placeholder="Search" />
      <Divider className={classes.divider} orientation="vertical" />

      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
