import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, } from 'mdbreact';

const Card = ({ title, text, buttonText, buttonHref, imgSrc }) => {
  return (
      <MDBCard className="align-items-center">
        {imgSrc && <MDBCardImage className="img-fluid" src={imgSrc}
          waves />}
        <MDBCardBody>
          {title && <MDBCardTitle>{title}</MDBCardTitle>}
          {text && <MDBCardText>{text}</MDBCardText>}
          {buttonText && <MDBBtn href={buttonHref}>{buttonText}</MDBBtn>}
        </MDBCardBody>
      </MDBCard>
  )
}

export default Card;