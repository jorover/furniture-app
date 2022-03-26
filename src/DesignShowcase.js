import React from 'react'

const DesignShowcase = () => {
  return (
    <section className="designShowcaseSection">
        <div className="Container">
            <article className="designShowcaseContent">
                <h3> Stay in touch </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <form action="#" className="designForm">
                    <input type="email" placeholder="Enter your email" required/>
                    <input type="submit" value="Subscribe Now" className="Btn" />
                </form>
            </article>
        </div>
    </section>
  )
}

export default DesignShowcase