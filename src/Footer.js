import React from 'react'

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
                        <li> NewsLetter </li>
                        <li>  Blog </li>
                        <li> Privacy & Cookies </li>
                        <li> Terms of Use </li>
                        <li> Contact Us </li>
                    </ol>
                </nav>
            </section>

            <p className="footerCopy"> &copy; 2021 RF INC </p>
        </div> 
    </footer>
  )
}

export default Footer