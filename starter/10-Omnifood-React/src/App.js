import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Featured from "./components/Featured/Featured";
import Meals from "./components/Meals/Meals";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import CallToAction from "./components/CallToAction/CallToAction";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Featured />
        <Meals />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
    </>
  );
}

export default App;
