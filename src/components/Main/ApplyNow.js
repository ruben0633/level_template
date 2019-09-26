import React, { PureComponent } from 'react';

import './main.css';
import '../../style.css';
import logo from '../../assets/logo.png';

export default class ApplyNow extends PureComponent{
    render(){
        const { iconsArr, applyIndex } = this.props;
        return(
            <div className='ApplyNow'>
                <div className ='apply-block flex column'>
                    <span className='apply-title'>APPLY NOW</span>
                   <div className='flex jCenter'>
                   <div className={`${iconsArr[applyIndex].className}`}>   
                   </div>
                    </div>
                    <form className='variableForm flex column'>
                        <input className='apply-input' placeholder='Name Surname'></input>
                        <input className='apply-input' placeholder='Age'></input>
                        <input className='apply-input' placeholder='Email'></input>
                        <input className='apply-input' placeholder='Phone'></input>
                    </form>
                    <div className='apply-button-parent'>
                        <button className='apply-button'>APPLY</button>
                    </div>
                    <div className='logo2 flex jCenter'  
                         style={{ backgroundImage: `url(${logo})` }}>      
                    </div>
                </div>
            </div>
        )
    }
} 