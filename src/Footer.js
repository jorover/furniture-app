import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footerSection">
        <div className="Container">
            <section className="footerContent">
                <article className="CompLogo">
                    <p> RF </p>
                </article>

                <nav className="footerNav">
                    <ol className="footerMenu">
                    <li>
                                <Link style={Links} to="/newsletter"> Newsletter </Link>
                            </li>
                            <li>
                                <Link style={Links} to="/blog"> Blog </Link>
                            </li>
                            <li>
                                <Link style={Links} to="/privacy"> Privacy & Cookies </Link>
                            </li>
                            <li>
                                <Link style={Links} to="/terms"> Terms of Use  </Link>
                            </li>
                    </ol>
                </nav>
            </section>

            <p className="footerCopy"> &copy; 2021 RF INC </p>
        </div> 
    </footer>
  )
}


const Links = {
    color:'#fff',
    textDecoration: 'none'

}

export default Footer