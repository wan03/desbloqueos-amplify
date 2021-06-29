import React from 'react';
import PropTypes from 'prop-types';
import { MDBRow, MDBCol, MDBIcon } from '../../../shared/dist/mdbreact';

const WhyUS = ({ whyUsTitle, whyUsReasons }) => (
  <section className="text-center my-5">
    <h2 className="h1-responsive font-weight-bold my-5">
      {whyUsTitle}
    </h2>
    <MDBRow>
      {whyUsReasons.map((reason) => (
        <MDBCol md="4" key={reason.sys.id}>
          <MDBIcon icon="money-bill-wave" size="3x" className="red-text" />
          <h5 className="font-weight-bold my-4">{reason.title}</h5>
          <p className="grey-text mb-md-0 mb-5">
            {reason.text}
          </p>
        </MDBCol>
      ))}
    </MDBRow>
  </section>
);

WhyUS.propTypes = {
  whyUsTitle: PropTypes.string,
  whyUsReasons: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  })),
};

WhyUS.defaultProps = {
  whyUsTitle: '',
  whyUsReasons: [],
};

export default WhyUS;
