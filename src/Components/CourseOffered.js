import React from 'react';
import './CourseOffered.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import bhagvatGita from '../images/bhagvad-gita.jpg';
import vedicMath from '../images/vedic.png';
import abacus from '../images/abacus.jpg';
import yoga from '../images/yoga.jpg';
import  Contact  from "./Contact";
import { useRef,useState } from "react";

export const CourseOffered = () => {
    const contact=useRef(null);

    const scrollToSection = (elementRef)=>{
        window.scrollTo({
            top:elementRef.current -1000,
            behavior:'smooth'
        })
    }
  return (
    <div> <div className='co'><h2>Courses Offered</h2></div>
        
    <div className='row1'>
        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>The Lessons of Bhagwad Gita</b></h5>
            </div>

            <div className='card__body'>
            <a onClick={()=> scrollToSection(contact)} id="bottle"  >
                <img src = {bhagvatGita} alt = "Freedom Blog"  />
            </a>
            </div>

            
        </div>
        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>Vedic Maths</b></h5>
            </div>

            <div className='card__body'>
            <a onClick={()=> scrollToSection(contact)} id="bottle" >
                <img src = {vedicMath} alt = "Freedom Blog" />
            </a>
            </div>

            
        </div>


        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>Abacus</b></h5>
            </div>

            <div className='card__body'>
            <a href="#" id="bottle" onclick="document.location=this.id+'.html';return false;" >
                <img src = {abacus} alt = "Freedom Blog" />
            </a>
            </div>

            
        </div>

        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>Yoga and Meditation</b></h5>
            </div>

            <div className='card__body'>
            <a href="#" id="bottle" onclick="document.location=this.id+'.html';return false;" >
                <img src = {yoga} alt = "Freedom Blog"  />
            </a>
            </div>

            
        </div>
        <div className='card1'>
            <div className='card__header'>
                
                <h5><b>I-Sense</b></h5>
            </div>

            <div className='card__body'>
            <a href="#" id="bottle" onclick="document.location=this.id+'.html';return false;" >
                <img src = {vedicMath} alt = "Freedom Blog"  />
            </a>
            </div>

            
        </div>
    </div>


   
            



    </div>
  )
}
