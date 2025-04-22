import { useState } from "react";

function Weather () {
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    const [periods, setPeriods] = useState([])

    const pointsApi = "api.weather.gov/points/";
    
    const locationSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const url = pointsApi + `${latitude},${longitude}`;

        const request = new Request(url);
        fetch(request).then((response) => response.json())
            .then((json) => {
                const forecastUrl = json.properties.forecast;
                const forecastRequest = new Request(forecastUrl);
                fetch(forecastRequest).then((response) => response.son())
                    .then((json) => {
                        setPeriods(json.properties.periods);
                        setLat(latitude);
                        setLon(longitude);
                        console.log(periods)
                    })
            })
    }

    const locationError = () => {
        setLat(null);
        setLon(null);
        alert("Error loading coords")
    }
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);

    let location = "";
    if(lat && lon) {
        location = ` for (${lat}, ${lon})`
    }

    const forecast = periods.map((period, index) => {
        return (
            <li key={"period-" + index}>
                <img src={period.icon} />
                <strong>{period.name}</strong> {period.detailedForecast} <br/>
                <strong>{period.temperature} {period.temperatureUnit}</strong>
            </li>
        )
    });

    // console.log(lat, lon, location)

    return  (
        <div>
            <h1>Weather</h1>
            <div>{location}</div>
            <ul>{forecast}</ul>
        </div>
    )
}

export default Weather;