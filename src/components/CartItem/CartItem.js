import { CartContext } from "../../CartContext/CartContext";
import React, { useContext } from "react";

const CartItem =({name, price, quantity, id, image}) =>{
    const {removeItem} = useContext(CartContext)

    return (
        <div>
            <picture>
                <img src={image} alt={name}/>
            </picture>
            <div>
                <h2>
                    {name}
                </h2>
                <p>
                    Cantidad: {quantity}
                </p>

                <p>
                    Subtotal: ${quantity * price}
                </p>

                <button onClick={()=> removeItem(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem