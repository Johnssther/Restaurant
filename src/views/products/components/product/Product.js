import React, { useState } from 'react';

const Product = (props) => {
  const { img, price, background, balance, name } = props;
  const [count, setCount] = useState(0);
  const numberf = (valor) => new Intl.NumberFormat().format(valor);
  const removeProduct = () => {
    if (count > 0) {
      setCount(count - 1);
      balance(price, '-');
    }
  };
  const addProduct = async () => {
    setCount(count + 1);
    balance(price, '+');
  };

  return (
    <div className="card">
      <div className="img">
        <img src={img} alt={name} />
        <p className="product_name">{name}</p>
      </div>
      <div className="price">
        <h3>{`$ ${numberf(price)}`}</h3>
        <p>{`(Total: $ ${numberf(price * count)})`}</p>
      </div>
      <div className="options" style={{background:`${count && 'orange'}`}}>
        <button type="button" className={`${count ? 'btn' : 'btn-disabled'}`} onClick={() => removeProduct()}>-</button>
        {`${count} uds`}
        <button type="button" className="btn" onClick={() => addProduct()}>+</button>
      </div>
    </div>
  );
};

export default Product;
