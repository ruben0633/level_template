import React, { PureComponent } from 'react';

import './main.css';

export default function Divider(props){    
    return(
        <div className='main-divider'>
            <div className='divider-left-side' style={{width: '30%'}}></div>
            <div className='divider-center'></div>
            <div className='divider-right-side' style={{width: '30%'}}></div>
        </div>
    )
}