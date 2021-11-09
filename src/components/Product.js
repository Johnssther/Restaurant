import React, { useState } from "react";

const Product = ({img, price, background, name}) => {
    const [count, setCount] = useState(0);

    const numberf = (valor) => {
        return new Intl.NumberFormat().format(valor)
    }

    const removeProduct = () => {
        if(count > 0) {
            setCount(count-1)
        }
    }
    const addProduct = () => {
        setCount(count+1)
    }

    return(
        <div class="card" style={{background}}>
            <div class="img">
                <img src={img} alt=""></img>
            </div>
            <div class="price">
                <h3>$ {numberf(price)}</h3>
                <p> (Total: $ {numberf(price*count)}) </p>
            </div>
            <div class="options">
                <button className={`${count === 0 ? 'btn-disabled':'btn'}`} onClick={() => removeProduct()} disabled={count === 0 ? true:false}>-</button>
                {count} uds.
                <button className="btn" onClick={() => addProduct()}>+</button>
            </div>
        </div>
    );
}

export default Product