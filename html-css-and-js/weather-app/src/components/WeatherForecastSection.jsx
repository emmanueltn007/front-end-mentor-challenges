import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import TodaysWeatherStats from "./TodaysWeatherStats";

function WeatherForecastSection () {
    return (
        <section className="md:grid md:grid-cols-[2fr_1fr] mt-8 gap-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:items-center text-[hsl(0,0%,100%)] 
                                max-md:bg-[url('/assets/images/bg-today-small.svg')] 
                                md:bg-[url('/assets/images/bg-today-small.svg')]
                                bg-no-repeat bg-center bg-cover rounded-2xl px-4 py-8">
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold">
                            Berlin, Germany
                        </span>
                        <span>
                            Saturday, December 27, 2025
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <img className="h-40" src="/assets/images/icon-sunny.webp" alt="todays weather icon" />
                        <span className="text-9xl">
                            20°
                        </span>
                    </div>
                </div>
                <TodaysWeatherStats />
                <DailyForecast />
            </div>
            <HourlyForecast />
        </section>
    );
}

export default WeatherForecastSection