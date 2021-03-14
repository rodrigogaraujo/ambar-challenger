import React, { useEffect, useCallback } from 'react';
import { WiThermometer } from 'react-icons/wi';
import ReactLoading from 'react-loading';

import Card from './Components/Card';
import ContainerDetails from './Components/ContainerDetails';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Content, Cards } from './styles';

import { temperatureLoad } from '~/store/modules/temperature/actions';
import { initialLoad } from '~/store/modules/initialData/actions';

const Home = () => {
  const { data, loading } = useSelector(state => state.temperature);
  const { data: initialData, loading: loadingInitial } = useSelector(
    state => state.initial
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(temperatureLoad('Teresina'));
    dispatch(initialLoad());
  }, [dispatch]);

  const handleCity = useCallback(
    city => {
      dispatch(temperatureLoad(city));
    },
    [dispatch]
  );

  return loading || loadingInitial ? (
    <Container>
      <ReactLoading color="#000" height={667} width={375} />
    </Container>
  ) : (
    <Container>
      <Cards>
        <Card
          city="Teresina"
          value={initialData.cityOne ? initialData.cityOne - 273.15 : 0}
          handleClick={() => handleCity('Teresina')}
        >
          <WiThermometer size={32} />
        </Card>
        <Card
          city="Rio de Janeiro"
          value={initialData.cityTwo ? initialData.cityTwo - 273.15 : 0}
          handleClick={() => handleCity('Rio de Janeiro')}
        >
          <WiThermometer size={32} />
        </Card>
        <Card
          city="Recife"
          value={initialData.cityThree ? initialData.cityThree - 273.15 : 0}
          handleClick={() => handleCity('Recife')}
        >
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
