import React, { useState } from 'react';
import WeatherInput from '../Weather/WeatherInput';
import WeatherButton from '../Weather/WeatherButton';
import MoreWeatherInfo from '../TodayWeather/MoreWeatherInfo';
import TodayWeatherInfo from '../TodayWeather/TodayWheaterInfo';


import {Api} from '../data';
import ChartWeather from '../NextDaysWeather/ChartWeather'


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

        console.log(nextDays.list);

        const forecast = nextDays.list;
        

        console.log(forecast);

        const weather5Days = []

        // useEffect(() => {
            
            
                
        // }, [forecast, weather5Days])
        
        if (typeof nextDays.list != "undefined") {
            for (let i = 0; i < forecast.length; i += 8) {
             weather5Days.push(forecast[i])}
        }

 
        
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
                   <div>
                        <TodayWeatherInfo
                        weather={weather}/>
                        
                   </div> 
                ) : ('')}

                {(typeof nextDays.list != "undefined") ? (
                    
                    weather5Days.map((days, index) => (
                        <ChartWeather
                        key={`${index}chart`}
                        nextDays={nextDays}
                        days={days}/>
                    )
                    )

                ) : ('')}

                
                {/* {(typeof nextDays.main != "undefined") ? (
                    forecast.map((list, index) => (
                        <ChartWeather
                            key={`${index}chart`}
                            nextDays={nextDays}
                            list={list} />
                    ))
                ) : ('')} */}

                <MoreWeatherInfo/>
            </div>
        </div>
    </div>
    )
}

