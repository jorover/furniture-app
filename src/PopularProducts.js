import React from 'react';
import { productsData } from './PopularProductsData';

const PopularProducts = () => {
  return <section className="PopularProductsSection">

            <article className="TopText">
                  <h3> Popular Products </h3>
                  <p> Find your perfect Match </p>
              </article>

            <section style={productsGrid} className="PopularProductsContent">
                    {
                        productsData.map(eachItem => {
                            const {id, img, productName, priceOne, priceTwo, loveIcon, loveIconTitle, seenTitle, seenIcon, addToCartIcon, addToCartTitle} = eachItem;
                            return (<article key={id} className="Products">
                                        <figure className="ProductsCardImg">
                                            <img src={img}></img>
                                            <figcaption className="innerProductsTitleText">
                                                <h4> {productName} </h4>
                                                <article className="innerProductsText">
                                                    <p className="priceOne">{priceOne}</p>
                                                    <p className="priceTwo">{priceTwo}</p>
                                                </article>
                                            </figcaption>
                                        </figure>

                                        <article className="ProductsIconText">
                                            <article className="productsIcon">
                                                <article className="IconText"> 
                                                    <p> {loveIconTitle} </p>
                                                </article>

                                                <article className="IconCircle"> 
                                                   <img src={loveIcon} />
                                                </article>
                                    
                                            </article>

                                            <article className="productsIcon">
                                                <article className="IconText"> 
                                                    <p> {seenTitle} </p>
                                                </article>

                                                <article className="IconCircle"> 
                                                <img src={seenIcon} />
                                                </article>
                                            </article>

                                            <article className="productsIcon cartProductsIcon">
                                                <article className="IconText"> 
                                                    <p> {addToCartTitle} </p>
                                                </article>

                                                <article className="IconCircle carttIcon"> 
                                                    <img src={addToCartIcon} />
                                                </article>
                                            </article>

                                        </article>

                                </article>

                            )
                        })
                    }
            </section>

  </section>;
};



const productsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    width: '90%',
    margin:'auto',
    minHeight: '700px'
}

export default PopularProducts;


