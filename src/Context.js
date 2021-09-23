import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";
import airpods from "./imgs/airpods 1.jpg";
import i12 from "./imgs/i12 1.JPG";
import earpods from "./imgs/earpods.jpg";

const Cart = createContext();
const Context = ({ children }) => {
  
  const products=[
    {
        image: airpods,
        name: "Apple Airpods Pro Bluetooth handfree",
        price:2700,
        id:1,
        qty:1

    },
    {
        image: earpods,
        name: "Apple Airpods Pro Bluetooth handfree",
        price:4500,
        id:2,
        qty:1



    },
    {
        image: i12,
        name: "Twin i12 Bluetooth Earphones",
        price: 2000,
        id:3,
        qty:1



    },
    {
        image: airpods,
        name: "Apple Airpods Pro Bluetooth handfree",
        price:2700,
        id:4,
        qty:1


    },
    {
        image: earpods,
        name: "Apple Airpods Pro Bluetooth handfree",
        price:2700,
        id:5,
        qty:1



    },
    {
        image: i12,
        name: "Twin i12 Bluetooth Earphones",
        price:2700,
        id:6,
        qty:1


    },
    {
        image: airpods,
        name: "Apple Airpods Pro Bluetooth handfree",
        price:2700,
        id:7,       
        qty:1


    },
    {
        image: earpods,
        name: "Apple Airpods Pro Bluetooth handfree",
        price:2700,
        id:8,
        qty:1



    },
    {
        image: i12,
        name: "Twin i12 Bluetooth Earphones",
        price:2700,
        id:9,       
        qty:1



    },{
      image: airpods,
      name: "Apple Airpods Pro  handfree",
      price:2700,
      id:10,       
      qty:1


  },
  {
      image: earpods,
      name: "Apple Airpods Pro  handfree",
      price:2700,
      id:11,
      qty:1



  },
  {
      image: i12,
      name: " i12 Bluetooth Earphones",
      price:2700,
      id:12,       
       qty:1



  },

]

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;