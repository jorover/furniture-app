import React from 'react'
import { Link } from 'react-router-dom';

const Interior = () => {
  return (
    <section className="InteriorSection">

            <article className="TopText firstTopText">
                  <h3> Interior inspiration </h3>
                  <p> Create an inviting space for yourself and family </p>
              </article>

              <figure className="InteriorGallery">
                    <figure className="InteriorlgImg firstInteriorImg">
                        <button className="Btn interiorlgBtn"> 
                        <Link style={Links} to="/buynow"> 
                                Open up for easy living
                          </Link>
                        </button>
                    </figure>

                    <figure className="InteriorsmImg SecondInteriorImg">
                        <button className="Btn interiorSmBtn">
                            <Link style={Links} to="/buynow"> 
                                Open up for easy living
                          </Link> 
                        </button>
                    </figure>
           
                    <figure className="InteriorlgImg thirdInteriorImg">
                        <button className="Btn interiorlgBtn">
                        <Link style={Links} to="/buynow"> 
                                Open up for easy living
                          </Link>
                        </button>
                    </figure>

                    <figure className="InteriorsmImg fourthInteriorImg">
                        <button className="Btn interiorSmBtn">
                        <Link style={Links} to="/buynow"> 
                                Open up for easy living
                          </Link>
                        </button>
                    </figure>

                </figure>

    </section>
  )
}

const Links = {
    color:'#fff',
    textDecoration: 'none'

}

export default Interior