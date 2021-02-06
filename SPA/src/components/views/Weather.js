import React, { useState } from 'react';
import WeatherImput from '../Weather/WeatherImput';
import WeatherButton from '../Weather/WeatherButton';
// import TodayWheater from '../views/TodayWeather';
import Api from '../data'
import TodayWheaterInfo from '../TodayWeather/TodayWheaterInfo';



export default function Weather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({})
  
    const search = location => {
        if (location.key === "Enter") {
           fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`)
             .then(res => res.json())
             .then(result => {
                 setWeather(result);
                 setQuery('');
                 console.log(result);
              } )
         }
       }

  

    // const getWeather = e => {
    //     console.log('submiting');
    // }
    return (
        
    <div className='container p-4 '>
        <div className='row'>
            <div className='col-md-4 mx-auto'>
                <WeatherImput
                    data={Api}
                    query={query}
                    setQuery={setQuery}
                    search={search}
                    />
                <WeatherButton/>
                {(typeof weather.main != "undefined") ? (
                        <TodayWheaterInfo
                        weather={weather}/>

                ) : ('')}
                
            </div>
        </div>
    </div>
    )
}