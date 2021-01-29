import React from 'react'
import './Product.css'
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from './StateProvider';

export default function RenderProductCart({ id, title, image, price, rating, bought }) {
    //const [value, setValue] = React.useState(2);
    const [{cart},dispatch] = useStateValue();
      //event to update the single item inside cart
        const addToBasket = () => {
            //fire an object ->
            //modify dispatch
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
        // this is a single table row
        <tr>
        <td>
            <div className="media">
                <div className="d-flex">
                    <img src={image} alt="" />
                </div>
                {/* item.title */}
                <div className="media-body">
                    <p>{title}</p>
                </div>
            </div>
        </td>
        <td>
            {/* price */}
            <h5>$ {price}</h5>
        </td>
        <td>
            <div className="product_count">
                                                    {/* <input type="text" value="1" min="0" max="10" title="Quantity:"
                    class="input-text qty input-number" />
                <button
                    class="increase input-number-increment items-count" type="button">
                    <i class="ti-angle-up"></i>
                </button>
                <button
                    class="reduced input-number-decrement items-count" type="button">
                    <i class="ti-angle-down"></i>
                </button> */}
                {/* <span className="input-number-decrement"> <i className="ti-minus" /></span>
                <input className="input-number" type="text" defaultValue={1} min={0} max={10} />
                <span className="input-number-increment"> <i className="ti-plus" /></span>
             */}
             <h5>1</h5>
            </div>
        </td>
        <td>
            {/* total, in simple case we put the price */}
            <h5>$ {price}</h5>
        </td>
    </tr>
   
   )
}
