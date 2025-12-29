import Header from "./components/Header";
import Hero from "./components/Hero";

function App () {
  return (
    <div className="min-h-screen min-w-screen px-8 py-12 md:px-12 md:py-16 overflow-x-hidden relative">
      <div className="absolute top-0 right-0 bg-gray-500 h-96 w-1/2 rounded-bl-4xl -z-10"></div>
      <Header />
      <Hero />
    </div>
    
  );
}

export default App