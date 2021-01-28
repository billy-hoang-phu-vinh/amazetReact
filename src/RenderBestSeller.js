import React, { useState, useEffect } from 'react';
import Product from './Product'

function RenderBestSeller(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // get data from server
  useEffect(() => {
      fetch("http://furnireactsupport.herokuapp.com/products/best")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true); // set the status is true
            setItems(result); //set item = result
            console.log(`result`)
            console.log(result)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="home__product">
          {items.map(item => (
          <Product id={item._id} price={item.price} title={item.title} image={item.image} rating={item.rating} bought={item.bought} />
          ))}
      </div>

      );
    }
}
export default RenderBestSeller