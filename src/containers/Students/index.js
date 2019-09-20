import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import up from '../../assets/background/up.JPG';
import Title from '../../components/Main/Title';
import StudentsData from './StudentsData';
import '../../style.css';




export default class Students extends PureComponent{

    render(){
        return(
            <div className='Students'>
                <Helmet>
                    <title>Students</title>
                </Helmet>
                <div className ='Students'>
                    <div 
                        className='background'
                        style={{backgroundImage:`url(${up})`}}>
                    
                    </div>
                    <Title />
                </div>
                <div className='page-content'>
                    <StudentsData />
                </div>
            </div>
        )
    }
}
