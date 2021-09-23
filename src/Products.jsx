import React from 'react'
//import Data from './Data'
import { CartState } from "./Context";
import Cards from './Card'
const Products = () => {
    const {
        state: { products },
      } = CartState();
    return (
        <>
        <div className="my-5">

        
        <h1 className="text-center">Products</h1>
        </div>
        <div className="mb-5">
        <div className="row align-content-center ">
        <div className="col-10 mx-auto ">
        
                <div className="row gy-5">
                    {
                        products.map((prod,id)=>
                        {
                            return <Cards
                            prod={prod} key={prod.id}
                            />
                        })
                    }
                    </div>
                </div>
            </div>


        </div>

        </>
    )
}

export default Products;
