
import './Contact.css';
import { Button,Icon } from 'semantic-ui-react';
import React from 'react';

export const Contact = () => {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links-div'>

                    <div className='social_media'>
                    
                        <p>Gmail :  thebrightfuture@gmail.com</p>
                    </div>
                </div>


                
            </div>
            <div>
            <div style={{flex:1,height:'1px', backgroundColor:'rgb(129, 136, 161)'}}/>
            <div className='copyright'>   Copyright &copy; 2024 thebrightfuture@gmail.com</div>
            </div>
            
            
        </div>
        
    </div>
  )
}
