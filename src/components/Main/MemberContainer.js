import React, { PureComponent } from 'react';
import Members from './Members';

import './main.css';

export default class MembersContainer extends PureComponent{
    render(){
        return(
            <div className='Members-Container'>
               <Members /> 
            </div>
        )
    }
}