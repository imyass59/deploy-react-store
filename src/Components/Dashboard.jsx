import React, { useState,useEffect } from 'react'
import Products from './Products'
import axios from 'axios';


export default function Dashboard() {
  const [Loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const obj = {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  };
  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
      fetchData();
  
  }, []);
  return (
    <>
        <section className='items'>
            {
             (Loading)
             ?
              <div>
                Loading.....
              </div>
              :
              products.map((item) =>
              {
                <Products items={{...item}} key={item.id} />
                //<Products image={product.image} title={product.title} desciption={product.desciption} price={product.price} key={product.id} />
              })
            }
        </section>
    </>
  )
}
