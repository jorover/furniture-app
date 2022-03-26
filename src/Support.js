import React from 'react';
import AccordionData from './AccordionData';
import Accordion from './Accordion';

const Support = () => {
  return <div>

        <div className="Container SuportContent">
        <figure className="InnerSectionImg InnerSectionSecondImg"></figure>
        <article className="NewsletterText">
                <h1> Frequently Asked Questions </h1>
                <p className="Underline"> </p>

        <section className ="AccordionContainer">
            {
                AccordionData.map(eachItem => {
                    const {id, title, info } = eachItem;
                    return (
                        <article key={id} className="AccordionContainer">
                            <Accordion id={id} title={title} info={info}/>
                        </article>
                    )
                })
            }
        </section>
        </article>

        </div>
      
  </div>;
};

export default Support;
