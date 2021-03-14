import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row } from './styles';
const Card = ({ city, value, children, handleClick }) => {
  return (
    <Container onClick={handleClick} type="button">
      <h1>{city}</h1>
      <Row>
        {children}
        <span>{value}°C</span>
      </Row>
    </Container>
  );
};

Card.propTypes = {
  city: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
