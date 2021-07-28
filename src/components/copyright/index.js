import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typogra: {
    color: '#fafafa',
  }
}))
function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="inherit" align="center" className={classes.typogra}>
      {"Copyright © "}
      <Link color="inherit" href="https://dba.ma/">
        dba
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function App() {
  return (
    <div>
      <Box pt={4}>
        <Copyright />
      </Box>
    </div>
  );
}

export default App;
