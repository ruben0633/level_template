import React, { PureComponent } from 'react';

import Title from './Title';
import Button from './Button';
import MembersContainer from './MemberContainer';

import './main.css';

export default class MainContent extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Main-Content'>
                <Button />
                <Title />
                <MembersContainer />
            </div>
        )
    }
}