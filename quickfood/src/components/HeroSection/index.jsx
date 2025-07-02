import './style.css'
import FoodBowl from '../../assets/Food-bowl.svg'

const Hero =()=>{
    return(
        <main>
            <div className="healthy-container">
                <h1>We deliver <span className="green-text">Healthy & Delicious</span> food</h1>
                <p>Order online or book a table. We are always ready to fulfill your demand.You would get fastest delivery you could ever imagine. Keep in touch with us to take your delicious foods.</p>
                <div className='button-container'>
                    <button className="main-button-order">Order Now</button>
                    <button className="main-button-explore">Explore Products</button>
                </div> 
            </div>

            <div className="healthy-img"> 
                <img src={FoodBowl} alt="Food bowl image" title="Food bowl image" loading="lazy"/>
            </div>
        </main>
    )
}

export default Hero