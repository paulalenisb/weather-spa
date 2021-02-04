import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Weather from './components/views/Weather'
import ChartWeather from './components/views/ChartWeather'
import NotFound from './components/views/NotFound'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Weather} />
        <Route path='/NextDays' component={ChartWeather} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

