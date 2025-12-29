function HourlyForecast () {
    const hourlyForecastStats = [
        { icon: "/assets/images/icon-overcast.webp", hour: "3 PM", temp: "20°"},
        { icon: "/assets/images/icon-partly-cloudy.webp", hour: "4 PM", temp: "20°"},
        { icon: "/assets/images/icon-sunny.webp", hour: "5 PM", temp: "20°"},
        { icon: "/assets/images/icon-overcast.webp", hour: "6 PM", temp: "19°"},
        { icon: "/assets/images/icon-drizzle.webp", hour: "7 PM", temp: "18°"},
        { icon: "/assets/images/icon-fog.webp", hour: "8 PM", temp: "18°"},
        { icon: "/assets/images/icon-overcast.webp", hour: "9 PM", temp: "17°"},
        { icon: "/assets/images/icon-overcast.webp", hour: "10 PM", temp: "17°"}
    ];
    return (
        <div className="flex flex-col gap-4 p-4 bg-[hsl(243,27%,20%)] rounded-md max-md:mt-4">
            <div className="flex justify-between">
                <span className="text-[hsl(0,0%,100%)]">
                    Hourly forecast
                </span>
                <button className="text-[hsl(0,0%,100%)] flex items-center gap-2 px-4 py-2 bg-[hsl(243,23%,24%)] rounded-md cursor-pointer">
                    <span>Tuesday</span>
                    <img 
                        className="h-2 w-auto" 
                        src="/assets/images/icon-dropdown.svg" 
                        alt="dropdown svg" 
                    />
                </button>
            </div>
            <div className="flex flex-col max-md:gap-4 justify-between h-full">
                {hourlyForecastStats.map((hourlyForecast) => {
                    return (
                        <div 
                            className="bg-[hsl(243,23%,24%)] text-[hsl(0,0%,100%)] flex items-center justify-between rounded-md py-1 px-2"
                            key={hourlyForecast.hour}>
                            <div className="flex items-center gap-4">
                                <img 
                                    className="h-10 w-auto md:w-8"
                                    src={hourlyForecast.icon} 
                                    alt="weather icon" 
                                />
                                <span className="text-md">{hourlyForecast.hour}</span>
                            </div>
                            <span className="text-xs">{hourlyForecast.temp}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HourlyForecast