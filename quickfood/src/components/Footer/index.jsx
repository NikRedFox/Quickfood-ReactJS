import './style.css'
import LogoFooter from '../../assets/Logo-footer.svg'
import LogoTwitter from '../../assets/Twitter.svg'
import LogoInsta from '../../assets/Instagram.svg'
import LogoFace from '../../assets/Facebook.svg'
import { useEffect } from 'react'


const Footer =()=>{

    useEffect(() => {
    const items = document.querySelectorAll('.footer-item');
    items.forEach(item => item.classList.add('appear'));
    }, []);

    return(
        <footer className="footer-bg">
            <div className="footer-container">
                <div className="footer-quickfood">
                    <img src={LogoFooter} alt="Logo QuickFood" title="Logo QuickFood" loading="lazy"/>
                    <div className="footer-social">
                        <img src={LogoTwitter} alt="Logo Twitter" title="Logo Twitter" loading="lazy"/>
                        <img className="insta-logo-fix" src={LogoInsta} alt="Logo Instagram" title="Logo Instagram" loading="lazy"/>
                        <img src={LogoFace} alt="Logo Facebook" title="Logo Facebook" loading="lazy"/>
                    </div>
                </div>

                <div className="footer-services">
                    <div className="footer-list">
                        <h2>Company</h2>
                        <nav>
                            <ul className="footer-links">
                                <li><a className="footer-item">Home</a></li>
                                <li><a className="footer-item">Product</a></li>
                                <li><a className="footer-item">About Us</a></li>
                                <li><a className="footer-item">Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-list">
                        <h2>Help</h2>
                        <nav>
                            <ul className="footer-links">
                                <li><a className="footer-item">Help</a></li>
                                <li><a className="footer-item">FAQ</a></li>
                                <li><a className="footer-item">Support</a></li>                            
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-list">
                        <h2>Terms</h2>
                        <nav>
                            <ul className="footer-links">
                                <li><a className="footer-item">Privacy Policy</a></li>
                                <li><a className="footer-item">Terms of service</a></li>                            
                            </ul>
                        </nav>
                    </div>
                </div>            
            </div>

            <div className="footer-bottom">
                <div className="footer-line"></div>
                <p>All rights reserved@2022</p>
            </div>
        </footer>
    )
}



export default Footer