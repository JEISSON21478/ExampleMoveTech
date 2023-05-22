import React from 'react';
import { Box, Typography, Avatar, Divider } from '@mui/material';
import FeatherIcon from 'feather-icons-react';

import userimg from '../../../assets/images/users/3.jpg';

const ProfileDropdown = () => (
  <Box>
    <Box
      sx={{
        pb: 3,
        mt: 3,
      }}
    >
      <Box display="flex" alignItems="center">
        <Avatar
          src={userimg}
          alt={userimg}
          sx={{
            width: '90px',
            height: '90px',
          }}
        />
        <Box
          sx={{
            ml: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              lineHeight: '1.235',
            }}
          >
            Jeisson Junco Gonzalez
          </Typography>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            Desarrollador
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography
              color="textSecondary"
              display="flex"
              alignItems="center"
              sx={{
                color: (theme) => theme.palette.grey.A200,
                mr: 1,
              }}
            >
              <FeatherIcon icon="mail" width="18" />
            </Typography>
            <Typography color="textSecondary" variant="h6">
              jjunco@pruebas.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    <Divider
      style={{
        marginTop: 0,
        marginBottom: 0,
      }}
    />

    <Box>

      <Divider
        style={{
          marginTop: 0,
          marginBottom: 0,
        }}
      />

    </Box>
  </Box>
);

export default ProfileDropdown;
