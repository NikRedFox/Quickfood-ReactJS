import './style.css'
import ShoppingOrder from '../../assets/Online-shopping-order.svg'
import Payment from '../../assets/Payment-processed.svg'
import Delivery from '../../assets/Delivery.svg'
import { useEffect, useRef, useState } from 'react'



const WhyUs =()=>{
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const [foodCount, setFoodCount] = useState(0)
    const [clientsCount, setClientsCount] = useState(0)
    const [ordersCount, setOrdersCount ] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true)
            }, {threshold: 0.6}
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
            return() =>{
                if(sectionRef.current) observer.unobserve(sectionRef.current)
            }
    }, [])

    useEffect(() =>{
        if (!visible) return

        let food = 0, clients = 0, orders = 0

        const foodInterval = setInterval(() =>{
            food +=1
            setFoodCount(food)
            if (food >= 40) clearInterval(foodInterval)
        }, 20)

        const clientsInterval = setInterval(() =>{
            clients += 10
            setClientsCount(clients)
            if(clients >= 600) clearInterval(clientsInterval)
        }, 20)

        const ordersInterval = setInterval(() =>{
            orders += 100
            setOrdersCount(orders)
            if(orders >= 5000) clearInterval(ordersInterval)
        }, 30)

        return() =>{
            clearInterval(foodInterval)
            clearInterval(clientsInterval)
            clearInterval(ordersInterval)
        }
    }, [visible])

    return(
        <article className="why-bg" ref={sectionRef}>
            <div className="why-container">
                <h2>Why chose us?</h2>
                <p>We offer delicious and healthy foods, quick payment and we deliver fast.</p>
            </div>

            <div className="why-img-container">
                <div className={`why-img ${visible ? 'show' : ''}`}>                
                    <img className="order-img" src={ShoppingOrder} alt="Online shop icon" title="Online shop icon" loading="lazy"/>
                    <div className="why-img-text">  
                        <h3>Best Offer</h3>
                        <p>We offer you healthy & delicious food with good hygiene.</p> 
                    </div>   
                </div>

                <div className={`why-img ${visible ? 'show' : ''}`}>
                    <img className="order-img" src={Payment} alt="Payment processed icon" title="Payment processed icon" loading="lazy"/>
                    <div className="why-img-text">  
                        <h3>Easy Payment</h3>
                        <p>Payment is easy and quick to order your foods.</p> 
                    </div>
                </div>
                
                <div className={`why-img ${visible ? 'show' : ''}`}>
                    <img className="order-img" src={Delivery} alt="Delivery icon" title="Delivery icon" loading="lazy"/>
                    <div className="why-img-text">  
                        <h3>Fastest Delivery</h3>
                        <p>Our delivery is super active and run delivery inter state</p> 
                    </div>
                </div>
            </div>

            <div className="why-numbers">
                <div className="why-numbers-text">
                    <h2>{foodCount}+</h2>
                    <p>Food Available</p>
                </div>

                <div className="why-numbers-text">
                    <h2>{clientsCount}+</h2>
                    <p>Happy Clients</p>
                </div>

                <div className="why-numbers-text">
                    <h2>{ordersCount >= 1000 ? `${(ordersCount / 1000).toFixed(0)}k+` : `${ordersCount}+`}</h2>
                    <p>Online Orders</p>
                </div>
            </div>
        </article>
    )
}

export default WhyUs