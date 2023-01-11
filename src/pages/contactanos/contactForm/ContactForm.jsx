/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Form, Field } from 'formik';
import Input from '../../../components/formik/input/Input';

function ContactForm({ errors, touched }) {
  const validation = { errors, touched };
  return (
    <Form>
      <Container sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center',
        width: '100%',
        alignContent: 'center',
      }}
      >
        <Box sx={{ }}>
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
            name="email"
            label="Correo Electónico"
            validation={validation}
          />
        </Box>
        <Box>
          <Field
            as={Input}
            name="phone"
            label="Número Telefonico"
            validation={validation}
          />
        </Box>
        <Box>
          <Field
            as={Input}
            name="company"
            label="Compañia (opcional)"
            validation={validation}
          />
        </Box>
        <Box>
          <Field
            as={Input}
            name="message"
            label="Mensaje"
            validation={validation}
          />
        </Box>
        <Button variant="contained" endIcon={<SendOutlinedIcon />}>
          Enviar
        </Button>
      </Container>
    </Form>
  );
}

ContactForm.propTypes = {
  touched: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
  errors: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
};

export default ContactForm;
