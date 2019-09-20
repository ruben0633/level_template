import React, { PureComponent } from 'react';

import './slider.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';


export default class Carousel extends PureComponent{
    constructor(props){
        super(props)

    this.state ={
        showIndex: this.props.showIndex
    }
}

decrement = () => {
    this.setState({
        showIndex: this.state.showIndex -1
    })
}
 
increment= () => {
    this.setState({
        showIndex: this.state.showIndex +1
    })
};
    
render(){
    console.log(this.state.showIndex)
        return(
           <div className ='slider-content'>
            <div className='close'>
               <span onClick={this.props.carouselClose}>&#9587;</span>
            </div>
            <div className='Level-Up-Slider'>
                <div>
                    { this.state.showIndex == 0 ? < IoIosArrowBack className='display-none' /> : <IoIosArrowBack onClick ={this.decrement} className='slider-icon'/>}
                </div>
                    
                <div className='slider-images'>
                    <img src={this.props.studentsArr[this.state.showIndex].memberImage}/>
                </div>
                <IoIosArrowForward onClick={this.increment} className='slider-icon'/>
            </div>
            </div>
        )
    }
}
