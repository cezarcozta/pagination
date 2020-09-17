import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Planets from '../pages/Planets';
import Characters from '../pages/Characters';
import Films from '../pages/Films';
import Starships from '../pages/Starships';
import Vehicles from '../pages/Vehicles';
import Species from '../pages/Species';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Planets} />
    <Route path="/films" component={Films} />
    <Route path="/people" component={Characters} />
    <Route path="/starships" component={Starships} />
    <Route path="/vehicles" component={Vehicles} />
    <Route path="/species" component={Species} />
  </Switch>
);

export default Routes;
