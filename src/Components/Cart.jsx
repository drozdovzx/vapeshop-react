import React from 'react';
import {HashLink} from "react-router-hash-link";
import {useSelector} from "react-redux";

const Cart = ({state}) => {

    const {totalPrice} = useSelector(({ cart }) => cart);

    return(
        <HashLink to="/cart">
            <div className="cart" id="cart" style={{right: "-100px"}} >
                    <i className="fa-solid fa-cart-shopping fa-3x"/>
                    <div className="cart-counter" id="cartCounter">
                        1
                    </div>
            </div>
        </HashLink>
    )

}
export default Cart;