import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './header.css';
import '../../../style.css';
import logo from '../../../assets/logo.png';
import arm_flag from '../../../assets/arm_flag.png';
import flag_of_russia from '../../../assets/flag_of_russia.png';
import  britain_flag from '../../../assets/britain_flag.png';
// console.log(NavLink);

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: '#fff'
        }
    }
    changeColor = () =>{
        this.setState({
            color: '#0ee4b1'
        });
    }
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
                                <NavLink to='/Students'>Students</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Courses'>Courses</NavLink>
                            </li>
                            <li>
                                <NavLink to='/About'>About</NavLink> 
                            </li>
                            <li>
                                <NavLink to ='/ContactUs'>Contact</NavLink>
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




