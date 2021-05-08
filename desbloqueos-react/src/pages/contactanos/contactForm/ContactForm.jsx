import React from 'react';
import { Form, Field } from 'formik';
import {
  MDBRow, MDBIcon, MDBBtn, MDBCol,
} from '../../../shared/dist/mdbreact';
import Input from '../../../components/formik/input/Input';

// eslint-disable-next-line react/prop-types
const ContactForm = ({ errors, touched }) => {
  const validation = { errors, touched };
  return (
    <Form>
      <MDBRow>
        <MDBCol md="6">
          <div className="md-form mb-0">
            <Field
              as={Input}
              name="name"
              label="Nombre"
              validation={validation}
            />
          </div>
        </MDBCol>
        <MDBCol md="6">
          <div className="md-form mb-0">
            <Field
              as={Input}
              name="email"
              label="Correo Electónico"
              validation={validation}
            />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6">
          <div className="md-form mb-0">
            <Field
              as={Input}
              name="phone"
              label="Número Telefonico"
              validation={validation}
            />
          </div>
        </MDBCol>
        <MDBCol md="6">
          <div className="md-form mb-0">
            <Field
              as={Input}
              name="company"
              label="Compañia (opcional)"
              validation={validation}
            />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <div className="md-form mb-0">
            <Field
              as={Input}
              name="message"
              label="Mensaje"
              validation={validation}
            />
            <MDBBtn rounded>
              Enviar
              <MDBIcon icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </Form>
  );
};

export default ContactForm;
