import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

export default function Recharts({weather5Days}) {
  console.log(weather5Days);

    return (
        <div>

            <LineChart
                        width={800}
                        height={500}
                        data={weather5Days}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={weather5Days[0].dt_txt}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={weather5Days.main.temp_max} stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey={weather5Days.main.temp_min} stroke="#87d110" activeDot={{ r: 8 }} />
                     </LineChart>
            
        </div>
    )
}
