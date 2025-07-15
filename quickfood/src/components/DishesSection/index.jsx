import './style.css'
import Salada1 from '../../assets/Salada-1.svg'
import Salada2 from '../../assets/Salada-2.svg'
import { useEffect, useRef, useState } from 'react'


const Dishes =()=>{
    const sectionRef = useRef(null)
    const[visible, setVisible] = useState(false)

    useEffect(() =>{
        const observer = new IntersectionObserver(([entry]) => {
            console.log('intersectou?', entry.isIntersecting)
            if (entry.isIntersecting){
                setVisible(true)
                observer.unobserve(entry.target)
            }
        }, {threshold: 0.4}
        )

        if (sectionRef.current){
            observer.observe(sectionRef.current)
        }

        return()=>{
            if (sectionRef.current) observer.unobserve(sectionRef.current)
        }
    }, [])

    return(
        <section className="special-container" ref={sectionRef}>
            <h2>Special dishes for you</h2>
            <div className="special-dishes-container" ref={sectionRef}>
                <div className={`special-img ${visible ? 'show': ''}`}>
                    <img src={Salada2} alt="Salada imagem" title="Salada imagem" loading="lazy"/>
                    <h3>Garlic Salad</h3>
                    <p>Caprese is a classic Italian salad made with sliced tomatoes.</p>
                    <button>Buy Now</button>
                </div>

                <div className={`special-img ${visible ? 'show': ''}`}>
                    <img src={Salada1} alt="Salada imagem" title="Salada imagem" loading="lazy"/>
                    <h3>Caprese Salad</h3>
                    <p>Caprese is a classic Italian salad made with sliced tomatoes.</p>
                    <button>Buy Now</button>
                </div>  

                <div className={`special-img ${visible ? 'show': ''}`}>
                    <img src={Salada2} alt="Salada imagem" title="Salada imagem" loading="lazy"/>
                    <h3>Garlic Salad</h3>
                    <p>Caprese is a classic Italian salad made with sliced tomatoes.</p>
                    <button>Buy Now</button>
                </div> 
            </div>        
        </section>        
    )
}

export default Dishes