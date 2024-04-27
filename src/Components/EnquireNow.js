import React from 'react';
// import {Image} from 'semantic-ui-react';
import './EnquireNow.css';
import wp from '../images/wp.jpg';
import { useState } from 'react';



 const EnquireNow = () => {
    // let url=`http://wa.me//7350235050` ;

    const [formData,setFormData]=useState({fullName:'',mobileNumber:'',course:''});

    const {fullName,mobileNumber,course}=formData;
    const onChange=(e)=>{
        e.preventDefault();
        // console.log(e.target.name+" "+e.target.value)
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
            
        });
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        
        let number=7350235050;
        
        let url=`http://wa.me//9242912480?text=Name=${encodeURI(fullName)},  %0a Contact Number=${encodeURI(mobileNumber)},
        %0a Course selected=${encodeURI(course)}&app_absent=0`;
        
        window.open(url);


    }
   
   
  return (
    <div className='page-login  start'>
        <div className='ui centered grid containered'  >
            <div className='full wide column'>
                <div className='ui fluid card'>
                    <div className='enquiry_title'>
                        Book a Seat
                    </div>

                    <form className='ui form'  >
                        <div className='field'>
                            <label>Name :</label>
                            <input type='text' name='fullName' placeholder='Full Name'   value={fullName} onChange={onChange}
                            requied></input>
                        </div>

                        <div className='field'>
                            <label>Mobile No :</label>
                            <input type='number' name='mobileNumber' id='phone' pattern='[0-9]{10}' value={mobileNumber}
                            maxLength='10'   onChange={onChange}
                             placeholder='Mobile Number' requied></input>
                        </div>

                        <div className='field'>
                            <label>Select Course :</label>
                            <select name='course' id='courseSelect' onChange={onChange} >
                              
                              <option value='The Lessons of Bhagwad Gita'>The Lessons of Bhagwad Gita</option>
                              <option value='Vedic Maths'>Vedic Maths</option>
                              <option value='Abacus'>Abacus</option>
                              <option value='Yoga and Meditation'>Yoga and Meditation</option>
                              <option value='I-Sense'>I-Sense</option>
                              {/* <option value='multiple'>Multiple</option> */}
                             
                            </select>
                              
                            
                        </div>

                        
                        <div className='btn_wp'>
                        
                            <button onClick={onSubmit} style={{backgroundImage:`url(${wp})` ,backgroundSize:"cover"}} className='wpBtnInside'></button>
                        </div>
                       

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default EnquireNow;