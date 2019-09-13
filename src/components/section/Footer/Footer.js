import React, { Component } from 'react';
import logo from '../../../assets/logo.png';
import './footer.css'
export default class Footer extends Component{
    render(){
        return(
            <div className='footer'>
                <div 
                    className='levelup-logo'  
                     style={{ backgroundImage: `url(${logo})` }}>      
                </div>
                
                    <span className="text" >©2018 Level Up IT Center</span>
               
            </div>
        )
    }
} 