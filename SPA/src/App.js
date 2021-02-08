import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Weather from './components/views/Weather'
import TodayWeather from './components/views/TodayWeather'
import NextDaysWeather from './components/views/NextDaysWeather'
import NotFound from './components/views/NotFound'
// import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Weather} />
        <Route path='/Today' component={TodayWeather} />
        <Route path='/NextDays' component={NextDaysWeather} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

