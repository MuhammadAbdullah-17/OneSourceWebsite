import React from 'react'
import img1 from '../src/imgs/sw.jpg'
import img2 from '../src/imgs/pw.jpg'
import img3 from '../src/imgs/earpods.jpg'
import { Carousel } from 'react-bootstrap'
import "./App.css"
export const Slider = () => {
    return (
        <>
        <div className="container-fluid nav-bg">
        <div className="row">
        <div className="col-10 mx-auto">
<Carousel >
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={img2}
      alt="First slide"
      height="550px"
    />
    <Carousel.Caption>
    <h1 className="shopName">One Source Accessories</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100 "
      src={img1}
      alt="Second slide"
      height="550px"
      
    />
    <Carousel.Caption>
    <h1 className="shopName">One Source Accessories</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      height="550px"
    />
    <Carousel.Caption>
      <h1 className="shopName">One Source Accessories</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
</div>
        </>
    )
}
export default Slider;