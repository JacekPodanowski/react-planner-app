/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

export default function MyCustomWidget() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const getWeatherIconUrl = (icon) =>
        `http://openweathermap.org/img/w/${icon}.png`;

    return (
        <div style={{ minWidth: 300 }}>
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6557810176c36fac5f0db536711a6c52`)
                            .then((res) => res.json())
                            .then((result) => {
                                if (result.cod !== '200') {
                                    alert('City not found');
                                    return;
                                }
                                console.log(result);
                                setWeather(result);
                            });
                    }
                }
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'row',
                }}
            >
                <input
                    className='text-input'
                    style={{ fontSize: 'medium' }}
                    value={city}
                    placeholder='Enter City name'
                    type='text'
                    required
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '15px',
                        cursor: 'pointer',
                    }}
                >
                    Find
                </button>
            </form>
            <div className='weather-container'>
                {weather && (
                    <>
                        <h2>Weather Forecast for {weather.city.name}</h2>
                        <div key={weather.list[0].dt} className='weather-item'>
                            <p>Date/Time: {weather.list[0].dt_txt}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} className='weather-items'>
                                <div>
                                    <p>Temperature: {weather.list[0].main.temp}K</p>
                                    <p style={{ textTransform: 'capitalize' }}>Description: {weather.list[0].weather[0].description}</p>
                                    <p>
                                        Humidity: {weather.list[0].main.humidity}%
                                    </p>
                                    <p>
                                        Wind Speed:{' '}
                                        {weather.list[0].wind.speed} m/s
                                    </p>
                                    <p>
                                        Rainfall:{' '}
                                        {weather.list[0].rain && weather.list[0].rain['3h']
                                            ? weather.list[0].rain['3h']
                                            : 0}{' '}
                                        mm
                                    </p>
                                </div>
                                <img
                                    width={100}
                                    src={getWeatherIconUrl(
                                        weather.list[0].weather[0].icon
                                    )}
                                    alt={weather.list[0].weather[0].description}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
