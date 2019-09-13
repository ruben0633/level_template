import React, { Component } from 'react';

import Header from './components/section/Header/Header';
import Footer from './components/section/Footer/Footer';
import Main from './components/Main/Main';
import { Switch, Route } from 'react-router-dom';
import About from './containers/About/About'
import './style.css';

class App extends Component{
    render(){
        return(
            <div className='app'>
               <Header />
                <Switch>
                    <Route exact path='/' component={ Main } />
                    <Route exact path='/about' component={ About } />
                </Switch>
               <Footer />
            </div>
        )
    }   
}
export default App;

