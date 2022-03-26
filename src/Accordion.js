import React, {useState} from 'react';

const Accordion = ({id, title, info}) => {


    const [showText, setShowText] = useState(false)

  return <section key = {id} className="Accordion">
            <article className="AccordionTopText">
                <h4>{title} </h4>
                <button type="button" className="AccordionBtn" onClick={()=> setShowText(!showText)}> {showText ? '-': '+'} </button>
            </article>
            <article className="AccordionBtmText">
            {showText && <p>{info} </p>}
            </article>

        </section>;
};

export default Accordion;
