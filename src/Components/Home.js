// import 'semantic-ui-css/semantic.min.css';
import './Home.css';
import React from 'react';

import first from '../images/first.png';



export const Home=()=> {
  return (
    <div >
        <div className='containerImage'>
                        
            <div className="text-center">
                <img src={first}  alt="image" width='100%'/>
                
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
        
        


    </div>
  )
}
