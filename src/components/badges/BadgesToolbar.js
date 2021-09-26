import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  SvgIcon,
  CircularProgress
} from '@material-ui/core';
import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getBadges } from '../../redux/actions/badges';
import FormText from '../library/input/Text';

function CustomerListToolbar(props){
  const  dispatch = useDispatch()
  const { loading} = useSelector((state) => state.badges);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    dispatch(getBadges(data.challengeId));
};
  return (
  <Box {...props}>
    <form
          // autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button sx={{ mx: 1 }}>
        Export
      </Button>
      <Button
        color="primary"
        variant="contained"
        type="submit"
      >
        {loading ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              <div> Search for badge </div>
            )}
      </Button>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <FormText
            name="challengeId"
            control={control}
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
              label={"Search for badges by challenge id"}
              placeholder="Search for badges by challenge id"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
    </form>
  </Box>
);}

export default CustomerListToolbar;
