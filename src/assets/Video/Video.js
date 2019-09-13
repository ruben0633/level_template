 import React, { PureComponent } from 'react';
 import './video.css'

 export default class Video extends PureComponent{
     render(){
         return(
             <div className= 'Video'>
                 <iframe className='video' src="https://www.youtube.com/embed/6qfhLaHeI4o" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>
         )
     }
 }

