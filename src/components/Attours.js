import React, { useState } from 'react';
import Navbar from './Navbar';
import './Attours.css';
import attour1 from '../images/attour1.webp';

import {productData} from './Atourdata';
import Footers from './Footer';


export default function Attour() {
  const [imgs , setImg ] = useState(productData);
  return (
    <div>
      <Navbar />

      <div className="container-fluid">
        <div className="imgbg">

        </div>


      </div>

      <div className="container-fluid">
        <div className="row">
          {/* //After some time we will start */}
          <div className="col-md-4"></div>


          <div className="col-md-8">
            <div className="container-fluid d-flex flex-wrap justify-content-between">
              {
                imgs.map((datas)=>{
                  return(
                    
                    <div className="card mt-5" style={{borderRadius:'15px' , width:'280px', height:'320px' }}>
                    <div className="images">
                      <img src={datas.imges} className="img-fluid" style={{height:'200px', width:'280px' , borderTopLeftRadius:'15px' , borderTopRightRadius:'15px' }}></img>
                    </div>
    
                    <div className="tourinfo">
                      <p className="my-2 mx-2" style={{textTransform:'uppercase' , fontSize:'12px'}}><i className="fa-solid fa-location-dot mx-1" ></i>{datas.place}</p>
                      <h6 className="mx-2 ">{datas.trip}</h6>
                      <span className="mx-2"><i class="fa-regular fa-clock mx-1 my-3" style={{fontSize:'12px'}}></i>{datas.days}</span><span className="mx-2">₹{datas.price}</span>
                    </div>
    
                  </div>
    
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

      <Footers />

    </div>
  )
}