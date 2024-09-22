import React,{Suspense} from "react";

import { useRef,useState } from "react";
import { Home } from "./Home";
import { About } from "./About";

import { CourseOffered } from "./CourseOffered";



import logo from '../images/logo1.jpeg'
import Image from 'react-bootstrap/Image';
import './Header.css';
import EnquireNow from "./EnquireNow";
import { Contact } from "./Contact";



const Header=()=> {
    
    

    // const services=useRef(null);
    


    return(
        <div className="container1" >
            

            <div>
                <div  className="home"><Home/></div>
            </div>


           

            

            <div>
                <div  className="aboutus"><About/></div>
            </div>
            <br/>

            <div>
                <div  className="aboutus"><EnquireNow/></div>
            </div>

            <br/>

            <div>
                <div  className="courseOffered"><CourseOffered/></div>
            </div>
            <br/>

            {/* <div>
                <div  className="courseOffered"><Contact/></div>
            </div> */}
            <br/>

            



        </div>
    )
}
export default Header;