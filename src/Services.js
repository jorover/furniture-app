import React from 'react';
import Data from './ServicesData';

const Services = () => {
  return <section className="ServicesSection">

      <div className="Container"> 
        <header className="SerivesContent"> 

            {
                Data.map(eachItem => {
                    const {id, img, IconText, IconInfo} = eachItem;

                    return <article key={id} className="Services">
                        <img src={img} />
                        <h4> {IconText}</h4>
                        <p> {IconInfo}</p>
                    </article>
                })
            }

        </header>

    </div>

    <section className="ServicesBgImg"> </section>

  </section>;
};

export default Services;
