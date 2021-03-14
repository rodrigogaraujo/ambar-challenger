import React, { useCallback } from 'react';
import {
  WiCelsius,
  WiCloudy,
  WiCloud,
  WiDayRainWind,
  WiNightAltRainMix,
  WiDaySnowThunderstorm,
  WiNightAltLightning,
  WiSnow,
  WiNightAltThunderstorm,
  WiDayThunderstorm,
} from 'react-icons/wi';
import { FaCity } from 'react-icons/fa';
import history from '~/services/history';

import { Container, Row, Icon, Button, Col } from './styles';

const CityDetails = () => {
  const data = {
    city: 'Teresina',
    temp: 293.38,
    temp_min: 293.38,
    temp_max: 293.38,
    icon: '03n',
    description: 'nuvens dispersas',
  };
  const handleIcon = useCallback(icon => {
    switch (icon) {
      case '01d':
        return <WiCloud size={35} />;
      case '03d':
        return <WiCloudy size={35} />;
      case '09d':
        return <WiDayRainWind size={35} />;
      case '09n':
        return <WiNightAltRainMix size={35} />;
      case '10d':
        return <WiDayRainWind size={35} />;
      case '10n':
        return <WiNightAltRainMix size={35} />;
      case '11d':
        return <WiDaySnowThunderstorm size={35} />;
      case '11n':
        return <WiNightAltLightning size={35} />;
      case '13d':
        return <WiSnow size={35} />;
      case '13n':
        return <WiSnow size={35} />;
      case '50d':
        return <WiDayThunderstorm size={35} />;
      case '50n':
        return <WiNightAltThunderstorm size={35} />;
      default:
        return <WiCloudy size={35} />;
    }
  }, []);
  return (
    <Container>
      <Button type="button" onClick={() => history.goBack()}>
        Voltar
      </Button>
      <Row>
        <Col>
          <h1>
            <FaCity size={30} />
            {data.city}
          </h1>
          <h2>
            Temp. máxima: {(data.temp_min - 273.15).toFixed(2)}
            <WiCelsius size={25} />
          </h2>
          <Row>
            <Icon>{handleIcon(data.icon)}</Icon>
            <h3>{data.description}</h3>
          </Row>
        </Col>
        <Col>
          <h1>
            <FaCity size={30} />
            {data.city}
          </h1>
          <h2>
            Temp. mínima: {(data.temp_max - 273.15).toFixed(2)}
            <WiCelsius size={25} />
          </h2>
          <Row>
            <Icon>{handleIcon(data.icon)}</Icon>
            <h3>{data.description}</h3>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CityDetails;
