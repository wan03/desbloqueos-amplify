import * as React from 'react';
import { getFeaturedPhones } from '../../shared/api/getPhones';

function Carousel() {
  const phones = getFeaturedPhones();
  return (
    <div className="slider-frame">
      <ul>
        {
        phones.map((phone) => (
          <li key={phone.id}>
            <img src={phone.imageURL} alt="" />
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default Carousel;
