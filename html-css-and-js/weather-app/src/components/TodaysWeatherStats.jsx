function TodaysWeatherStats () {
    const stats = [
        {description: "Feels Like", measurement: "18°"},
        {description: "Humidity", measurement: "46%"},
        {description: "Wind", measurement: "14 km/h"},
        {description: "Precipitation", measurement: "0 mm"}
    ]
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
                <div 
                    key={stat.description} 
                    className="flex flex-col p-4 text-[hsl(0,0%,100%)] bg-[hsl(243,23%,24%)] rounded-md"
                >
                    <span>{stat.description}</span>
                    <span>{stat.measurement}</span>
                </div>
            ))}
        </div>
    );
}

export default TodaysWeatherStats