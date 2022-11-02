import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Featured from "./components/Featured/Featured";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Featured />
      </main>
    </>
  );
}

export default App;
