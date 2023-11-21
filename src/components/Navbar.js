import React from 'react';
import './Navbar.css';
import logo from '../images/atstaylogo.webp';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
        <div className="nav">
            <div className="container-fluid nav-top p-2 d-flex justify-content-between">
                <div className="navtopleft">
                 <Link to="https://www.facebook.com/atraskitravel?mibextid=nW3QTL"> <i class="fa-brands fa-facebook-f mx-4" style={{color:"white"}}></i> </Link>
                 <Link to="https://www.instagram.com/atstaysbyatraski/?igshid=MzRlODBiNWFlZA%3D%3D"> <i class="fa-brands fa-instagram" style={{color:"white"}}></i></Link>
                  <span className="mx-3" style={{color:"white"}}> <a style={{ color:"white"}} href="mailto:support@attravels.in">support@attravels.in</a></span>
                </div>

                <div className="navtopright">
                <span className="mx-3" style={{color:"white"}}> <a href="tel:+9654862355" style={{ color:"white"}}><i class="fa-solid fa-phone fs-4 mx-1"></i>Call Now</a></span>
               <Link  to ="/signin"><span className="mx-3" style={{color:"white"}}>Login</span></Link>
               <Link to ="/signup"> <span className="mx-3" style={{color:"white"}}>Signup</span></Link>

                </div>
            </div>

            <div className="navbar container w-75 py-3">
              <div className="logo d-flex">
                <img src={logo} className="logoimg"/>
                
                <div className="nav_item mt-3">
                <ul className="d-flex navitem ">
                 <Link to="/"> <li className="mx-4">HOME</li></Link>  
                 <Link to ="/attours"><li className="mx-4">ATTOURS</li>  </Link>
                  <Link to ="/atstays"><li className="mx-4">ATSTAYS</li></Link>
                 <Link to="/bloggerpage"> <li className="mx-4">BLOGS</li>  </Link>


                </ul>                
              </div>
              </div>
              

              
            </div>

        </div>

    </div>
  )
}
