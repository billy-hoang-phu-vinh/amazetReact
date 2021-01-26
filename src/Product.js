import React from 'react'
import './Product.css'
import Rating from '@material-ui/lab/Rating';

export default function Product({ id, title, image, price, rating }) {
    //const [value, setValue] = React.useState(2);

    return (
        <div>
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
                 <button className="btn_3">Add to cart</button>
            </div>
        </div>
    )
}
