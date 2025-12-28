import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import TodaysWeather from "./TodaysWeather";
import TodaysWeatherStats from "./TodaysWeatherStats";

function WeatherForecastSection () {
    return (
        <section className="md:grid md:grid-cols-[2fr_1fr] mt-8 gap-4">
            <div className="flex flex-col gap-4">
                <TodaysWeather />
                <TodaysWeatherStats />
                <DailyForecast />
            </div>
            <HourlyForecast />
        </section>
    );
}

export default WeatherForecastSection