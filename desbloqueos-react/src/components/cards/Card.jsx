import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,
} from '../../shared/dist/mdbreact';

const Card = ({
  title, text, buttonText, buttonHref, imgSrc,
}) => (
  <MDBCard className="align-items-center">
    {imgSrc && (
    <MDBCardImage
      className="img-fluid"
      src={imgSrc}
      waves
    />
    )}
    <MDBCardBody>
      {title && <MDBCardTitle>{title}</MDBCardTitle>}
      {text && <MDBCardText>{text}</MDBCardText>}
      {buttonText && <MDBBtn href={buttonHref}>{buttonText}</MDBBtn>}
    </MDBCardBody>
  </MDBCard>
);

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  imgSrc: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  text: '',
  buttonText: '',
  buttonHref: '',
  imgSrc: '',
};

export default Card;
