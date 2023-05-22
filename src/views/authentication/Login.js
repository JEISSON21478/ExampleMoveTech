import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import GoogleIcon from '@mui/icons-material/Google';

import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';

const Login = () => (
  <PageContainer title="Iniciar Sesión" description="this is Login page">
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
              <Typography fontWeight="700" variant="h2">
               Bienvenido
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  color="textSecondary"
                  variant="h6"
                  fontWeight="500"
                  sx={{
                    mr: 1,
                  }}
                >
                  ¿No tienes una cuenta?
                </Typography>
                <Typography
                  component={Link}
                  to="/auth/register"
                  fontWeight="500"
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'primary.main',
                  }}
                >
                  Crear cuenta
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                <CustomTextField id="email" variant="outlined" fullWidth />
                <CustomFormLabel htmlFor="password">Contraseña</CustomFormLabel>
                <CustomTextField
                  id="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 3,
                  }}
                />
                <Box
                  sx={{
                    display: {
                      xs: 'block',
                      sm: 'flex',
                      lg: 'flex',
                    },
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      ml: 'auto',
                    }}
                  >
                    <Typography
                      component={Link}
                      to="/auth/reset-password"
                      fontWeight="500"
                      sx={{
                        display: 'block',
                        textDecoration: 'none',
                        mb: '16px',
                        color: 'primary.main',
                      }}
                    >
                      ¿Has olvidado tu contraseña ?
                    </Typography>
                  </Box>
                </Box>

                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/dashboards/index"
                  sx={{
                    pt: '10px',
                    pb: '10px',
                  }}
                >
                  Ingresar
                </Button>
                <Box
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                    mt: '20px',
                    mb: '20px',
                    '&::before': {
                      content: '""',
                      background: (theme) =>
                        `${theme.palette.mode === 'dark' ? '#42464d' : '#ecf0f2'}`,
                      height: '1px',
                      width: '100%',
                      position: 'absolute',
                      left: '0',
                      top: '13px',
                    },
                  }}
                >
                  <Typography
                    component="span"
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                    sx={{
                      position: 'relative',
                      padding: '0 12px',
                      background: (theme) =>
                        `${theme.palette.mode === 'dark' ? '#282c34' : '#fff'}`,
                    }}
                  >
                    o inicia sesión con
                  </Typography>
                </Box>

                <Box>
                  <Button
                    variant="outlined"
                    size="large"
                    display="flex"
                    alignitems="center"
                    justifycontent="center"
                    sx={{
                      width: '100%',
                      borderColor: (theme) =>
                        `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
                      borderWidth: '2px',
                      textAlign: 'center',
                      mt: 2,
                      pt: '10px',
                      pb: '10px',
                      '&:hover': {
                        borderColor: (theme) =>
                          `${theme.palette.mode === 'dark' ? '#42464d' : '#dde3e8'}`,
                        borderWidth: '2px',
                      },
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <GoogleIcon
                        sx={{
                          color: (theme) => theme.palette.error.main,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          ml: 1,
                          color: (theme) =>
                            `${
                              theme.palette.mode === 'dark' ? theme.palette.grey.A200 : '#13152a'
                            }`,
                        }}
                      >
                        Google
                      </Typography>
                    </Box>
                  </Button>
                </Box>

               
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </PageContainer>
);

export default Login;
