import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { Search as SearchIcon } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { getChallengesType } from '../../redux/actions/challenges/ChallengeType';
import Form from './FormModal';

function CustomerListToolbar(props){
  const  dispatch = useDispatch()

  const [openModal, setOpenModal] = React.useState(false);
  const {challengeTypes} = useSelector(state => state.challengesTypes)
  useEffect(() => {
    dispatch(getChallengesType())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button>
        Import
      </Button>
      <Button sx={{ mx: 1 }}>
        Export
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
      >
        Add Challenge
      </Button>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search for a challenge"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
    <Dialog
          open={openModal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Create a new new challenge"}
          </DialogTitle>
          <DialogContent>
            <Form challengeTypes={challengeTypes}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
  </Box>
);}

export default CustomerListToolbar;
