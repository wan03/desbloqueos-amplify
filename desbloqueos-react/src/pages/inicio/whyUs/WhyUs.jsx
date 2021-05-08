import React from 'react';
import { MDBRow, MDBCol, MDBIcon } from '../../../shared/dist/mdbreact';

const WhyUS = () => (
  <section className="text-center my-5">
    <h2 className="h1-responsive font-weight-bold my-5">
      ¿Por qué escoger a DesbloqueaTuCel?
    </h2>
    <MDBRow>
      <MDBCol md="4">
        <MDBIcon icon="money-bill-wave" size="3x" className="red-text" />
        <h5 className="font-weight-bold my-4">Precio</h5>
        <p className="grey-text mb-md-0 mb-5">
          Los mejores precios que vas a encontrar. Si encuentras algo mejor escríbenos
          y te lo resolveremos a tu satisfacción.
        </p>
      </MDBCol>
      <MDBCol md="4">
        <MDBIcon icon="mobile" size="3x" className="cyan-text" />
        <h5 className="font-weight-bold my-4">Fácil</h5>
        <p className="grey-text mb-md-0 mb-5">
          Solo necesitas información de tu teléfono y un correo electrónico.
        </p>
      </MDBCol>
      <MDBCol md="4">
        <MDBIcon far icon="comments" size="3x" className="orange-text" />
        <h5 className="font-weight-bold my-4">Soporte</h5>
        <p className="grey-text mb-md-0 mb-5">
          Estamos disponibles para responder cualquiera de tus dudas por teléfono,
          WhatsApp y email.
        </p>
      </MDBCol>
    </MDBRow>
  </section>
);

export default WhyUS;
