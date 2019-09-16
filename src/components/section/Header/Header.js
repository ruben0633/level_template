import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './header.css';
import '../../../style.css';
import logo from '../../../assets/logo.png';
import arm_flag from '../../../assets/arm_flag.png';
import flag_of_russia from '../../../assets/flag_of_russia.png';
import  britain_flag from '../../../assets/britain_flag.png';

export default class Header extends Component{
    render(){
        return(
            <div className='header'>
               <Link to='/'>
               <div 
                    className='levelup-logo'  
                     style={{ backgroundImage: `url(${logo})` }}>      
                </div>
           
               </Link>
                    <nav className='header_menu'>
                        <ul className='menu'>
                            <li>
                                <Link to='/Students'>Students</Link>
                            </li>
                            <li>
                                <Link to='/Courses'>Courses</Link>
                            </li>
                            <li>
                                <Link to='/About' >About</Link> 
                            </li>
                            <li>
                                <Link to ='/ContactUs'>Contact</Link>
                            </li>
                            <li>
                                <span className='language_container'>
                                <img src={arm_flag} alt="" className='flag'></img>
                                <img src={flag_of_russia} alt="" className='flag'></img>
                                <img src={britain_flag} alt="" className='flag'></img>
                                </span> 
                            </li>
                           
                        </ul>
                   </nav>
            </div>
        )
    }
}




