import React from 'react'
import designData from './DesignData'
import DesignShowcase from './DesignShowcase'

const Design = () => {
  return (
    <section className="DesignSection">
            <article className="TopText firstTopText">
                  <h3> Design stories </h3>
                  <p> Explore and unfold thoughts.</p>
              </article>

              <section className="DesignCardsSection">
                    {
                        designData.map(item => {
                            const {id, img, textTitle, text} = item;
                            return (
                                <figure key={id} className="DesignCard">
                                    <img src={img}alt="designImage"/>
                                    <figcaption className="DesignCardText">
                                        <p> {text} </p>
                                        <h5> { textTitle} </h5>
                                    </figcaption>
                                </figure>
                            )
                        })
                    }
              </section>

              <DesignShowcase />
    </section>
  )
}



export default Design