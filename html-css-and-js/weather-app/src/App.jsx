import Header from "./components/Header";
import SearchingSection from "./components/SearchingSection";
import WeatherForecastSection from "./components/WeatherForecastSection";

function App () {
  return (
    <div className="bg-[hsl(243,96%,9%)] p-8 md:pt-8 md:pb-16 md:pl-16 md:pr-16">
      <Header />
      <SearchingSection />
      <WeatherForecastSection />
    </div>
  )
}

export default App