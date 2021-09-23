import { createContext, React} from 'react'
import {  Button,Card } from 'react-bootstrap';

import { CartState } from "./Context";

export const CartContext= createContext();

  const Cards = ({prod}) => {
    const {
      state: { cart },
      dispatch,
    } = CartState();

   

    
    return (
        
        <div className="col-md-4 col-10 mx-auto">
        <Card  style={{ width: '16rem',  boxShadow: "3px 1px 5px 3px grey" }}>
  <Card.Img variant="top" src={prod.image} height="300px" width="200px"/>
  <Card.Body>
    <Card.Title className='text-center'>{prod.name}</Card.Title>
    <Card.Text className="text-center">
      {prod.price}
    </Card.Text>
    {cart.some((p) => p.id === prod.id) ? (
            <Button 
            className="text-center"
            style={{padding:"10px"}}
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
            className="text-center"
            variant="success"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
            >
            Add To Cart
            </Button>
          )}
  </Card.Body>
</Card>
            </div>
    )
}
export default Cards;
