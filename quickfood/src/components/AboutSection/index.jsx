import './style.css'
import Churrasco from '../../assets/Churrasco.svg'
import { use, useEffect, useRef, useState } from 'react'

const AboutUs =()=>{
    const sectionRef = useRef(null)
    const indexRef = useRef(0)
    const intervalRef = useRef(null)
    const [visible, setVisible] =useState(false)
    const [displayedText, setDisplayedText] = useState('')
    const [showCursor, setShowCursor] = useState(true)

    const fullText = `The best way to make it works is to have a smart list of all the restaurants and cuisines organized by location, type of food (fast food, or more gourmet dishes), food preferences (vegetarian, meat lovers, any special diets like gluten-free diets), different nation’s cuisine, etc.`

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(entry.target)
                }
            }, {threshold: 0.5}
        )

        if(sectionRef.current) observer.observe(sectionRef.current)
        
        return()=>{
            if(sectionRef.current) observer.unobserve(sectionRef.current)
        }
    }, [])    

    useEffect(() => {
        if (!visible || intervalRef.current) return

        intervalRef.current = setInterval(() => {
            const index = indexRef.current
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText.charAt(index))
                indexRef.current += 1
            } else {
                clearInterval(intervalRef.current)
                setShowCursor(false)
            }
            }, 12)

        return () => clearInterval(intervalRef.current)
    }, [visible])

    return(
        <section class="about-container" ref={sectionRef}>
            <div class="about-text">
                <h2>About Us</h2>
                <p>{displayedText} {showCursor && <span className='cursor'></span>}</p>
                <button>Learn More</button>
            </div>

            <div>
                <img className={`churrasco ${visible ? 'show' : ''}`} src={Churrasco} alt="Imagem de churrasco" title="Imagem de churrasco" loading="lazy" />
            </div>
        </section>
    )
}

export default AboutUs