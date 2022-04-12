import React, {useState} from 'react';

const Newsletter = () => {
    const [formInput, setFormInput] = useState('');

    const NewsletterSubmit = (e) => {
        e.preventDefault();
        setFormInput('')
    }

  return <div className="NewsletterSection">

    <article className="NewsletterText">
          <h1> Subscribe for our Monthly Newsletters </h1>
          <p className="Underline"> </p>
          <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
          <form className="NewsletterForm" onSubmit={NewsletterSubmit}>
              <input type="text" placeholder="Enter Email Address" value ={formInput} onChange={(e) => setFormInput(e.target.value)} required/>
            <button type="submit" className="btn newsLetterBtn" onSubmit={NewsletterSubmit}> SUBCRIBE NOW </button>
          </form>
      </article>

        <figure className="InnerSectionImg InnerSectionFirstImg"></figure>


  </div>;
};

export default Newsletter;
