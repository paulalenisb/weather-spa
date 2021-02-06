import React, { useState } from 'react';
import WeatherInput from '../Weather/WeatherInput';
import WeatherButton from '../Weather/WeatherButton';
import MoreWeatherInfo from '../TodayWeather/MoreWeatherInfo';
import TodayWeatherInfo from '../TodayWeather/TodayWheaterInfo';

import {Api} from '../data';


export default function Weather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({})
    const [nextDays, setNextDays] = useState({})
  
    const search = location => {
        
        if (location.key === "Enter") {
            Promise.all([
                fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`),
                fetch(`${Api.base}forecast?q=${query}&units=metric&APPID=${Api.key}`)
            ])
            .then(async ([today, fiveDays]) => {
                const a = await today.json();
                const b = await fiveDays.json()
                setWeather(a);
                setNextDays(b);
                setQuery('');
                console.log(a,b)
            })
            .catch((err) => {
                console.log(err);
            })
        }}


    return (
        
    <div className='container p-4 '>
        <div className='row'>
            <div className='col-md-8 mx-auto'>
                <WeatherInput
                    data={Api}
                    query={query}
                    setQuery={setQuery}
                    search={search}
                    />
                <WeatherButton/>

                {(typeof weather.main != "undefined") ? (
                        <TodayWeatherInfo
                        weather={weather}/>
                ) : ('')}
                
                <MoreWeatherInfo/>
            </div>
        </div>
    </div>
    )
}