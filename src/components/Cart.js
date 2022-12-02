// TODO: create a component that displays a single bakery item
import React from 'react';

export default function Cart(props) {
    const {cartItems} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price, 0);

    return(
        <div>

            <h6> Favorites </h6>

            <h3> Favorites List: </h3>

            {cartItems.length === 0 && <div> Your list is empty. </div>}

            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div> {item.name} </div>
                    <div className="text-right"> ${item.price.toFixed(2)} </div>
                </div>
            ))}

            {cartItems.length !== -1 && (
                <div className="row"> 
                    <div className="col-8"> 
                        <h3> Total Price:</h3>
                    </div>
                    <div className="col-1 text-right">
                        <h3> ${itemsPrice.toFixed(2)} </h3>
                    </div>
                </div>
            )}
        </div>
    );
}