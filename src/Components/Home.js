// import 'semantic-ui-css/semantic.min.css';
import './Home.css';
import React from 'react';
import logo from '../images/logo1.jpeg';
import { useNavigate } from 'react-router-dom';
import first from '../images/first.png';


import { FloatingWhatsApp } from 'react-floating-whatsapp';


export const Home=()=> {

    const navigate=useNavigate();
    const handleBookClick=()=>{
        navigate('/bookNow');
    }

  return (
    <div >
        <div className='containerImage'>
                        
            <div className="text-center">
                <img src={first}  alt="image" />
                <button  className='imgButton' onClick={handleBookClick}>Book Seat</button>
                
            </div>
                        
                        
        </div>
        {/* <h1 className='bestAC'>
            Best AC & Fridge Repair, Sevice, Installation in PCMC and Pune

        </h1>

        <div class='container'>
            <div className='first_name'>
                Eagle Refrigeration & AC
            </div>

        </div> */}
        
        <div>
            <FloatingWhatsApp phoneNumber='9242912480' accountName='The Bright Future' avatar={logo}/>
        </div>


    </div>
    
  )
}
