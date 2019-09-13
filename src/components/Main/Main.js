import React, { PureComponent } from 'react';
import MainContent from './MainContent';
import './main.css';
import Video from '../../assets/Video/Video';

class Main extends PureComponent{
    render(){
        return(
            <div className='Main'>
                <Video />
                <MainContent />
            </div>
        )
    }
}

export default Main;