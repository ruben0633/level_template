import React, { PureComponent } from 'react';

import './slider.css';
import '../../style.css';
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
                <div className='Level-Up-Slider content-size'>
                    <div className='close'>
                        <span onClick={this.props.carouselClose}>&#9587;</span>
                    </div>
                    <div className=' carousel flex a-item-center jBetween'>
                    {/* <div className='carousel-content flex column '> */}
                            { this.state.showIndex == 0 ? <div/> : <IoIosArrowBack onClick ={this.decrement} className='slider-icon'/>}
                        {/* </div> */}
                    <div className='size'>
                        <div className='carousel-image'style={{backgroundImage:`url(${this.props.studentsArr[this.state.showIndex].memberImage})`}}></div>
                        <div className='carousel-hiden-block'>
                        <div className='carousel-text-block'>
                            <h2 className='carousel-tex-cours'>{this.props.studentsArr[this.state.showIndex].name}</h2>
                            <span>{this.props.studentsArr[this.state.showIndex].cours}</span>
                        </div>
                        </div>
                    </div>
                        {this.state.showIndex == this.props.studentsArr.length -1 ? <div/> : <IoIosArrowForward onClick={this.increment} className='slider-icon'/>}
                    </div>
                </div>
            </div>
        )
    }
}
