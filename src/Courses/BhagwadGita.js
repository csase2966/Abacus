import React from 'react';
import './BhagwadGita.css';
import bhagvatGita from '../images/bhagvad-gita.jpg';


const BhagwadGita = () => {
  return (
    <div className='container'>
        <h2 className='co'>Course Details</h2>
        <div className='card__body'>
            <img src={bhagvatGita} />
        </div>
        
            <h2>Introduction to the Bhagavad Gita Course</h2>
            <div>
                Welcome to our journey through the timeless wisdom of the Bhagavad Gita, 
                a profound spiritual text revered for centuries. This course offers a unique opportunity
                to explore the profound teachings of the Gita, gaining insights that resonate across cultures
                and generations.

            </div>

            <div>
                <div className='title'>Course Overview:</div>
                <div>

                In this course, we delve into the Bhagavad Gita's profound insights on duty, righteousness, 
                and the path to inner peace. Through guided study and discussion, we'll unravel its philosophical 
                depth and practical wisdom, applying its teachings to our modern lives.
                </div>
            </div>

            <div>
                <div className='title'>What to Expect:</div>
                    <div>
                        <div><b>Deep Exploration:</b> We'll examine the Gita's verses with care, exploring their historical 
                    context and contemporary relevance.</div>

                    <div><b>Practical Application: </b>Discover how the Gita's teachings can inform our daily lives, 
                    offering guidance on decision-making, resilience, and spiritual growth.</div>
                    
                    <div><b>Engaging Discussions:</b> Foster a vibrant learning community as we share insights, questions, 
                    and reflections on this sacred text.</div>
                    
                    </div>
            </div>


            <div>
                <div className='title'>Who Should Attend:</div>
                    <div>
                    This course is open to seekers of all backgrounds, whether you're new to the Bhagavad Gita 
                    or seeking deeper understanding. Whether you're a spiritual enthusiast, philosopher, or 
                    simply curious about ancient wisdom, you'll find value in our exploration of this timeless text. 
                    The course is open for the age group of 6 years and above.
                    </div>
            </div>

            <div>
                <div className='title'>Join Us:</div>
                    <div>
                    Embark on this enriching journey with us as we unlock the profound wisdom of the Bhagavad Gita 
                    together. Let's explore, learn, and grow as we uncover the treasures of this sacred scripture.
                    </div>
            </div>


        
    </div>
  )
}

export default BhagwadGita