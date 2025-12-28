function DailyForecast () {
    const dailyWeatherForecast = [
        {day: "Mon", icon: "/assets/images/icon-rain.webp", minTemp: "20°", maxTemp: "14°"},
        {day: "Tue", icon: "/assets/images/icon-drizzle.webp", minTemp: "21°", maxTemp: "14°"},
        {day: "Wed", icon: "/assets/images/icon-sunny.webp", minTemp: "24°", maxTemp: "14°"},
        {day: "Thu", icon: "/assets/images/icon-partly-cloudy.webp", minTemp: "25°", maxTemp: "13°"},
        {day: "Fri", icon: "/assets/images/icon-storm.webp", minTemp: "21°", maxTemp: "15°"},
        {day: "Sat", icon: "/assets/images/icon-snow.webp", minTemp: "25°", maxTemp: "16°"},
        {day: "Sun", icon: "/assets/images/icon-fog.webp", minTemp: "24°", maxTemp: "15°"}
    ];

    console.log(dailyWeatherForecast);
    return (
        <div className="flex flex-col gap-4">
            <span className="text-[hsl(0,0%,100%)]">
                Daily forecast
            </span>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                {dailyWeatherForecast.map((dailyForecast) => {
                    return (
                        <div 
                            className="flex flex-col items-center text-[hsl(0,0%,100%)] bg-[hsl(243,23%,24%)] rounded-md p-2"
                            key={dailyForecast.day}>
                            <span>{dailyForecast.day}</span>
                            <img 
                                className="h-14 w-auto md:w-12"
                                src={dailyForecast.icon} 
                                alt="weather icon" 
                            />
                            <div className="flex gap-4">
                                <span>
                                    {dailyForecast.maxTemp}
                                </span>
                                <span>
                                    {dailyForecast.minTemp}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DailyForecast