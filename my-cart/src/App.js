import './App.css';
import Data from './Components/back/data/Data';
import Header from './Components/front/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './Components/front/header/routes/MyRoutes';
import { useEffect, useState } from 'react';

function App() {
  const initialState = JSON.parse(localStorage.getItem('cartItems')) || [];

  const { productItems } = Data;

  const [cartItems, setCartItems] = useState(initialState);

  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item))
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      )
    }
  }

  const cartClear = () => {
    setCartItems([]);
  }

  return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <MyRoutes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} cartClear={cartClear} priceTotal={priceTotal} setPriceTotal={setPriceTotal}/>
      </Router>
    </div>
  );
}

export default App;
