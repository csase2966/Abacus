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
    const [menuOpen,setMenuOpen] = useState(false);
    const aboutus = useRef(null);
    const enquireNow=useRef(null);
    const home= useRef(null);
    const contact=useRef(null);
    const courseOffered=useRef(null);
    

    // const services=useRef(null);
    

    const scrollToSection = (elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop - 80,
            behavior:'smooth'
        })
    }

    return(
        <div className="container1" >
            <nav>
                <div className="image_name">
                <div className="logo">
                <Image src={logo} width='40px' alt='Logo' loading='lazy'/>
                
                </div>
                <div className="title_name">The Bright Future</div>
                </div>
                <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
                    
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    
                    
                </div>

                <ul className={menuOpen ? "open" : ""}>
                    <li onClick={()=> scrollToSection(home)} className="link">Home</li>
                    {/* <li onClick={()=> scrollToSection(services)} className="link">Services</li> */}
                    <li onClick={()=> scrollToSection(enquireNow)} className="link">Book a Seat</li>
                    
                    <li onClick={()=> scrollToSection(aboutus)} className="link">About Us</li>

                    <li onClick={()=> scrollToSection(courseOffered)} className="link">Courses</li>
                    {/* <li onClick={()=> scrollToSection(contact)} className="link">Contact</li> */}
                    
                    

                </ul>
            </nav>

            <div>
                <div ref={home} className="home"><Home/></div>
            </div>


           

            

            <div>
                <div ref={aboutus} className="aboutus"><About/></div>
            </div>

            <div>
                <div ref={enquireNow} className="aboutus"><EnquireNow/></div>
            </div>

           

            <div>
                <div ref={courseOffered} className="courseOffered"><CourseOffered/></div>
            </div>


            <div>
                <div ref={contact} className="courseOffered"><Contact/></div>
            </div>


            



        </div>
    )
}
export default Header;