import React from 'react'
import { buyNowData } from './BuynowData';




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
                            const {id, img, productName, priceOne, priceTwo, description, loveIcon, loveIconTitle, seenTitle, seenIcon, addToCartIcon, addToCartTitle} = eachItem;
                            return (<article key={id} className="buyNowProducts">
                                        <figure className="buyNowCardImg">
                                            <img src={img} className="cart-img"></img>
                                            <figcaption className="innerProductsTitleText innerBuyNowTitleText">
                                                <h4> {productName} </h4>
                                                <article className="innerProductsText innerBuyNowText">
                                                    <p className="priceOne">{priceOne}</p>
                                                    <p className="priceTwo">{priceTwo}</p>
                                                </article>
                                            </figcaption>
                                        </figure>

                                        <article className="buyNowIconText">

                                            <article className="productsIcon buyNowCartIcon">
                                                <article className="IconText"> 
                                                    <p> {addToCartTitle} </p>
                                                </article>

                                                <article className="IconCircle carttIcon"> 
                                                    <img src={addToCartIcon}  
                                                    className="snipcart-add-item"
                                                    data-item-id={id}                              
                                                    data-item-image={img}
                                                    data-item-description = {description}
                                                    data-item-name={productName}
                                                    data-item-price={priceTwo} />
                                                </article>
                                            </article>
                                        </article>

                                </article>

                            )
                        })
                    }
            </section>

  </section>
  )
}

export default Buynow