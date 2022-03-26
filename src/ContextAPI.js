import React, {useState} from 'react'


const AppContext = React.createContext();

const ContextAPI = ( {children} ) => {

  const [addToCart, setAddToCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addTotalPrice = () => {
    const totalItemPrice = JSON.parse(localStorage.getItem('All Items'));
    const totalPrices = totalItemPrice.map(item => {return item.priceTwo});
    let allNum = [];
    totalPrices.forEach(item => {    
       let eachNum = item.replace('$', '');
       return allNum.push(parseFloat(eachNum));
    })

    if(allNum.length === 0){
        setTotalAmount(0)
        localStorage.setItem('totalAmounts', 0);
    } else {
      let total = allNum.reduce((total, value) => {return total + value});
      setTotalAmount(total);
      localStorage.setItem('totalAmounts', total);
    }
}


  return (
    <AppContext.Provider value={ { 
      addToCart, 
      setAddToCart, 
      totalAmount, 
      setTotalAmount, 
      addTotalPrice} } >
      {children}
    </AppContext.Provider>
  )
}

export {ContextAPI, AppContext}