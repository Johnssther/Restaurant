import React, { useState } from "react";

const Product = ({img, price, background, balance, name}) => {
    const [count, setCount] = useState(0);

    const numberf = (valor) => {
        return new Intl.NumberFormat().format(valor)
    }

    const removeProduct = () => {
        if(count > 0) {
            setCount(count-1)
            balance(price, '-')
        }
    }
    const addProduct = async () => {
        setCount(count+1)
        balance(price, '+')
    }

    return(
        <div className="card" style={{background}}>
            <div className="img">
                <img src={img} alt=""></img>
                <p className="product_name">{name}</p>
            </div>
            <div className="price">
                <h3>$ {numberf(price)}</h3>
                <p> (Total: $ {numberf(price*count)}) </p>
            </div>
            <div className="options">
                <button className={`${count === 0 ? 'btn-disabled':'btn'}`} onClick={() => removeProduct()} disabled={count === 0 ? true:false}>-</button>
                {count} uds.
                <button className="btn" onClick={() => addProduct()}>+</button>
            </div>
        </div>
    );
}

export default Product