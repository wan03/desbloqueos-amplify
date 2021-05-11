import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  MDBContainer, MDBRow, MDBIcon, MDBCard, MDBCardBody, MDBCol,
} from '../../shared/dist/mdbreact';
import { LOREM_IPSUM } from '../../shared/constants/dev';
import ContactForm from './contactForm/ContactForm';

const Contactanos = () => (
  <MDBContainer>

    <h2 className="h1-responsive font-weight-bold text-center my-5">
      Contáctanos
    </h2>

    <MDBRow>
      <p>{LOREM_IPSUM}</p>
    </MDBRow>
    <section className="contact-section my-5">
      <MDBCard>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form">
              <h3 className="mt-4">
                <MDBIcon icon="envelope" className="pr-2" />
                Escríbenos:
              </h3>
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
                    .required('Requerido'),
                  email: Yup.string()
                    .required('Requerido'),
                  phone: Yup.string()
                    .required('Requerido'),
                  company: Yup.string(),
                  message: Yup.string()
                    .required('Requerido'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // eslint-disable-next-line no-alert
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              />
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 white-text">
              <h3 className="my-4 pb-2">Información de Contacto</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                    <MDBIcon icon="map-marker-alt" className="pr-2" />
                    Algun Lugar #1, Santiago, Republica Dominicana
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon fab icon="whatsapp" className="white-text pr-2" />
                    +1809-555-555
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="envelope" className="pr-2" />
                    contacto@desbloqueatucel.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="facebook" className="white-text" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" className="white-text" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" className="white-text" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>

      </MDBCard>
    </section>

  </MDBContainer>
);

export default Contactanos;
