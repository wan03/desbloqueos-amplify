/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line no-unused-vars

function MediaCard({
  title,
  text,
  buttonText,
  imgSrc,
  id,
}) {
  const navigate = useNavigate();
  return (
    /*
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
      */
    <Card>
      <CardMedia component="img" image={imgSrc} />
      <CardContent>
        <Typography>
          {title}
        </Typography>
        <Typography>
          {text}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/telefonos/${id}`);
          }}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

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

export default MediaCard;
