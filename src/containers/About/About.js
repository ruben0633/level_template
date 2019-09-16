import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

export default class About extends PureComponent{
    render(){
        return(
            <div className='About'>
                <Helmet>
                    <title>About</title>
                </Helmet>
                <h1>hello</h1>
            </div>
        )
    }
}
