import React, {useState} from 'react';
import WeatherInput from './components/Weather/WeatherInput';
import TodayWeatherInfo from './components/TodayWeather/TodayWheaterInfo';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

import {Api} from './components/data';


export default function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [nextDays, setNextDays] = useState({});
  const [date, setDate] = useState('today')

  const search = location => {
      
      if (location.key === "Enter") {
          Promise.all([
              fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`),
              fetch(`${Api.base}forecast?q=${query}&units=metric&APPID=${Api.key}`)
          ])
          .then(async ([today, fiveDays]) => {
              const currentlyWeather = await today.json();
              const nextDaysForecast = await fiveDays.json()
              setWeather(currentlyWeather);
              setNextDays(nextDaysForecast);
              setQuery('');
              console.log(currentlyWeather,nextDaysForecast)
          })
          .catch((err) => {
              console.log(err);
          })
      }}

      const forecast = nextDays.list;

      console.log(forecast);

      const weather5Days = []
      let data = []


      if (typeof nextDays.list != "undefined") {
          for (let i = 0; i < forecast.length; i += 8) {
              weather5Days.push(forecast[i])};

          data = [
              {day: `${weather5Days[0].dt_txt.slice(8,10)}`, temp_min: `${weather5Days[0].main.temp_min}`, temp_max: `${weather5Days[0].main.temp_max}`, time:  `${weather5Days[0].weather.main}` },
              {day: `${weather5Days[1].dt_txt.slice(8,10)}`, temp_min: `${weather5Days[1].main.temp_min}`, temp_max: `${weather5Days[1].main.temp_max}`,},
              {day: `${weather5Days[2].dt_txt.slice(8,10)}`, temp_min: `${weather5Days[2].main.temp_min}`, temp_max: `${weather5Days[2].main.temp_max}`},
              {day: `${weather5Days[3].dt_txt.slice(8,10)}`, temp_min: `${weather5Days[3].main.temp_min}`, temp_max: `${weather5Days[3].main.temp_max}`,},
              {day: `${weather5Days[4].dt_txt.slice(8,10)}`, temp_min: `${weather5Days[4].main.temp_min}`, temp_max: `${weather5Days[4].main.temp_max}`,}
          ]
      }


        return (
            
        <div className='container p-4 '>
            <div className='row'>
                <div className='col-md-10 mx-auto'>
                    <WeatherInput
                        data={Api}
                        query={query}
                        setQuery={setQuery}
                        search={search}
                        />
    
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-primary active">
                            <input 
                                type="radio" 
                                name="options" 
                                id="option1" 
                                autoComplete="off" 
                                onClick={(e) => setDate(e.target.value)}
                                value='today'
                                /> Today
                        </label>
                        <label className="btn btn-primary">
                            <input 
                                type="radio" 
                                name="options" 
                                id="option2" 
                                autoComplete="off"
                                onClick={(e) => setDate(e.target.value)}
                                value='days'/> 5 days
                        </label>
                        </div>
    
                    {(typeof weather.main != "undefined") && (date==='today') ? (
                       <div>
                            <TodayWeatherInfo
                            weather={weather}/>         
                       </div> 
                    ) : ('')}
    
                    {(typeof nextDays.list != "undefined")  && (date==='days') ? (
                        <div>
                            <div className="card">
                                <div className="card-body center">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{top: 5, right: 100, left: 0, bottom: 5,}}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey='day'/>
                                                <XAxis dataKey='time'/>
                                                <YAxis domain={[0, ' + 1000']}          allowDataOverflow={true} />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone"                   dataKey='temp_min' stroke="#4582ec" activeDot={{  r: 8 }} />
                                                <Line type="monotone" dataKey='temp_max'  stroke="#000" activeDot={{ r: 8 }} />
                                        </LineChart>
                                </div>
                            </div>
                        </div>
                    ) : ('')} 
                </div>
            </div>
        </div>
        )
    }
