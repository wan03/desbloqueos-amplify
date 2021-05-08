import React from 'react';
import { MDBContainer, Row, Col } from '../../shared/dist/mdbreact';
import DesbloqueosForm from './form/DesbloqueosForm';

const Desbloqueos = () => (
  <MDBContainer className="mt-5">
    <h2 className="text-center mb-5">Desbloqueos</h2>
    <Row>
      <Col md="6">
        <img
          src="https://via.placeholder.com/300"
          className="img-fluid"
          alt=""
        />
      </Col>
      <Col md="6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          rhoncus eros ac felis gravida luctus. Suspendisse potenti. Nulla
          facilisi. Praesent purus dui, pretium in molestie eget, ultrices id
          justo. Ut nibh purus, dictum nec maximus vel, suscipit vel arcu.
          Aliquam erat volutpat. Curabitur sodales non nunc quis elementum.
        </p>
      </Col>
    </Row>
    <Row>
      <DesbloqueosForm />
    </Row>
  </MDBContainer>
);

export default Desbloqueos;
