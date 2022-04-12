import React from 'react'
import { Link } from 'react-router-dom'

const EachProduct = ({id, img, productName, priceOne, priceTwo, description, addToCartIcon, addToCartTitle, seenTitle, seenIcon}) => {
  return (
            <article className="buyNowProducts">
                                        <figure className="buyNowCardImg">
                                            <img src={img} className="cart-img"></img>
                                            <figcaption className="innerProductsTitleText innerBuyNowTitleText">
                                                <h4> 
                                                   {productName}
                                                </h4>
                                                <article className="innerProductsText innerBuyNowText">
                                                    <p className="priceOne">{priceOne}</p>
                                                    <p className="priceTwo">{priceTwo}</p>
                                                </article>
                                            </figcaption>
                                        </figure>

                                        <article className="buyNowIconText">

                                            <article className="productsIcon buyNowCartIcon">    
                                                <article className="IconText"> 
                                                    <p> {seenTitle} </p>
                                                </article>

                                                <article className="IconCircle">
                                                    <Link to={`/product/${id}`} className="productLink"> 
                                                        <img src={seenIcon} />
                                                    </Link> 
                                                    </article>
                                            </article>
                                        </article>

                                </article>
  )
}

export default EachProduct