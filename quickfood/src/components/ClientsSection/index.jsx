import './style.css'
import Jane from '../../assets/Jane.svg'
import Esther from '../../assets/Esther.svg'
import Guy from '../../assets/Guy.svg'
import { useEffect, useRef, useState } from 'react'

const Clients =()=>{
    const sectionRef = useRef(null)
    const[visible, setVisible] =useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target)
                }
            }, {threshold: 0.4})

        if(sectionRef.current) observer.observe(sectionRef.current) 

        return () => {
            if(sectionRef.current) observer.unobserve(sectionRef.current)
        }          
        
    }, [])

    return(
        <section className="clients-bg" ref={sectionRef}>
            <div className="clients-title">
                <h2>What our clients say about us</h2>
                <p>Customer reviews on our Products and their feedbacks.</p>
            </div>

            <div className="clients-container"> 
                <div className={`clients-cards ${visible ? 'show' : ''}`}>
                    <img src={Jane} alt="Imagem de uma mulher negra" title="Imagem de uma mulher negra" loading="lazy" />
                    <div className="clients-textbox">    
                        <h3>Jane Cooper</h3>
                        <p>I have to say, I enjoyed every single bite of the meal in (RN). I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable.</p>
                    </div>  
                </div>           
                
                <div className={`clients-cards ${visible ? 'show' : ''}`}>
                    <img src={Esther} alt="Imagem de uma mulher branca" title="Imagem de uma mulher branca" loading="lazy" />
                    <div className="clients-textbox">    
                        <h3>Esther Howard</h3>
                        <p>It’s a great experience. The ambiance is very welcoming and charming. Amazing food and service. Staff are extremely knowledgeable and make great recommendations</p>
                    </div>  
                </div> 

                <div className={`clients-cards ${visible ? 'show' : ''}`}>
                    <img src={Guy} alt="Imagem de um homem branco" title="Imagem de um homem branco" loading="lazy" />
                    <div className="clients-textbox">    
                        <h3>Guy Hawkins</h3>
                        <p>Do yourself a favor and order from this lovely restaurant. The service is unmatched. The staff truly cares about your experience.</p>
                    </div>  
                </div> 
            </div>
        </section>
    )
}

export default Clients