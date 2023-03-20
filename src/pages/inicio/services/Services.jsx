import { Container, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/cards/Card';

function Servicios({ servicioTitle, servicios }) {
  return (
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
    buttontext: PropTypes.string,
    buttonhref: PropTypes.string,
  })),
};

Servicios.defaultProps = {
  servicioTitle: '',
  servicios: [],
};

export default Servicios;
