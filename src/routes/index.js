import React from 'react';
import { Switch } from 'react-router-dom';
import Router from './Route';

import Home from '~/pages/Home';
import CityDetails from '~/pages/CityDetails';

export default function Routes() {
  return (
    <Switch>
      <Router path="/" exact component={Home} />
      <Router path="/compare" exact component={CityDetails} />
    </Switch>
  );
}
