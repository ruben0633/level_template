import React, { PureComponent } from 'react';

import Divider from './Divider';
import '../../style.css';
import Courses from './Cousrese';
import ApplyNow from './ApplyNow';
export default class Main_Title extends PureComponent{
    constructor(props){
        super(props);
        this.state ={
            showCourse : false,
            showApply: false
        }
    }
    couseVirew = () =>{
        this.setState({
            showCourse : true
        })
    }
    closeCouseView = () => {
        this.setState({
            showCourse: false
        })
    }
   
    render(){
        return(
            <div className='Main-Title flex column'>
                {this.state.showCourse === true ? <Courses closeCouseView={this.closeCouseView}/> : null};
                  <input type='submit' value="APPLY NOW" className="title-button" onClick={this.couseVirew}></input>
                <div className='title-text'>
                    <span className='title'>Our Team</span>
                </div>
                <Divider />
            </div>
        )
    }
}

