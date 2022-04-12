import React from 'react'
import { useParams } from 'react-router'
import { buyNowData } from './BuynowData';


const ProductDetails = () => {

    const [eachFurniture, setEachFurniture] = React.useState([]);
    const [cartQty, setCartQty] = React.useState(1);

    const {id} = useParams();

    const newId = parseFloat(id)

    const displayProduct = () => {
        const allData = buyNowData.find(item => {
            return item.id === newId;
        })

        setEachFurniture([allData]);
    }


    React.useEffect(() => {

       displayProduct();
    }, [])


  return (
    <section className="Container productDisplay">

{
            eachFurniture.map(eachItem => {
                const {id, img, productName, priceTwo, description} = eachItem;

                return (
                    <section key={id} className="eachProductContainer">

                        <figure className="productImgContainer">
                            <img src={img} alt={productName} />
                        </figure>

                        <aside className="eachProductDetails">

                            <h3> {productName} </h3>
                            <p className="cartPrice"> ${priceTwo} </p>

                            <p className="quantityLabel"> Quantity: </p>
                            <input type="number" 
                            className="quantity"
                            value={cartQty} 
                            onChange= {(e) => setCartQty(e.target.value)}/>
                            <button
                                className="snipcart-add-item addToCartBtn"
                                data-item-quantity={cartQty}
                                data-item-id={id}
                                data-item-price={priceTwo}
                                data-item-description={description}
                                data-item-image={img}
                                data-item-name={productName}>
                                Add to cart
                        </button>

                            <article className="description">
                                <h3> Product Info </h3>
                                <p> {description} </p>
                            </article>
                        </aside>

                    </section>
                )
            })
        }



    </section>
  )
}

export default ProductDetails