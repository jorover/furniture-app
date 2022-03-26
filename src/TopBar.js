import React, {useState} from 'react';
import menu from '../src/Gallery/menu.png'
import { Link } from 'react-router-dom';




const TopBar = () => {

    const [openCloseMenu, setOpenCloseMenu] = useState(false);

  return (
  <header className="TopBarContainer">
      <div className="Container"> 
        <header className="TopBar">
                <article className="CompLogo">
                    <p> RF </p>
                </article>

                <aside className="NavBarContainer">
                    <nav className="TopNavBar">
                        <ul className="NavMenu">
                            <li>
                                <Link style={Links} to="/"> HOME </Link>
                            </li>
                            <li>
                                <Link style={Links} to="/newsletter"> NEWSLETTER </Link>
                            </li>
                            <li>
                                <Link style={Links} to="/support"> SUPPORT </Link>
                            </li>
                            <li>
                                <Link style={Links} to="/blog"> BLOG </Link>
                            </li>
                        </ul>
                    </nav>

                    <aside className="LogInAddtoCart">                     
                        <button type="button" className="TopBarBtn">
                                <Link style={Links} to="/buynow"> BUY NOW </Link>
                        </button>

                        <p className="snipcart-checkout snipcart-summary" href="#"><a>Cart:<span className="snipcart-total-price">$0.00</span>
                        </a></p>
                    </aside>
                </aside>

                <figure className="hamburgerMenu">
                    <img src={menu} alt="hamburger menu" onClick={()=> setOpenCloseMenu(!openCloseMenu)} />
                    {openCloseMenu ? <nav className="sideMenuContent">
                            <ul className="sideMenuBar">
                                <li>
                                    <Link style={sideLinks} to="/"> HOME </Link>
                                </li>
                                <li>
                                    <Link style={sideLinks} to="/newsletter"> NEWSLETTER </Link>
                                </li>
                                <li>
                                    <Link style={sideLinks} to="/support"> SUPPORT </Link>
                                </li>
                                <li>
                                    <Link style={sideLinks} to="/blog"> BLOG </Link>
                                </li>

                                <li className="snipcart-checkout snipcart-summary" href="#"><a>Cart:<span className="snipcart-total-price">$0.00</span></a></li>
                            </ul>
                        </nav> : console.log('menu Closed')}
                </figure>
        </header>
     </div>
  </header>)
};

const Links = {
    color:'#fff',
    textDecoration: 'none'

}

const sideLinks = {
    color:'#000',
    textDecoration: 'none'

}

export default TopBar;
