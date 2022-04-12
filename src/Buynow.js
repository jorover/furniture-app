import React from 'react'
import { buyNowData } from './BuynowData';
import EachProduct from './EachProduct';




const Buynow = () => {
  return (
    <section className="buyNowProductsSection">

            <article className="buyNowTopText TopText">
                  <h3> Popular Products </h3>
                  <p> Find your perfect Match </p>
              </article>

            <section className="Container buyNowProductsContent">
                    {
                        buyNowData.map(eachItem => {
                            const {id, img, productName, priceOne, priceTwo, description, addToCartIcon, addToCartTitle, seenTitle, seenIcon} = eachItem;
                            return (
                                <EachProduct
                                key={id}
                                id={id}
                                img={img}
                                productName={productName}
                                priceOne ={priceOne}
                                priceTwo={priceTwo}
                                description={description} 
                                addToCartIcon={addToCartIcon}
                                addToCartTitle={addToCartTitle}
                                seenTitle={seenTitle}
                                seenIcon={seenIcon}/>

                            )
                        })
                    }
            </section>

  </section>
  )
}

export default Buynow