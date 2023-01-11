import {
  Box, Button, Card, Container, Typography,
} from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import RegisterForm from './registerForm/RegisterForm';

function Register() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '30px',
      }}
    >
      <Typography variant="h5">
        Register
      </Typography>
      <Box
        sx={{
          padding: '30px',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 'max-content',
          }}
          variant="outlined"
        >
          <Box
            sx={{
              '& .MuiTextField-root': { mr: 1 }, padding: { xs: '20px 10px', sm: '30px' }, display: 'flex', flexDirection: 'column', gap: '20px',
            }}
            noValidate
            autoComplete="off"
          >
            <Formik
              component={RegisterForm}
              initialValues={{
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .required('*Requerido'),
                password: Yup.string()
                  .required('*Requerido'),
                email: Yup.string()
                  .required('*Requerido'),
                phone: Yup.string()
                  .required('*Requerido'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // eslint-disable-next-line no-alert
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            />
            <Typography sx={{ display: 'flex', gap: '10px' }}>
              Tiene cuenta?
              <Button
                color="primary"
                onClick={() => {
                  navigate('/login');
                }}
              >
                Iniciar Sesion
              </Button>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default Register;
