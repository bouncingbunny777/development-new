// TODO: create a component that displays a single bakery item
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from "react";
// TODO: create a component that displays a single bakery item

function ShopItem(props) {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const {onAddItem, onDeleteItem} = props;
    const [buttonText, setButtonText] = useState('Add to Favorites');
    const [pressed, setPressed] = useState(false);
    const [variant, setVariant] = useState("primary");

    function handleClick(item, pressed) {
      if (pressed == false) {
        onAddItem(item);
        setButtonText('Remove from Favorites');
        setVariant("secondary");
        setPressed(true);
      } else if (pressed == true) {
        onDeleteItem(item);
        setButtonText('Add to Favorites');
        setVariant("primary");
        setPressed(false);
      }
    }
  
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>
            <h5> {props.name} </h5>
          </Card.Title>
          <Card.Text>
            <h7> {props.description} </h7>
          </Card.Text>
          <Card.Text>
            <h7> Color: {props.color} </h7>
          </Card.Text>
          <Card.Text>
            <h7> Price Range: {props.pricerange} 5000 </h7>
          </Card.Text>
          <Card.Text>
            ${props.price}
          </Card.Text>
          <Button variant={variant} onClick={() => handleClick(props, pressed)}> {buttonText} </Button>
        </Card.Body>
      </Card>

    );
  } 
  
  export default ShopItem;