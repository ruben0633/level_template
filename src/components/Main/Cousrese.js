import React, { PureComponent } from 'react';
import './main.css';
import '../../style.css';
import logo from '../../assets/logo.png';
import close from '../../assets/svg/closeBtn.svg'
import ApplyNow from './ApplyNow'
import { icons } from 'react-icons/lib/cjs';
export default class Courses extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            animation: true,
            replaceBlock : false,
            applyIndex: null
        }
    }
    replace = (index) =>{
        this.setState({
            replaceBlock: true,
            applyIndex: index
        })
    }
   

    
    iconsArr = [
        {
            className: 'cours-icon js-icon'
        },
        {
            className: 'cours-icon java-icon'
        },
        {
            className:'cours-icon QA-icon'
        },
        {
            className :'cours-icon node-icon'
        }
    ];
    coursesGenerate(){
        return this.iconsArr.map((icons,index)=>(
                <div className={icons.className} key={index} onClick={this.replace.bind(this, index)}></div>
            )
        )
    }
    render(){
        return(
            <div> 
                <div className='Courses' style={{display: 'flex', flexDirection: 'column'}}>
                    <div className='close close-button'>
                        <img src={close} onClick={this.props.closeCouseView}></img>
                    </div>
                       
                    <div 
                        className={`animation ${this.state.animation === true  && this.state.replaceBlock === false ? 'animation-name' : 'flex aCenter jCenter animation'}`}
                        style={{flexGrow: 1, display: 'flex'}} >   
                        
                        <div className='courses-block'>
                        <div className='apply-repice'>
                            {this.state.replaceBlock && <ApplyNow iconsArr={this.iconsArr} applyIndex={this.state.applyIndex}/>}
                        </div>
                            <span className='apply'>APPLY NOW</span>
                            <div className='course-for-apply  flex jAround'>
                                {this.coursesGenerate()}
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

