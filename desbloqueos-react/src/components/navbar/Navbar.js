import React, { useState } from 'react';
import { withRouter } from 'react-router'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    } from "mdbreact";
import { PATHS } from "../../shared/constants/Constants";

const Navbar = (props) => {

    const [isOpen, toggleIsOpen] = useState(false);

    const toggleCollapse = () => {
        toggleIsOpen({ isOpen: !this.state.isOpen });
      };

    return (
        <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">DesbloqueaTuCel</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to={PATHS.INICIO}>Inicio</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={PATHS.ACERCA}>Acerca</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={PATHS.CONTACTANOS}>Contáctanos</MDBNavLink>
            </MDBNavItem>
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