import React, { PureComponent } from 'react';
import './main.css';
import '../../style.css';
import logo from '../../assets/logo.png';
import close from '../../assets/svg/closeBtn.svg'
import ApplyNow from './ApplyNow'
export default class Courses extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            animation: false
        }
    }
    componentDidMount(){
        this.setState({
            animation: true
        })
    }
   
    render(){
        return(
            <div>
                
                <div className='Courses'>
                <div>
                    <ApplyNow/>
                </div>
                <div className='close close-button'>
                    <img src={close} onClick={this.props.closeCouseView}></img>
                </div>
                <div className={this.state.animation === true ? 'animation' : 'flex aCenter jCenter animation'}>
                   
                    <div className='courses-block'>
                        <span className='apply'>APPLY NOW</span>
                        <div className='course-for-apply  flex jAround'>
                            <div className='cours-icon js-icon'></div>
                            <div className='cours-icon java-icon'></div>
                            <div className='cours-icon QA-icon' ></div>
                            <div className='cours-icon node-icon' ></div>
                        </div>
                        <div className='flex, jCenter'>
                            <div 
                                className='logo flex jCenter'  
                                style={{ backgroundImage: `url(${logo})` }}>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

