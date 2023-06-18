import React, { useState, useEffect } from 'react';
import StarshipCard from './components/StarshipCard';

 const  App = () => {
     let [starships, setStarships] = useState({ starships: [], loading: true })
     let [forecasts, setForecasts] = useState({ forecasts: [], loading: true })


    useEffect(() => {
        fetch('api/WeatherForecast')
            .then(response => response.json())
            .then((data) => {
                if (forecasts.loading) {
                    setForecasts({ forecasts: data, loading: false });
                }
            })
        fetch('api/Starships')
            .then(response => response.json())
            .then((data) => {
                if (starships.loading) {
                    setStarships({ starships: data, loading: false });
                }
            })

    },[starships,forecasts])


    const renderForecastsTable = (forecasts) => {
        return (
            <div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temp. (C)</th>
                            <th>Temp. (F)</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecasts.map(forecast =>
                            <tr key={forecast.date}>
                                <td>{forecast.date}</td>
                                <td>{forecast.temperatureC}</td>
                                <td>{forecast.temperatureF}</td>
                                <td>{forecast.summary}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
     }

     let forecastContents = forecasts.loading
         ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
         : renderForecastsTable(forecasts.forecasts);

     let startshipsContents = starships.loading
         ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
         : starships.starships.map((starship) => <pre>
             <StarshipCard starship={starship} />
         </pre>);

    return (
        <div>
            <h1 id="tabelLabel" >Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {forecastContents}
            {startshipsContents}
        </div>
    );
}

export default App;