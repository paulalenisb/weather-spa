import React from 'react';

export default function TodayWheaterInfo({weather}) {
    return (
    <div>
        <div className='card card-body'>
            <h5 className='mb-1'>{weather.name}, {weather.sys.country}</h5>
            <p className='lead'>{Math.round(weather.main.temp)}°c</p>
            <p className='lead'>{weather.weather[0].main}</p>
        </div>
    </div>
    );
}
