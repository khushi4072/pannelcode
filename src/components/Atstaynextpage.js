import React, { useState ,useEffect} from 'react';
import { productData1 } from './Atstaynextdata';
import { facilities } from './Atstaynextdata';

import Navbar from './Navbar'; // Adjust the path to your Navbar component
import Footer from './Footer'
import './Atstaynectpage.css';
import img1 from '../images/Attours1.webp'
import { Button } from 'bootstrap';
import {productData} from './Atstaysdata';
// import dd from './dd.json';

import { useParams } from 'react-router-dom';


import moment from 'moment';
import {DatePicker} from 'antd';
import { Link } from 'react-router-dom';
 const {Rangepicker}= DatePicker

function AccordionItem({ title }) {
  const [isOpen, setIsOpen] = useState(false);



  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };



 

  return (
    <>
    <div className="accordion-item" >
      <button className="accordion-button" onClick={toggleAccordion}>
        <span>Description</span>

        <i className={`icon ${isOpen ? 'open' : 'closed'}`}>{isOpen ? '-' : '+'} </i>
      </button>
      <div >
      
        
        <div className="accordion-content" >
        {isOpen && (
            <>
          <p >Located amidst serene natural displays, our Atstay resort 1001, is a beautiful blend of unadulterated nature and hospitality. Undoubtedly one of the top weekend resorts near Kolkata is a pristine retreat that will indeed bless your souls with rejuvenation and unforgettable memories. The presence of tranquil waters in the pool and adrenaline-pumping activities will provide a much-needed escape from mundane city life. Plan your dream weekend with us @atraskitravel</p>
          
          </>
          )}
          <hr style={{width:'105%' , marginLeft:'-14px'}}/>
        </div>
        

      
      </div>
      
    </div>
    
</>
  );
}


function Atstaynextpage() {

  const params = useParams();

  const [data,setdata]=useState(productData)
  const[dd1,setdd]= useState(productData1);
  const[faci,setfaci]= useState(facilities);
  const romm =localStorage.getItem('roomsdes')
  const [checkout, setcheckout] = useState(() => localStorage.getItem('checkout') || '');
  const [checkin, setcheckin] = useState(() => localStorage.getItem('checkin') || '');
  const [numss,setnumss] = useState(() => (localStorage.getItem('child'))|| 0);
  const [nums,setnums] = useState(() => (localStorage.getItem('adult'))|| 0);
  const [num,setnum] = useState(() => (localStorage.getItem('rooms')) || 0);










  // const [num,setnum]=useState(0)
  // const [nums,setnums]=useState(0)
  // const [numss,setnumss]=useState(0)
  const mm1 = data.filter((ds)=> ds.id == params.id)
  const mm2 = dd1.filter((ds1)=> ds1.id == params.id)
  const mm3 = faci.filter((ds2)=> ds2.id == params.id)
  console.log(mm1.csd);
  const csdValue = productData[0].csd; // Accessing the 'csd' property of the first item in the array
console.log(csdValue);
  useEffect(() => {
    localStorage.setItem('productData', JSON.stringify(data));
    localStorage.setItem('productData1', JSON.stringify(dd1));
    localStorage.setItem('facilities', JSON.stringify(faci));
    localStorage.setItem('checkout', checkout);
    localStorage.setItem('checkin', checkin);
    localStorage.setItem('child', numss);
    localStorage.setItem('adult', nums);
    localStorage.setItem('room', num);
  }, [data, dd1, faci, checkout, checkin, numss, nums, num]);


  
  const uniqueKey = `roomData_${params.id}`;
  let storedData = JSON.parse(localStorage.getItem(uniqueKey)) || { rooms: 2 };


console.log(storedData)

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }




 function navi(){
  
  
  
  console.log(checkout,checkin,num,nums,numss);
 }
 const inc = () => {
  if(storedData && storedData.rooms ){
    if(num<storedData.rooms){
      setnum( num + 1);
    }
    else{
      alert("Oops Rooms is not Available")
    }
  }
  else{
    storedData.rooms = 2;
  }
  
  
  
  
};

const inc1 = () => {
  setnums( nums + 1);
};

const inc2 = () => {
  setnumss( numss + 1);
};

const dec = () => {
  if (num > 0) {
    setnum((prevNum) => prevNum - 1);
  }
};

const dec1 = () => {
  if (nums > 0) {
    setnums((prevNums) => prevNums - 1);
  }
};

const dec2 = () => {
  if (numss > 0) {
    setnumss((prevNumss) => prevNumss - 1);
  }
};

  const imgs = [
    { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
    { id: 1, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
    { id: 2, value: "https://source.unsplash.com/user/c_v_r/100x100" }
  ];
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }
  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  const handleNext = () => {
    let index = val < imgs.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  const handlePrevious = () => {
    let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  return (
    <>
      <Navbar />
      {mm1.map((ele)=>{
        return(
      <div className='container' style={{ display: " flex"}}>
      <div className="container" style={{height:'auto',}}>
        <h1>{ele.trip}</h1>
        <div id="carouselExampleFade" class="carousel slide carousel-fade  carouselimgage" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ele.img1} class="d-block" alt="..."  />
    </div>
    <div class="carousel-item">
      <img src={ele.img2} class="d-block" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={ele.img3} class="d-block" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <hr style={{ width: "90%" }} />
<div style={{ textAlign:"justify", width:"90%"}}> <h3>Description</h3>
<p>{ele.desc}</p>
</div>
<hr style={{ width: "90%" }} />

        {/* <div className="accordion" style={{ width:"90%" }}>
          <AccordionItem title="Item 1" />
          

        </div> */}
        <div className='container-fluid my-4' style={{ width:"70%" , padding:"0px" , margin:'0px' }}>
          <h3 className='my-4'>Hotel Facilities</h3>
          {mm3.map((emm)=>{


return(



   
    
      <div  style={{ display: "grid", gridTemplateColumns:'repeat(3 , 1fr)' , justifyContent:"space-between"}}>
        {emm.facel.map((send , i)=>{
          return(<div style={{  }}>
          {/* <i class={send.imgs} ></i> */}
          <p>{send.roomtype}</p>
          </div>)
            
        })}
          
          {/* <div style={{ display: "flex", flexDirection:"row"}}>
          <i class="fa fa-coffee fs-4 mt-2 mx-3" ></i>
          <p>cofeee</p>
          </div>
          <div style={{ display: "flex", flexDirection:"row"}}>
          <i class="fa fa-coffee fs-4 mt-2 mx-3" ></i>
          <p>cofeee</p>
          </div> */}



          </div>
      
    


          
)
  
                                  })}

          <hr style={{ width: "130%" }} />
{/*  */}
    
          <div style={{ width:"50%"}}>
            <h3 className='my-3'> Rules</h3>
            <div style={{ display:"flex", justifyContent:"space-between"}}><p> Check In </p> <p>12:00 pm</p></div>
            <div style={{ display:"flex", justifyContent:"space-between"}}><p> Check Out </p> <p>11:00 Am</p></div>

            <div></div>
          </div>
        </div>
        {mm2.map((eles)=>{
          {
              return(
                <div style={{width:"90%" , padding:"2px"}}>
                <h1> Rooms</h1>
                {eles.room1.map((room , i) => (


                <div style={{display:"flex" , border:"0.1px solid #d0dbdb" , justifyContent:"space-between",padding:"0", margin:"0"}}>
                  <div>
                   <Link to={`/rooms/${room.id}`}> <img src={room.imgs} style={{ height:"200px" ,padding:"0", margin:"0"}}></img></Link>
                  </div>
                  <div  className ="mt-2 "style={{ display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}> <h5 className='ms-2'> {room.roomtype}</h5>
                  <div style={{display:"flex"}}> 
                  <i class="fa-solid fa-bed  fs-4 mt-2 mx-3"></i>        <i class="fa-solid fa-people-arrows fs-4 mt-2 mx-3"></i>
                  <i class="fa-solid fa-child fs-4 mt-2 mx-3"></i>    
                  <span>{room.price}</span>        
      
      
      
                  </div>
      
      
                  </div>
                  <div style={{ display:"flex", justifyContent:'center',alignItems:"center"}}><button className='btn btn-large btn-danger mt-4 me-3' >Show more</button></div>
      
                </div>
                    ))}

              </div>
              )
            
          }
          
        })}
        
      </div>
      <div className='bg-white ' style={{ width:"400px"}}>
        <div className=' my-5'style={{ height:"470px",backgroundColor:"#66cccc"}}>

        <div style={{ backgroundColor:"#66cccc" ,height:"70px" ,display:"flex",justifyContent:"center",alignItems:'center',border:"0.1px solid #66cccc"}} > <h5>from ₹ {ele.price}/night</h5></div>

        <div style={{  backgroundColor:"#fff" ,height:"70px" ,display:"flex",justifyContent:"center",alignItems:'center',border:"0.1px solid #66cccc"}} ><h4>Book</h4>

</div>


<div style={{  height:"150px",display:'flex'}}>
<div style={{backgroundColor:"white", height:"100%",width:"50%" ,border:"0.1px solid #66cccc"}}><p className='mt-4 ms-2'>Check In</p>
<input
  type="date"
  placeholder="asdf"
  value={checkin}
  onChange={(e) => setcheckin(e.target.value)}
  min={getCurrentDate()} // Set the minimum date to the current date
  style={{ width: '100%', padding: '10px', border: 'none' }}
/></div>
<div   style={{ backgroundColor:"white",height:"100%",width:"50%",border:"0.1px solid #66cccc" ,}}><p className='mt-4 ms-2'>Check Out</p>
<input type="date" placeholder="asdf"  value={checkout} onChange={(e)=>{setcheckout(e.target.value)}} style={{width:'100%' , padding:'10px',border:"none"}}/></div>
  
</div>
<div className='p-5' style={{ display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",height:"125px",borderTop:'1px solid #66cccc'}}>
            <p style={{fontWeight:"600"}}>Check In-Out</p>

           <div style={{cursor:"pointer", fontWeight:"600", width:"100%", display:"flex", justifyContent:"space-between",}}> <span style={{width:'70px'}}> Room</span> <span style={{width:''}}  onClick={()=>dec()}>-</span><span >{num}</span><span onClick={()=>inc()}>+</span></div>
           <div  style={{cursor:"pointer",fontWeight:"600",width:"100%", display:"flex", justifyContent:"space-between"}}> <span style={{width:"70px"}}> Adult</span> <span style={{width:''}} onClick={()=>dec1()}>-</span><span>{nums}</span><span onClick={()=>inc1()}>+</span></div>
           <div  style={{cursor:"pointer",fontWeight:"600",width:"100%", display:"flex", justifyContent:"space-between"}} ><span style={{width:"70px"}}> Children</span> <span style={{width:''}} onClick={()=>dec2()} className="">-</span><span className=''>{numss}</span><span className='' onClick={()=>inc2()}>+</span></div>


            </div>
<div style={{ backgroundColor:"white", height:"100px",display:"flex",justifyContent:"center",alignItems:'center',border:"0.1px solid #66cccc"}}> 
<button className='' style={{ backgroundColor:"#66cccc" , textTransform:'uppercase', border:'none' , borderRadius:'25px' , padding:'5px 15px'}} onClick={navi}><h2 style={{fontSize:'20px', marginTop:'5px'}} >BOOK Now</h2></button>

</div>

        </div>
        <div className='mt-5 p-4 fs-5' style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid #66cccc"}}>
          <div style={{display:"flex"}}><div><i  style={{ color:"#66cccc", fontWeight:"600"}}class="fa-solid fa-envelope mt-1 me-2"></i></div><div style={{fontWeight:"700"}}> Atraski@Gmail.com</div></div>
          <div style={{display:"flex"}}> <div><i  style={{ color:"#66cccc",fontWeight:"600"}}class="fa-solid fa-phone mt-1 me-5"></i></div><div style={{fontWeight:"700"}} className='me-3' >8898734567</div></div>
        </div>
      </div>
      
      </div>
      )})}


      <Footer></Footer>


    </>
  );
}

export default Atstaynextpage;
