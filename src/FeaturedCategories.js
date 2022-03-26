import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedItems = () => {
  return <section className="AboutUsSection">

              <article className="TopText firstTopText">
                  <h3> Featured Categories </h3>
                  <p> We just keep things minimal.</p>
              </article>

            <section className="AboutContent">
                  <figure className="AboutUsImg AboutFirstImg">
                    <figcaption className="AboutUsImgContent">  
                        <button className="btn aboutUsBtn"> 
                          <Link style={Links} to="/buynow"> 
                            EXPLORE 
                          </Link>
                        </button>
                    </figcaption>
                  </figure>
                  <figure className="AboutUsImg AboutSecondImg">
                  <figcaption className="AboutUsImgContent">  
                    <button className="btn aboutUsBtn"> 
                          <Link style={Links} to="/buynow"> 
                            EXPLORE 
                          </Link>
                        </button>
                    </figcaption>
                  </figure>
                  <figure className="AboutUsImg AboutThirdImg">
                  <figcaption className="AboutUsImgContent">  
                    <button className="btn aboutUsBtn"> 
                          <Link style={Links} to="/buynow"> 
                            EXPLORE 
                          </Link>
                        </button>
                    </figcaption>
                  </figure>
            </section>

  </section>;
};



const Links = {
  color:'#fff',
  textDecoration: 'none'

}


export default FeaturedItems;
