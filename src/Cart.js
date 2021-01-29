import { Link } from 'react-router-dom'
import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import RenderProductCart from "./RenderProductCart"

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ cart }] = useStateValue();

    // const removeFromcart = () => {
    //     // remove the item from the cart
    //     dispatch({
    //         type: 'REMOVE_FROM_cart',
    //         id: id,
    //     })
    // }
    
    //calculate subtotal
    let subtotal = 0;
    cart.map(item => (
        subtotal+=item.price
    ))
    return (
        <div>


            {/* breadcrumb part end*/}
            {/*================Cart Area =================*/}
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* array item: each row = single item */}
                                    {cart.map(item => (
                                        <RenderProductCart
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                    ))}
                                    <tr className="bottom_button">
                                        <td>
                                            {/* onclick event to active the state */}
                                            <Link to={`/cart`}>
                                                <button className="btn_1">Update Cart</button>
                                            </Link>
                                        </td>
                                        <td />
                                        <td />
                                        <td>
                                            <div className="cupon_text float-right">
                                                <a className="btn_1" href="#1">Close Coupon</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td />
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>${subtotal}</h5>
                                        </td>
                                    </tr>
                                    <tr className="shipping_area">
                                        <td />
                                        <td />
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div className="shipping_box">
                                                <ul className="list">
                                                    <li>
                                                        Flat Rate: $5.00
                        <input type="radio" aria-label="Radio button for following text input" />
                                                    </li>
                                                    <li>
                                                        Free Shipping
                        <input type="radio" aria-label="Radio button for following text input" />
                                                    </li>
                                                    <li>
                                                        Flat Rate: $10.00
                        <input type="radio" aria-label="Radio button for following text input" />
                                                    </li>
                                                    <li className="active">
                                                        Local Delivery: $2.00
                        <input type="radio" aria-label="Radio button for following text input" />
                                                    </li>
                                                </ul>
                                                <h6>
                                                    Calculate Shipping
                      <i className="fa fa-caret-down" aria-hidden="true" />
                                                </h6>
                                                <select className="shipping_select">
                                                    <option value={1}>Bangladesh</option>
                                                    <option value={2}>India</option>
                                                    <option value={4}>Pakistan</option>
                                                </select>
                                                <select className="shipping_select section_bg">
                                                    <option value={1}>Select a State</option>
                                                    <option value={2}>Select a State</option>
                                                    <option value={4}>Select a State</option>
                                                </select>
                                                <input className="post_code" type="text" placeholder="Postcode/Zipcode" />
                                                <a className="btn_1" href="#1">Update Details</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to={"/checkoutf"}>

                            <div className="checkout_btn_inner float-right">
                                    <button className="btn_1 checkout_btn_1">Proceed to checkout</button>
                            </div>
                            </Link>

                        </div>
                    </div>
                </div></section>
        </div>

    )
}

export default CheckoutProduct
