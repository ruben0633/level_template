import React, { PureComponent } from 'react';
// import MainContent from './MainContent';
import './main.css';
import Video from '../../assets/Video/Video';
import Members from './Members';

class Main extends PureComponent{
    render(){
        return(
            <div className='Main'>
                <Video />
                <div className='Members-Container'>
                    <Members /> 
                </div>
            </div>
        )
    }
}

export default Main;