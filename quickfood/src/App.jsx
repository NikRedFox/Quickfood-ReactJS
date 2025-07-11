import AboutUs from "./components/AboutSection";
import Clients from "./components/ClientsSection";
import Dishes from "./components/DishesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Subscribe from "./components/SubscribeSection";
import WhyUs from "./components/WhyUsSection";
import { useState, useEffect } from "react";
import './App.css'

function App(){
const[darkTheme, setDarkTheme] = useState(false)

  useEffect(() =>{
    if(darkTheme){
      document.body.classList.add('dark')
    }
    else{
      document.body.classList.remove('dark')
    }
  }, [darkTheme])

  return(
    <>      
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
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