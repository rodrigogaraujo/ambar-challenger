import React, { useEffect, useCallback } from 'react';
import { WiThermometer } from 'react-icons/wi';
import ReactLoading from 'react-loading';

import Card from './Components/Card';
import ContainerDetails from './Components/ContainerDetails';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Content, Cards } from './styles';

import { temperatureLoad } from '~/store/modules/temperature/actions';

const Home = () => {
  const { data, loading, tempMax, tempMin } = useSelector(
    state => state.temperature
  );
  const dispatch = useDispatch();
  console.log(tempMax, tempMin);
  useEffect(() => {
    dispatch(temperatureLoad('Teresina'));
  }, [dispatch]);

  const handleCity = useCallback(
    city => {
      dispatch(temperatureLoad(city));
    },
    [dispatch]
  );

  return loading ? (
    <Container>
      <ReactLoading color="#000" height={667} width={375} />
    </Container>
  ) : (
    <Container>
      <Cards>
        <Card
          city="Teresina"
          value={27}
          handleClick={() => handleCity('Teresina')}
        >
          <WiThermometer size={32} />
        </Card>
        <Card
          city="Rio de Janeiro"
          value={28}
          handleClick={() => handleCity('Rio de Janeiro')}
        >
          <WiThermometer size={32} />
        </Card>
        <Card city="Recife" value={30} handleClick={() => handleCity('Recife')}>
          <WiThermometer size={32} />
        </Card>
      </Cards>
      <Content>
        <ContainerDetails data={data} />
      </Content>
    </Container>
  );
};

export default Home;
