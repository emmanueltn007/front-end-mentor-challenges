import Header from "./components/Header";
import Hero from "./components/Hero";

function App () {
  return (
    <div className="px-8 py-12 md:px-12 md:py-16">
      <div className="absolute top-0 right-0 left-1/2 h-80 bg-gray-500/20 rounded-bl-3xl -z-10"></div>
      <Header />
      <Hero />
    </div>
    
  );
}

export default App