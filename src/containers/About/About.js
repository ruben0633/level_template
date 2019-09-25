import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import "./index.css"
import img from "../../assets/image/l.jpg";
import img1 from "../../assets/image/l2.jpg";
import Divider from "../../components/Main/Divider"
export default class About extends PureComponent{
    render(){
        return(
            <div className='About'>
                <Helmet>
                    <title>about</title>
                 
                </Helmet>
           
                    <img src={img} className="about_cover"/>  
                       <div className="container">
                    <h3 className="about">About US</h3>
                    <div className="divider66">
                           <Divider/>
                    </div>
                 
                    <div className="one">
                    <img src={img1} className="img_c"/>
                    <p className="p_text">Changing the profession and start a new life is not an easy job to do . Such changes can be compared with the first attempt to learn how to swim: it's fantastic, because nobody know what will happen The LevelUp's various courses are one of the fastest and easiest start of the IT career, which will suit both the humanitarians and non-technical specialists. The course includes learning the main types of testing, practicing on a real project at the end of training, studying databases, and all this with a mentor-professional who has already successfully gained a big experience And have worked with Professional developers under big and successful projects . You consider yourself a humanist, but do you dream about a career in IT? Check out our programs and join!</p>
                    </div>
                    <div className="two">
                    <img src={img1} className="img_c"/>
                    <p className="p_text1">Are you dreaming of creating your own Web and mobile application ? Then you Have to choose LevelUp ! With our courses you can reach your goals and overcome every difficulty , as nothing impossible with LevelUp . For 4 months of the IT course, you will learn the syntax of coding , the development frameworks and technologies, write your website , which you will attach to the portfolio and be proud of! Do you want to trust us and master the most popular programming languages from the early basis? Then follow the training course programs! After LevelUp certification you will have the opportunity become an experienced developer, the demand for who in the IT market will grow day by day . LevelUp is the main key to success: Stable working days per week , regular working hours a day, big job success score, practice and success again, experience in team programming and working with real projects!</p>
                    </div>
                    <div className="one1">
                    <img src={img1} className="img_c"/>
                    <p className="p_text">We effectively improve our qualifications and train specialists for the leading IT companies in Armenia, as well as the US or international market. We will choose the best students and motivate them to effectively apply the acquired skills. We constantly improve training programs, according with the needs of the market. We select the best teachers-professionals who are able to successfully transmit their knowledge and skills. We help graduates find the best place for their work, and employers - to find qualified personnel.</p>
                    </div>
                </div>

            </div>
        )
    }
}