import AboutUs from "./components/AboutSection";
import Clients from "./components/ClientsSection";
import Dishes from "./components/DishesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Subscribe from "./components/SubscribeSection";
import WhyUs from "./components/WhyUsSection";

function App(){
  return(
    <>
      <Header/>
      <Hero/>
      <WhyUs/>
      <Dishes/>
      <Clients/>
      <AboutUs/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App