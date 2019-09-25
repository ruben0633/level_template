import React, { PureComponent } from 'react';

import './main.css';
import '../../style.css';
import logo from '../../assets/logo.png';

export default class ApplyNow extends PureComponent{
    render(){
        return(
            <div className='ApplyNow'>
                <div className ='apply-block flex column'>
                    <span className='apply-title'>APPLY NOW</span>
                    <form className='variableForm flex column'>
                        <inut className='apply-input'>ewrwerewr</inut>
                        <inut className='apply-input'>werwerewr</inut>
                        <inut className='apply-input'>werwerewr</inut>
                        <inut className='apply-input'>werewrer</inut>
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