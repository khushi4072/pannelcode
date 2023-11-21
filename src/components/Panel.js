import React , {useState} from 'react';
import sub from '../images/back.jpg';
import { useParams } from 'react-router-dom';
// import {paneldata} from './paneldata';
import { productData } from './Atstaysdata';

const Panel=()=>{
    const params = useParams();

    const [rooms , setRooms] = useState(2);
    const [roomprice , setRoomprice] = useState('');

    const [consdata , setConsdata] = useState(productData);


    const cds = consdata.filter((dm)=> dm.id == params.id)

    


    function saveDescription() {
        const uniqueKey = `roomData_${params.id}`;
        const existingData = JSON.parse(localStorage.getItem(uniqueKey)) || {};
    
        // Update the existing data or create a new object
        const defaultData = {
            rooms: 2, // Provide your default value for rooms
            roomprice: '', // Provide your default value for roomprice
        };
    
        const newData = {
            ...defaultData,

            ...existingData,
            rooms:rooms,
            roomprice: roomprice,
        };
    
        // Save the updated data back to local storage
        localStorage.setItem(uniqueKey, JSON.stringify(newData));
    }
    
    


    return(
        <>
        <div className="container-fluid">
            <h1 style={{textAlign:'center'}}>AtStay Updation Panel</h1>

            <div className="paneldes" style={{background:'rgba(0,0,0,0.1)',height:'700px' , width:'100vw' , display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column' , gap:'50px'}}>
            <div className="roomsupd " style={{background:'rgba(0,0,0,0.3)' , width:'50%' , padding:'30px' , height:'25px' ,fontSize:'25px', display:'flex' , alignItems:'center', justifyContent:'space-around' , border:'1px solid black' , borderRadius:'25px'  }}>
                    <p className="mb-0 text-white" style={{width:'265px'}}>Update Your Rooms Price</p>
                    <div className="update">
                        <input type="number" value={roomprice} onChange={(e)=>{setRoomprice(e.target.value)}} className="mb-0" style={{border:'1px solid black' , borderRadius:'25px'}} />
                    </div>
                </div>

                <div className="roomsupd " style={{background:'rgba(0,0,0,0.3)' , width:'50%' , padding:'30px' , height:'25px' ,fontSize:'25px', display:'flex' , alignItems:'center', justifyContent:'space-around' , border:'1px solid black', borderRadius:'25px' }}>
                    <p className="mb-0 text-white" style={{width:'265px'}}>Update Your Rooms</p>
                    <div className="update">
                        <input type="number" value={rooms} onChange={(e)=>{setRooms(e.target.value)}} className="mb-0" style={{border:'1px solid black' , borderRadius:'25px'}} />
                    </div>
                </div>

                <div className="btns">
                    <button className="btn btn-primay" onClick={saveDescription}>Submit</button>
                    
                </div>
            </div>

        </div>
        </>
    )
}


export default Panel;
