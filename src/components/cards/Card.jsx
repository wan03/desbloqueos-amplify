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
  buttontext,
  imgsrc,
  id,
}) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia component="img" image={imgsrc} />
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
          {buttontext}
        </Button>
      </CardContent>
    </Card>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttontext: PropTypes.string,
  buttonhref: PropTypes.string,
  imgsrc: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  text: '',
  buttontext: '',
  buttonhref: '',
  imgsrc: '',
};

export default MediaCard;
