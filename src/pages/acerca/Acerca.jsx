import React from 'react';
import {
  MDBContainer, MDBRow,
} from '../../shared/mdbreact/mdbreact';
import { LOREM_IPSUM, PLACEHOLDER_IMAGE } from '../../shared/constants/dev';

const Acerca = () => (
  <MDBContainer className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      Acerca
    </h2>
    <MDBRow>
      <p>{LOREM_IPSUM}</p>
      <p>{LOREM_IPSUM}</p>
      <p>{LOREM_IPSUM}</p>
    </MDBRow>
    <MDBRow>
      <img src={PLACEHOLDER_IMAGE(300)} className="img-fluid mx-auto d-block" alt="" />
    </MDBRow>
  </MDBContainer>

);

export default Acerca;
