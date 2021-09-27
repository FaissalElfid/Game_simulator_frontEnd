import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" color='primary' {...props} />
      </Box>
      {/* <Box minWidth={35}>
        <Typography variant="body2">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box> if i want to show the value  */}
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel(props) {
  const classes = useStyles();
  // const [progress, setProgress] = React.useState(10);
  const {current, max} = props
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //   }, 500);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
const progress = (current/ max)*100 
  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}
