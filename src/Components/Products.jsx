import React from 'react'
import './style/Product.css';

export default function Products({item}) {
    //const product = props.items;
  return (
    <>
        <div className='product'>
            <div className='image'>
                <img src={item.image} />
            </div>
            <div className='info'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <span>{item.price}$</span>
                <p><button>Add to Cart</button></p>
            </div>
        </div>
    </>
  )
}
