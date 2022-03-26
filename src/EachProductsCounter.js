import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from './ContextAPI';

const EachProductsCounter = ( {productName} ) => {

const [itemCount, setItemCount] = useState(1);

const {addToCart, setAddToCart, setTotalAmount } = useContext(AppContext);




const addTotalValue = () => {
    let totalValue = JSON.parse(localStorage.getItem('totalAmounts'));
    let mainTotalValue = totalValue + 149;
    setItemCount(itemCount + 1);
    localStorage.setItem('itemCount', itemCount + 1);
    setTotalAmount(mainTotalValue);
    localStorage.removeItem('totalAmounts');
    localStorage.setItem('totalAmounts', mainTotalValue);

    updateItems(productName);
    
}

const subtractTotalValue = (itemCount) => {
    let totalValue = JSON.parse(localStorage.getItem('totalAmounts'));
        if(itemCount === 1){
            itemCount = 1;
            totalValue = totalValue = 0;
        } else {
            setItemCount(itemCount - 1);
            totalValue = totalValue - 149;
            setTotalAmount(totalValue);
            localStorage.setItem('itemCount', itemCount - 1);
            localStorage.removeItem('totalAmounts');
            localStorage.setItem('totalAmounts', totalValue)
        }   
    
}



const updateItems = (pName) => {
    let allItems = JSON.parse(localStorage.getItem('All Items'));
    for (let index = 0; index < allItems.length; index++) {
        allItems[index].itemCounter = allItems[index].itemCounter + 1;     
    }

    localStorage.setItem('All Items', JSON.stringify(allItems))

}



  return (
    <section className="productsCounter">
        <p onClick = {()=> subtractTotalValue(itemCount)}> - </p>
        <p> {itemCount} </p>
        <p onClick= {()=> addTotalValue(productName)}> + </p>
    </section>
  )
}

export default EachProductsCounter