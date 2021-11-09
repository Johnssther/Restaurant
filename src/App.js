import { useState } from 'react'
import './style.css'
import Product from './components/product/Product'
import Header from './components/header/Header'
import { products } from './products'

function App() {
  const [saldo, setSaldo] = useState(0);
  const balance = (balance, op) => {
    if (op === '+') {
      setSaldo(saldo + balance);  
    }
    if (op === '-') {
      setSaldo(saldo - balance);  
    }
  }
  return (
    <div className="App">
      <Header 
        balance={ saldo }
      />
      <div className="container">
        <div className="grid col-4 col-md-2 col-sm-1 mt-1" id="products">
          {
            products.map((item, index) => {
              return(
                <Product
                  key={ index }
                  name={ item.name }
                  img={ item.img }
                  price={ item.price }
                  background={ item.background }
                  balance={balance}
                  name={item.name}
                />
              )
            })
          }
        </div>
    </div>
    </div>
  );
}

export default App;
