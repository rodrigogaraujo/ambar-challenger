import React from 'react';
import { WiCelsius } from 'react-icons/wi';
import { FaCity } from 'react-icons/fa';
import history from '~/services/history';

import { Container, Row, Button, Col } from './styles';
import { useSelector } from 'react-redux';

const CityDetails = () => {
  const { tempMax, tempMin } = useSelector(state => state.temperature);

  return (
    <Container>
      <Button type="button" onClick={() => history.goBack()}>
        Voltar
      </Button>
      <Row>
        <Col>
          <h1>
            <FaCity size={30} />
            {tempMax.city}
          </h1>
          <h2>
            Temp. máxima: {(tempMax.value - 273.15).toFixed(2)}
            <WiCelsius size={25} />
          </h2>
        </Col>
        <Col>
          <h1>
            <FaCity size={30} />
            {tempMin.city}
          </h1>
          <h2>
            Temp. mínima: {(tempMin.value - 273.15).toFixed(2)}
            <WiCelsius size={25} />
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default CityDetails;
