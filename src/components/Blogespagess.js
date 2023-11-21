import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from '../images/blog2img1.webp'
import img2 from '../images/blog2img0.webp'
import { useState } from "react";
import {useParams} from 'react-router-dom'
import {productData}  from "./Blog";
function Blogespagess(){
    const params = useParams()

const [ data ,setdata] = useState(productData)
const mm4 = data.filter((ds2)=>
     ds2.id == params.id
)

    return(
        <>
        <Navbar></Navbar>
        {mm4.map((e)=>{
            return(

                <>
                 <div className=" ss" style={{
  minHeight: "500px",
  backgroundColor: "blue",
  
  background: `url(${e.img})`, // Use the variable img2 here
  backgroundSize: 'cover',
  backgroundPosition:'center',}}>
            
            

        </div>
        <div className="container"  style={{height:"200px", backgroundColor:"white" ,boxShadow: '0 3px 3px rgba(0,0,0,0.2)'
,position:"relative" , bottom:'120px', borderRadius:'20px',width:'50%', display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div style={{}}><h1>{e.info}</h1></div>
</div>
<div className="container mb-5"  style={{height:"auto", backgroundColor:"white", borderRadius:'20px',width:'50%', marginBottom:'-109px'}}>
<div className="" style={{ marginTop:'-80px'}}> <p style={{textAlign:'justify'}}>{e.info1}</p></div> 
</div>
                </>
            )
        })}
 

        {/* <div className="container mb-5"  style={{height:"auto", backgroundColor:"white", borderRadius:'20px',width:'50%', marginBottom:'-109px'}}> */}
        {/* <div className="mt-3"> <p style={{textAlign:'justify'}}>{e.info1}</p></div>  */}
        <div className="container mb-5"  style={{height:"auto", backgroundColor:"white", borderRadius:'20px',width:'50%'}}>

{mm4.map((ele)=>{
    return(
        <>
        {ele.blog.map((eles)=>{
            return(
            <>
  <div style={{display:"flex", alignItems:"center"}}>  <h2>{eles.desc}
  </h2></div>
             <div> <img src={eles.imgs} style={{ width:'100%',}} ></img></div> 
             <div className="mt-3"> <p style={{textAlign:'justify'}}>{eles.desc1}</p></div> 
  </>
 ) })}
       
        </>
    )
})}
          </div>

        <Footer></Footer>
        </>





        
    
       

    );







}
export default Blogespagess;