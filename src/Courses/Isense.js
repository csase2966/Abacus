import React from 'react';
import isense from '../images/Isense.jpeg';
import './Isense.css';

const Isense = () => {
  return (
    <div className='container'>
    <div className='card__body'>
        <img src={isense} />
    </div>
    
        <h2>I-sense Course:</h2>
        <div>
        <b>I-Sense: </b>A Brain Wave Entertainment Pedagogy, is a very powerful module for enhancing intuituin.
         It builds brain and memory skills, transforms a child's perception abilities and equips 
         capacities for overcoming daily challenges and achieving their goals successfully. 
         This methodology has been implemented by many educational organizations globally and 
         witnessed exorbitant transformation in all domains of the students' life.


        </div>

        <div>
            <div className='program'>Program details:</div>
            <div>
 
                <li>Course - 2 Levels [9 Sessions Per Level]</li>
                <li>Age Group - 7 years to 18 years</li>
                <li>Session Duration - 3 Hrs per session</li>
                
                

            </div>
        </div>

        <div>
            <div className='benefit'>Benefits of the Program:</div>
                <div>
                

            <li>Improves Intuition</li>
            <li> Reduces Stress and develops Emotional balance</li>
            <li> Enhances visualization and vivid imagination</li>
            <li>Improves listening and observation skills</li>
            <li>Improves concentration</li>
            <li>Improves reading and Learning skills</li>
            <li>Improves Analytical and Logical Thinking</li>
            <li>Increases Self-Confidence</li>
            <li>Enhances Photographic Memory</li>

                </div>
        </div>


        

        


    
    </div>






  )
}

export default Isense