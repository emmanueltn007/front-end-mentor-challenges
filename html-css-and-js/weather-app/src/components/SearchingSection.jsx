import { useState } from "react";

function SearchingSection () {
    const [locationValue, setLocationValue] = useState("");

    //

    /*fetch(fetchWeatherUrl)
        .then(res => res.json())
        .then((weatherData) => {
            console.log(weatherData)
        })
    */

    const fetchData = async () => {
        const fetchLocationUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${locationValue}&count=10&language=en&format=json`;

        await fetch(fetchLocationUrl)
            .then(res => res.json())
            .then((data) => {
                const fetchWeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,wind_speed_10m,precipitation,relative_humidity_2m`;
                
                fetch (fetchWeatherUrl)
                    .then(res => res.json())
                    .then(weatherData => {
                        console.log(weatherData);
                    })
            });
    }

    function fetchLocation (e) {
        setLocationValue(e.target.value);
    }

    return (
        <section className="flex flex-col gap-8 text-[hsl(0,0%,100%)] mt-8">
            <h1 className="text-5xl font-semibold text-center">
                How's the sky looking today?
            </h1>
            <div className="flex flex-col  md:justify-center md:flex-row gap-4">
                <input 
                    className="bg-[hsl(243,23%,24%)] pl-8 pr-4 py-2 rounded-md md:w-4/10 cursor-pointer"
                    type="text" 
                    value={locationValue}
                    onChange={fetchLocation}
                    placeholder="Search for a place..." 
                />
                <button 
                    onClick={fetchData}
                    className="bg-[hsl(233,67%,56%)] py-2 px-4 rounded-md cursor-pointer">
                    Search
                </button>
            </div>
        </section>
    );
}

export default SearchingSection