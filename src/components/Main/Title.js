import React, { PureComponent } from 'react';

import Divider from './Divider';
import '../../style.css';

export default class Main_Title extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='Main-Title'>
                <div className='title-text'>
                    <span className='title'>Our Team</span>
                </div>
                <Divider />
            </div>
        )
    }
}

