import React from 'react';
import WeatherImput from '../Weather/WeatherImput';
import TodayWheater from '../views/TodayWeather';

export default function Weather() {
    return (
    <div className='container p-4 '>
        <div className='row'>
            <div className='col-md-6 mx-auto'>
                <WeatherImput/>
                <TodayWheater/>
            </div>
        </div>
    </div>
    )
}