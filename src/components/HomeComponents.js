import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../images/carouselimg1.webp';
import carousel2 from '../images/carouselimg2.webp';
import carousel3 from '../images/carouselimg3.webp';
import safe1 from '../images/atraskisafe1.webp';
import safe2 from '../images/atraskisafe2.webp';
import safe3 from '../images/atraskisafe3.webp';
import safe4 from '../images/atraskisafe4.webp';
// import './HomeComponents.css';
import Footer from './Footer';

export default function HomeComponents() {
    return (
      <>
        <Carousel>
      <Carousel.Item style={{height:'500px'}}>
        <img
          className="d-block w-100 sliderImg"
          src={carousel1}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'500px'}}>
        <img
          className="d-block w-100 sliderImg"
          src={carousel2}
          alt="Second slide"
          
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'500px'}}>

        <img
          className="d-block w-100 sliderImg"
          src={carousel3}
          alt="Third slide"
          
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
    
    <div>
      <div className="container">
          <h2 className="mt-5">Our Commitment to Safe Holidays</h2>

          <div className="d-flex">
          <div className="Image text-center">
            <img src={safe1} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>

          <div className="Image text-center">
            <img src={safe2} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>


          <div className="Image text-center">
            <img src={safe3} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>


          <div className="Image text-center">
            <img src={safe4} className="img-fluid w-75"/>

            <div className="box text-center">
              <text className="heading1">Sanitized Premises</text>
              <p className="">Thoroughly sanitized commute Vehicles, Hotel rooms and premises</p>
            </div>
          </div>
          </div>
      </div>  
    </div>


    



    </>
        );
}