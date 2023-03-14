import { Container, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/cards/Card';

function Servicios({ servicioTitle, servicios }) {
  return (
  /*
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        {servicioTitle}
      </h2>

      {servicios.map((servicio) => (
        <MDBRow key={servicio.sys.id}>
          <MDBCol>
            <Card {...servicio} />
          </MDBCol>
        </MDBRow>
      ))}

    </MDBContainer>
    */
    <Container>
      <Typography>
        {servicioTitle}
      </Typography>
      {
        servicios.map((servicio) => (
          <Card key={servicio.sys.id} {...servicio} />
        ))
      }
    </Container>
  );
}

Servicios.propTypes = {
  servicioTitle: PropTypes.string,
  servicios: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    buttonHref: PropTypes.string,
  })),
};

Servicios.defaultProps = {
  servicioTitle: '',
  servicios: [],
};

export default Servicios;
