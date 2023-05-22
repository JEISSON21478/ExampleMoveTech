import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WelcomeCard = () => (
  <Card
    elevation={0}
    sx={{
      position: 'relative',
      backgroundColor: (theme) => `${theme.palette.mode === 'dark' ? '#32363e' : ''}`,
      '&:before': {
        content: `""`,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '45%',
        transform: (theme) => `${theme.direction === 'rtl' ? '' : 'unset'}`,
        backgroundPosition: {
          xs: 'top 0px right -9px',
        },
      },
      borderWidth: '0px',
    }}
  >
    <CardContent>
      <Typography
        sx={{
          marginTop: '8px',
          marginBottom: '0px',
          lineHeight: '35px',
          position: 'relative',
          zIndex: 9,
        }}
        variant="h3"
        gutterBottom
      >
        Hola Invitado, <br />  Bienvenido 
      </Typography>

    </CardContent>
  </Card>
);

export default WelcomeCard;
