import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Grid from "./components/HowItWorks/HowItWorks";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Grid />
      </main>
    </>
  );
}

export default App;
