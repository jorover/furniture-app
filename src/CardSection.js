import React from 'react';
import cardData from './CardSectionData';

const CardSection = () => {
  return <main className="CardSection">

      <div className="Container"> 
        <section className="CardContent"> 
            {
                cardData.map(eachCard => {
                    const {id, img, smallImg, Author, CardText} = eachCard;
                    return <article key={id} className="Card">
                        <img src={img} className="CardTopImg"/>
                        <h4> {CardText}</h4>
                        <article className="CardBtmSection">
                            <img src={smallImg} className="CardBtmImg"/>
                            <p>{Author}</p>
                        </article>
                    </article>
                })
            }
        </section>
      </div>


  </main>;
};

export default CardSection;
