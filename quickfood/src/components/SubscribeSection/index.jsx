import './style.css'

const Subscribe =()=>{
    return(
        <section class="subscribe-bg">
            <div class="subscribe-container">
                <div class="subscribe-text">
                    <h2>Subscribe to our Newsteller</h2>
                    <p>Join Us and Get Update on our Available Product.</p>
                </div>
                <form class="subscribe-form">
                    <input class="subscribe-input" type="email" name="email" id="email" placeholder="Enter your email address" required/>
                    <button class="subscribe-button" type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Subscribe