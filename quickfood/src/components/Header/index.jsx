import './style.css'
import Logo from '../../assets/QUICKFOOD-Icon.svg'
import Search from '../../assets/Search-icon.svg'
import Cart from '../../assets/Shopcart-icon.svg'
import { useState } from 'react'


const Header =({darkTheme, setDarkTheme})=>{
    const[menuOpen, setMenuOpen] =useState(false)

    return(
        <header>
            <div className="header_icon">
                <img src={Logo} alt="Logo empresa" title="Logo empresa"/>
            </div>

            <button className='hamburguer' onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            
            <nav className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="header-links">
                    <li><a href="#" className="header-item"><span className="green-text">Home</span></a> </li>             
                    <li><a href="#" className="header-item">Product</a></li>
                    <li><a href="#" className="header-item">Contact us</a></li>
                    <li><a href="#" className="header-item">About</a></li>          
                </ul>  

                <div className="dropdown-buttons">
                    <div className="header-button-iconbox">
                        <button className="header-button-icon">
                            <img src={Search} alt="Search icon" title="Search icon" />
                        </button>
                        <button className="header-button-icon">
                            <img src={Cart} alt="Shopcart icon" title="Shopcart icon"/>
                        </button>
                    </div>            
                    
                    <button className="header-button-login">Login</button>
                    <button className='theme-toggle' onClick={() => setDarkTheme((prev) => !prev)}>{darkTheme ? '🌙' : '☀️'}</button>            
                </div>

            </nav>
            
            <div className="header-button-container">
                <div className="header-button-iconbox">
                    <button className="header-button-icon">
                        <img src={Search} alt="Search icon" title="Search icon" />
                    </button>
                    <button className="header-button-icon">
                        <img src={Cart} alt="Shopcart icon" title="Shopcart icon"/>
                    </button>
                </div>            
                
                <button className="header-button-login">Login</button>
                <button className='theme-toggle' onClick={() => setDarkTheme((prev) => !prev)}>{darkTheme ? '🌙' : '☀️'}</button>
            </div>

            
            
        </header>
    )
}

export default Header