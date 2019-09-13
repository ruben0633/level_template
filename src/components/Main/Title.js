import React, { PureComponent } from 'react';
import Divider from './Divider';

export default class Main_Title extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='Main-Title'>
                <div className='title-text'>
                    <span>{this.props.title}</span>
                </div>
                <Divider />
            </div>
        )
    }
}

