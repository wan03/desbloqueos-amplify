import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from '../../../shared/dist/mdbreact';
import Card from '../../../components/cards/Card';
import { CONSTANTS, PATHS } from '../../../shared/constants/Constants';

const Servicios = () => {
  const servicio = [
    {
      title: 'Desbloquear Celular',
      text: 'Desbloqueo de miles de celulares y tabletas, para que puedan ser usados con cualquier compañía de cualquier país. Servicio 100% online, con los mejores precios y tiempos de entrega. Además es permanente y mantiene la garantía de fábrica del dispositivo. ¡Es el método recomendado por los fabricantes y operadores!',
      buttonText: CONSTANTS.DESBLOQUEATUCELULAR,
      buttonHref: PATHS.DESBLOQUEOS,
    },
    {
      title: 'Chequear Celular',
      text: 'Obtén un completo informe del estado de tu celular completamente gratis. Chequea tu celular y descubre si el IMEI está reportado por el operador debido a una situación de pérdida, robo o impago. Descubre por qué tiene las llamadas limitadas, a qué operador pertenece, si está en garantía o si un iPhone tiene iCloud activado.',
      buttonText: 'Chequea Tu Celular',
      buttonHref: PATHS.DESBLOQUEOS,
    },
  ];

  return (
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Servicios
      </h2>
      <MDBRow>
        <MDBCol>
          <Card {...servicio[0]} />
        </MDBCol>

      </MDBRow>
      <MDBRow className="mt-3">
        <MDBCol>
          <Card {...servicio[1]} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Servicios;
