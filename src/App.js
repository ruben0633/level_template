import React, { Component } from 'react';

import Header from './components/section/Header/Header';
import Footer from './components/section/Footer/Footer';
import Main from './components/Main/Main';
import { Switch, Route } from 'react-router-dom';
import About from './containers/About/About';
import Courses from './containers/Courses/Courses';
import Students from './containers/Students';
import ContactUs from './containers/ContactUs/index';
import './style.css';

class App extends Component{
    render(){
        return(
            <div className='app'>
               <Header />
                <Switch>
                    <Route exact path='/' component={ Main } />
                    <Route exact path='/About' component={ About } />
                    <Route exact path='/Courses' component={ Courses } />
                    <Route exact path='/Students' component={ Students } />
                    <Route exact path ='/ContactUs' component = { ContactUs } />   
                </Switch>
               <Footer />
            </div>
        )
    }   
}
export default App;

