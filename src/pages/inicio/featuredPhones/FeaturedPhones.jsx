import React, { useState, useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow } from '../../../shared/mdbreact/mdbreact';
import { CONSTANTS, PATHS } from '../../../shared/constants/Constants';
import CardWithImage from '../../../components/cards/Card';
import { getFeaturedPhones } from '../../../shared/api/getPhones';

function FeaturedPhones() {
  const [featuredPhones, setFeaturedPhones] = useState([]);

  useEffect(() => {
    const phones = getFeaturedPhones();
    setFeaturedPhones([...phones]);
  }, []);

  // TODO Is this the best way?
  const cardInformation = featuredPhones.map((phone) => {
    const card = {
      key: phone.id,
      title: phone.name,
      buttonText: CONSTANTS.DESBLOQUEATUCELULAR,
      buttonHref: PATHS.DESBLOQUEOS,
      imgSrc: phone.imageURL,
    };
    return card;
  });

  return (
    <MDBContainer className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Teléfonos Destacados
      </h2>
      <MDBRow>
        {cardInformation.map((card) => (
          <MDBCol key={card.key}>
            <CardWithImage {...card} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default FeaturedPhones;
