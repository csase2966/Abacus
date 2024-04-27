// import 'semantic-ui-css/semantic.min.css';
import './Home.css';
import React from 'react';
import logo from '../images/logo1.jpeg';

import first from '../images/first.png';


import { FloatingWhatsApp } from 'react-floating-whatsapp';


export const Home=()=> {
  return (
    <div >
        <div className='containerImage'>
                        
            <div className="text-center">
                <img src={first}  alt="image" />
                
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
