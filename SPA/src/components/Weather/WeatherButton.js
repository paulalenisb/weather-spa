import React from 'react';

export default function WeatherButton(props) {
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons">

                <label className="btn btn-primary active">
                    <input 
                        type="radio" 
                        name="options" 
                        id="option1" 
                        autoComplete="off" 
                        /> Today
                </label>
                
                <label className="btn btn-primary">
                    <input 
                        type="radio" 
                        name="options" 
                        id="option2" 
                        autoComplete="off"/> 5 days
                </label>
        </div>
    );
}





