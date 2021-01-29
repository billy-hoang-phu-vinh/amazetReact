import React from 'react'
import { useStateValue } from '../StateProvider';

export default function CheckoutSubTotal({ id, title, image, price, rating, bought }) {
    //const [value, setValue] = React.useState(2);
    const [{cart},dispatch] = useStateValue();
      //event to add to basket
        const addToBasket = () => {
            //fire an object ->
            dispatch({
            type: "ADD_TO_CART",
            item:{
                id:id,
                title: title,
                image: image,
                price:price,
                rating:rating,
            }
            });
        }
    return (
                 <li>
                  <a className="checkout_item" href="#1">{title}
                  {/* quantity will be developed in the furure */}
                    {/* <span className="middle">x 01</span> */}
                    <span className="last">${price}</span>
                  </a>
                </li>
        )
}
