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
                        <button className="btn interiorlgBtn"> 
                        <Link to="/buynow"> 
                                Open up for easy living
                          </Link>
                        </button>
                    </figure>

                    <figure className="InteriorsmImg SecondInteriorImg">
                        <button className="btn interiorSmBtn">
                            <Link to="/buynow"> 
                                Open up for easy living
                          </Link> 
                        </button>
                    </figure>
           
                    <figure className="InteriorlgImg thirdInteriorImg">
                        <button className="btn interiorlgBtn">
                        <Link to="/buynow"> 
                                Open up for easy living
                          </Link>
                        </button>
                    </figure>

                    <figure className="InteriorsmImg fourthInteriorImg">
                        <button className="btn interiorSmBtn">
                        <Link to="/buynow"> 
                                Open up for easy living
                          </Link>
                        </button>
                    </figure>

                </figure>

    </section>
  )
}


export default Interior