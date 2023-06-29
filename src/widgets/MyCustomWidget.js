import React, { useEffect, useState } from 'react'

export default function MyCustomWidget() {

    const [city, setCity] = useState('London');
    const [weather, setWeather] = useState({});

    return (
        <div style={{ minWidth: 300 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
                <input className='text-input' style={{ fontSize: 'medium' }} placeholder='Enter City name' type='text' />
                <button
                    style={{
                        background: "none",
                        border: "none",
                        color: "white",
                        fontSize: "15px",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                    }}
                >Find</button>
            </div>
            <div className='weather-container'>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
                </div>
            </div>
        </div >
    )
}