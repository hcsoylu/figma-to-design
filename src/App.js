import "./App.css";
import Email from "./components/Email";
import Foter from "./components/Foter";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Logos from "./components/Logos";
import Performance from "./components/Performance";
import Pillars from "./components/Pillars";
import Starter from "./components/Starter";
import Testi from "./components/Testi";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Logos />
      <Pillars />
      <Testi />
      <Performance />
      <Email />
      <Starter />
      <Foter />
    </div>
  );
}

export default App;
