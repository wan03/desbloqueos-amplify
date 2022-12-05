import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { getPhones } from '../../shared/api/getPhones';

function Carousel() {
  const allPhone = getPhones();
  return (
  /*
    <MDBContainer fluid>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    */
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: '345px' }}>
        <CardMedia component="img" image={allPhone[0].imageURL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {allPhone[0].name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Carousel;
