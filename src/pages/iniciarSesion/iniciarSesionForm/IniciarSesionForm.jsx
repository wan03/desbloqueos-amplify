/* eslint-disable react/forbid-prop-types */
import { Box, Button, Container } from '@mui/material';
import { Field, Form } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Input from '../../../components/formik/input/Input';

function IniciarSesionForm({ errors, touched }) {
  const validation = { errors, touched };
  return (
    <Form>
      <Container
        sx={{
          display: 'flex',
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box>
          <Field
            as={Input}
            name="name"
            label="Nombre"
            validation={validation}
          />
        </Box>
        <Box>
          <Field
            as={Input}
            name="password"
            label="Contraseña"
            validation={validation}
          />
        </Box>
        <Button
          variant="contained"
          endIcon={<SendOutlinedIcon />}
          width="50%"
        >
          Enviar
        </Button>
      </Container>
    </Form>
  );
}

IniciarSesionForm.propTypes = {
  touched: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
  errors: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
};

export default IniciarSesionForm;
