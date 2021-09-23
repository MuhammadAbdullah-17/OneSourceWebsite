import React from 'react';
import "./style.css";
import "./App.css";
import { Nav,Navbar, Container, Dropdown, Badge, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {  ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { CartState } from "./Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
   const {
      state: { cart },
      dispatch,
    } = CartState();
  
    return (
        <>
        
        <div className="container-fluid nav-bg">
        <div className="row">
        <div className="col-10 mx-auto">

        <Navbar bg="#f5dbf8" expand="lg">
  <Container>
    <Navbar.Brand className="logo" href="/home">One Source Accessories</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav " />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to="/">
         <Nav.Link className="links">Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Products">
         <Nav.Link className="links">Products</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/About">
         <Nav.Link className="links">About US</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Contact">
         <Nav.Link className="links">Contact US</Nav.Link>
      </LinkContainer>
               <Dropdown className="alignRight"> 
         <Dropdown.Toggle variant="success" id="dropdown-basic">
            <ShoppingCartOutlined style={{fontSize:"25px"}}/>
            <Badge variant="none">{cart.length}</Badge>
         </Dropdown.Toggle>
         <Dropdown.Menu style={{minWidth:"300px"}}>
            

         {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>Rs. {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/Cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}

            
         </Dropdown.Menu>
         </Dropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        </div>
        </div>
        </div>
    </>
    )
}

export default Header;
