import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { width } from '@mui/system';
import { Brightness1 } from '@mui/icons-material';

const useStyles = makeStyles({
  imageView: {
    background:
      'linear-gradient(270deg, rgba(0, 0, 0, 0.7) 70.52%, rgba(0, 0, 0, 0.581) 101.46%)',

    backgroundSize: 'cover',
    width: '100%',
    height: '50vh',
    position: 'relative',
    '&:before': {
      position: 'absolute',
      zIndex: '-1',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      content: '""',
      backgroundImage: `url(/images/beautiful-young-woman.png)`,
      opacity: 1,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  typgo: {
    paddingTop: '10%',
    fontSize: '35px',
    lineHeight: 1.5,

    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textAlign: 'center',
    // justifyContent:'center'
  },
  span: {
    color: 'yellow',
  },
  typ: {
    color: '#FFFFFF',
    padding: '10%',
    textAlign: 'center',
  },
  img: {
    background:
      'linear-gradient(270deg, rgba(0, 0, 0, 0.7) 70.52%, rgba(0, 0, 0, 0.581) 101.46%)',
    width: '100%',
  },

  // style={{ backgroundImage: "url(./assets/images/beautiful-young-woman.jpg)", backgroundSize:'cover', width: '100%',
  // height: 500,opacity:'0.4'}}
});

export const ImageView = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.imageView}>
      <Box
        sx={{
          padding: '.1rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Typography className={classes.typgo} variant="h3">
          {' '}
          we are ready to <span className={classes.span}>hear </span> from you
        </Typography>
        <Typography variant="h6" className={classes.typ}>
          {' '}
          You can reach by calling us, sending a message or even pay a warm
          visit
        </Typography>
      </Box>
    </Box>
  );
};
