import React, { PureComponent } from 'react';

import Divider from './Divider';
import '../../style.css';
import Courses from './Cousrese';
export default class Main_Title extends PureComponent{
    constructor(props){
        super(props);
        this.state ={
            showCourse : false
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
        console.log(this.state.showCourse)
        return(
            <div className='Main-Title flex column'>
                {this.state.showCourse === true ? <Courses closeCouseView={this.closeCouseView}/> : null};
                  <input type='submit' value="APPLY NOW" className="main-button" onClick={this.couseVirew}></input>
                <div className='title-text'>
                    <span className='title'>Our Team</span>
                </div>
                <Divider />
            </div>
        )
    }
}

