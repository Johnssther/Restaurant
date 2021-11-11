import { useState } from 'react';
import Layout from "../layout/Layout";
import Product from "src/views/products/components/product/Product";
import products from 'src/products';

const Products = () => {
  const [saldo, setSaldo] = useState(0);
  const balance = (balanceN, op) => {
    if (op === '+') {
      setSaldo(saldo + balanceN);
    }
    if (op === '-') {
      setSaldo(saldo - balanceN);
    }
  };
  return (
    <Layout>
      <div className="grid col-4 col-md-2 col-sm-1 mt-1" id="products">
        {
          products.map((item, index) => {
            return (
              <Product
                key={index}
                name={item.name}
                img={item.img}
                price={item.price}
                background={item.background}
                balance={balance}
              />);
          })
        }
      </div>
    </Layout>
  );
}

export default Products
