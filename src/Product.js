import React from 'react'
import './Product.css'
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from './StateProvider';

export default function Product({ id, title, image, price, rating }) {
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
        <div className="p__card">
            <div className="product">
                <div className="product__title">
                    <p>{title}</p>
                </div>
                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    <Rating name="read-only" value={rating} readOnly />
                </div>
                {/* <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>
                            (
                               <p>  </p> 
                            )
                        )
                    }
                </div>
                 */}
                <div className="product__image_zone">
                    <img className="product__image" src={image} alt="" />
                </div>
                 <button className="btn_3" onClick={addToBasket}>Add to cart</button>
            </div>
        </div>
    )
}
