import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';

import PageContainer from '../../components/container/PageContainer';

const ResetPassword = () => (
  <PageContainer title="Restablecer Contraseña" description="this is Reset Password page">
    <Grid container spacing={0} sx={{ height: '100vh', justifyContent: 'center' }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        sx={{
          background: (theme) => `${theme.palette.mode === 'dark' ? '#1c1f25' : '#ffffff'}`,
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: {
                xs: 'relative',
                lg: 'absolute',
              },
              height: { xs: 'auto', lg: '100vh' },
              right: { xs: 'auto', lg: '-50px' },
              margin: '0 auto',
            }}
          >
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              p: 4,
              position: 'absolute',
              top: '0',
            }}
          >
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h2" fontWeight="700">
           ¿Olvidaste tu contraseña?
              </Typography>

              <Typography
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                sx={{
                  mt: 2,
                }}
              >
                Ingrese la dirección de correo electrónico asociada con su cuenta y le enviaremos un enlace por correo electrónico para restablecer su contraseña.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                }}
              >
                <CustomFormLabel htmlFor="reset-email">Email</CustomFormLabel>
                <CustomTextField id="reset-email" variant="outlined" fullWidth />

                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/"
                  sx={{
                    pt: '10px',
                    pb: '10px',
                    mt: 4,
                  }}
                >
                  Restablecer la contraseña
                </Button>
                <Button
                  color="secondary"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/auth/login"
                  sx={{
                    pt: '10px',
                    pb: '10px',
                    mt: 2,
                  }}
                >
                  Volver a inicio de sesión
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </PageContainer>
);

export default ResetPassword;
