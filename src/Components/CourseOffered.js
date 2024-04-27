import React from 'react';
import './CourseOffered.css';
import  Abacus  from '../Courses/Abacus';
import BhagwadGita from '../Courses/BhagwadGita';
import  Isense  from '../Courses/Isense';
import  VedicMath  from '../Courses/VedicMath';
import  YoganMed  from '../Courses/YoganMed';
import bhagvatGita from '../images/bhagvad-gita.jpg';
import vedicMath from '../images/vedic.png';
import abacus from '../images/abacus.jpg';
import yoga from '../images/yoga.jpg';
import isense from '../images/Isense.jpeg';


import { useRef,useState } from "react";



export const CourseOffered = () => {
    const abacusEle=useRef(null);
    const isenseEle=useRef(null);
    const bhagwadEle=useRef(null);
    const vedicEle=useRef(null);
    const yoganEle=useRef(null);
    

    const scrollToSection = (elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop - 80,
            behavior:'smooth'
        })
    }
  return (
    <div> 
        <div className='co'><h2>Courses Offered</h2></div>
        
    <div className='row1'>
        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>The Lessons of Bhagavad Gita</b></h5>
            </div>

            <div className='card__body'>
            <a onClick={()=> scrollToSection(bhagwadEle)} id="bottle"  >
                <img src = {bhagvatGita} alt = "Bhagwad Gita"  />
            </a>
            </div>

            
        </div>
        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>Vedic Maths</b></h5>
            </div>

            <div className='card__body'>
            <a onClick={()=> scrollToSection(vedicEle)} id="bottle" >
                <img src = {vedicMath} alt = "Freedom Blog"  onClick={()=> scrollToSection(abacusEle)}/>
                
            </a>
            </div>

            
        </div>


        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>Abacus</b></h5>
            </div>

            <div className='card__body'>
            <a  id="bottle" onClick={()=> scrollToSection(abacusEle)} >
                <img src = {abacus} alt = "Freedom Blog" />
            </a>
            </div>

            
        </div>

        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>Yoga and Meditation</b></h5>
            </div>

            <div className='card__body'>
            <a  id="bottle" onClick={()=> scrollToSection(yoganEle)} >
                <img src = {yoga} alt = "Freedom Blog"  />
            </a>
            </div>

            
        </div>
        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>I-Sense</b></h5>
            </div>

            <div className='card__body'>
            <a  id="bottle" onClick={()=> scrollToSection(isenseEle)} >
                <img src = {isense} alt = "Freedom Blog"  />
            </a>
            </div>

            
        </div>

        
        
        
        

       

        
    </div>

            

        <div>
                <div ref={bhagwadEle} className="home"><BhagwadGita/></div>
        </div>
        <div>
                <div ref={vedicEle} className="home"><VedicMath/></div>
        </div>
        <div>
                <div ref={abacusEle} className="home"><Abacus/></div>
        </div>
        <div>
                <div ref={yoganEle} className="home"><YoganMed/></div>
        </div>
        <div>
                <div ref={isenseEle} className="home"><Isense/></div>
        </div>


   
            



    </div>
  )
}
