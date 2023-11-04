import cart from "../../images/cart.png"
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () =>{
    const {totalQuantity} =useContext(CartContext)

    return(
        <Link to='/cart' style={{display: totalQuantity >0 ? 'block' : 'none'}}>
            <img src={cart} alt="cart-widget"/>
            {totalQuantity}
        </Link>
        
    )
}

export default CartWidget;