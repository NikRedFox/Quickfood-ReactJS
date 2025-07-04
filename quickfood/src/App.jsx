import Dishes from "./components/DishesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import WhyUs from "./components/WhyUsSection";

function App(){
  return(
    <>
      <Header/>
      <Hero/>
      <WhyUs/>
      <Dishes/>
      <Footer/>
    </>
  )
}

export default App