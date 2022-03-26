import React, {useState} from 'react'
import EachProductsCounter from './EachProductsCounter'

const CartProducts = ( { productName, img, priceTwo, removeCartItems }) => {


  return (
    <section className="productsInCart">
        <figure className="productsImg">
            <img src={img} alt="cart Img"/>
        </figure>
        <section className="productsDetails">
            <article className="productsPrice">
                <h5> {productName} </h5>
                <p className="eachPrice"> {priceTwo} </p>
            </article>

            <EachProductsCounter productName = {productName} />
        </section>

        <aside className="productsDelete">
            <button type="button" onClick={removeCartItems}> X </button>
        </aside>
    </section>
  )
}

export default CartProducts