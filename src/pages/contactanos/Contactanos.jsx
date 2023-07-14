/* eslint-disable max-len */
import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ContactForm from './contactForm/ContactForm';

function Contactanos() {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      padding: '30px',
    }}
    >
      <Typography variant="h5" color="initial">
        Contactanos
      </Typography>
      <Typography>
        Si quieres mantenerte al tanto y recibir información sobre nuestros servicios déjanos tu información aquí y te contactaremos
      </Typography>
      <Box
        className="form-Contact"
        sx={{
          padding: { xs: '10px', ms: '30px' },
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
              '& .MuiTextField-root': { mr: 1 },
              padding: { xs: '10px', sm: '30px' },
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: { xs: '250px', sm: '300px' },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h6" color="initial">
              Escribenos
            </Typography>
            <Formik
              component={ContactForm}
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
                email: Yup.string()
                  .required('*Requerido'),
                phone: Yup.string()
                  .required('*Requerido'),
                company: Yup.string(),
                message: Yup.string()
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
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default Contactanos;
