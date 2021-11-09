import './style.css'
import Product from './components/Product'
import { products } from './products'

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="grid col-4 col-md-2 col-sm-1 mt-1" id="products">
          {
            products.map((item, index) => {
              return(
                <Product
                  key={ index }
                  name={ item.name }
                  img={ item.img }
                  price={ item.price }
                  background={ item.background }
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
