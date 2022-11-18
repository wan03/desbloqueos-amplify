import React, { useState } from 'react';
import { withRouter } from 'react-router';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
  MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
} from '../../shared/mdbreact/mdbreact';
import { PATHS } from '../../shared/constants/Constants';

function Navbar() {
  const [isOpen, toggleIsOpen] = useState(false);

  const toggleCollapse = () => {
    toggleIsOpen({ isOpen: !isOpen });
  };

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">DesbloqueaTuCel</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          {PATHS.map(({ path, name }) => (
            <MDBNavItem key={name}>
              <MDBNavLink to={path}>{name}</MDBNavLink>
            </MDBNavItem>
          ))}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBFormInline waves>
              <div className="md-form my-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              </div>
            </MDBFormInline>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default withRouter(Navbar);
