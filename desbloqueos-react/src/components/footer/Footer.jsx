import React from 'react';
import {
  MDBCol, MDBContainer, MDBRow, MDBFooter,
} from '../../shared/dist/mdbreact';
import { PATHS } from '../../shared/constants/Constants';

const Footer = () => (
  <MDBFooter color="indigo" className="font-small pt-4 mt-auto">
    <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
        <MDBCol md="6">
          <h5 className="title">DesbloqueaTuCel</h5>
          <ul>
            {PATHS.map(({ path, name }) => (
              <li className="list-unstyled" key={name}>
                <a href={path}>{name}</a>
              </li>
            ))}
          </ul>
        </MDBCol>
        <MDBCol md="6">
          <h5 className="title">Navegación</h5>
          <ul>
            {PATHS.map(({ path, name }) => (
              <li className="list-unstyled" key={name}>
                <a href={path}>{name}</a>
              </li>
            ))}
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Copyright:
        {' '}
        <a href="https://www.DesbloqueaTuCel.com"> DesbloqueaTuCel.com </a>
      </MDBContainer>
    </div>
  </MDBFooter>
);

export default Footer;
