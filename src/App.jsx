import Footer from "./components/common/Footer.jsx";
import Header from "./components/common/Header";
import Conference from "./components/Conference/index.jsx";
import Pricing from "./components/Pricing/index.jsx";
import Query from "./components/Query/index.jsx";
import Schedule from "./components/Schedule/index.jsx";
import HeroSlide from "./components/slider/HeroSlide";
import Speaker from "./components/Speaker/index.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroSlide />
      <Speaker />
      <Conference />
      <Schedule />
      <Query />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
