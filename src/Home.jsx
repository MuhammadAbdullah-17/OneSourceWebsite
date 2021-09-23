import React from 'react'
import Slider from './Slider';
import Products from './Products'
import Contact from './Contact'
const Home = () => {
    return (
        <>
        <div>
        <Slider/>
        <Products />
        <Contact/>
        </div>
        <div id="myButton"></div>
        </>
    )
}

export default Home;
