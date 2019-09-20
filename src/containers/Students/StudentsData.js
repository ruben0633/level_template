import React, { PureComponent } from 'react';

import Carousel from './Carousel'
import '../../style.css';
import searchIcon from '../../assets/svg/searchIcon.svg';
import { IoIosSearch } from 'react-icons/io';
import arammirzoyan from '../../assets/students/arammirzoyan.JPG';
import ashpetrosyan from '../../assets/students/ashpetrosyan.jpg';
import ashotsaruxanyan from '../../assets/students/ashotsaruxanyan.jpg';
import gagikmovsesyan  from '../../assets/students/gagikmovsesyan.jpg';
import vahemikayelyan from '../../assets/students/vahemikayelyan.jpg';
import AramHambardzumyan from '../../assets/students/AramHambardzumyan.png';
import EdgarHovsepyan from '../../assets/students/EdgarHovsepyan.jpg';
import GorMeshinyan from '../../assets/students/GorMeshinyan.jpeg';
import HrayrChalabyan from '../../assets/students/HrayrChalabyan.jpg';
import VahagnHakobyan from '../../assets/students/VahagnHakobyan.jpg';
import VigenManukyan from '../../assets/students/VigenManukyan.jpg';
import ArmanSanasaryan from '../../assets/students/ArmanSanasaryan.png';
import ErikMuradyan from '../../assets/students/ErikMuradyan.jpg';
import MelineGinosyan from '../../assets/students/MelineGinosyan.jpeg';
import RadikMiqayelyan from '../../assets/students/RadikMiqayelyan.JPG';
import RubenGeghamyan from '../../assets/students/RubenGeghamyan.jpg';
import RubenTadevosyan from '../../assets/students/RubenTadevosyan.png';
import AlikShxyan from '../../assets/students/AlikShxyan.jpg';
import ArmenKarapetyan from '../../assets/students/ArmenKarapetyan.jpg';
import AroHovhannisyan from '../../assets/students/AroHovhannisyan.jpeg';
import EdgarMatevosyan from '../../assets/students/EdgarMatevosyan.jpg';
import MariamPoxosyan from '../../assets/students/MariamPoxosyan.jpeg';
import MartinYesayan from '../../assets/students/MartinYesayan.jpg';
import StepanBadalyan from '../../assets/students/StepanBadalyan.JPG';
import davidsargsyan from '../../assets/students/davidsargsyan.jpg';
import Lilithunanyan from '../../assets/students/Lilithunanyan.jpg';
import MariamKhalatova from '../../assets/students/MariamKhalatova.jpg';
import SamvelAzibekyan from '../../assets/students/SamvelAzibekyan.jpg';
import VardanSoghomonyan from '../../assets/students/VardanSoghomonyan.jpg';
import HmayakAtayan from '../../assets/students/HmayakAtayan.jpg';
import EduardOdabashyan from '../../assets/students/EduardOdabashyan.jpg';
import ElzaMartirosyan from '../../assets/students/ElzaMartirosyan.jpg';
import HaykBghdasaryan from '../../assets/students/HaykBghdasaryan.jpg';
import RafayelHovhannisyan from '../../assets/students/RafayelHovhannisyan.jpg';
import Norayrantonyan from '../../assets/students/Norayrantonyan.jpg';

const studentsArr = [
    {
        id: 1,
        memberImage: arammirzoyan,
        name: 'Aram Mirzoyan',
        cours: 'JAVA'
    },
    {
        id: 2,
        memberImage: ashpetrosyan,
        name: 'Ashot Petrosyan',
        cours: 'JAVA'
    },
    {
        id: 3,
        memberImage: ashotsaruxanyan,
        name: 'Ashot Saruxanyan',
        cours: 'JAVA'
    },
    {
        id: 4,
        memberImage: gagikmovsesyan,
        name: 'Gagik Movsesyan',
        cours: 'JAVA'
    },
    {
        id: 5,
        memberImage: vahemikayelyan,
        name: 'Vahe Mikayelyan',
        cours: 'JAVA'
    },
    {
        id: 6,
        memberImage: AramHambardzumyan,
        name: 'Aram Hambardzumyan',
        cours: 'WEB'
    },
    {
        id: 7,
        memberImage: EdgarHovsepyan,
        name: 'Edgar Hovsepyan',
        cours: 'WEB'
    },
    {
        id: 8,
        memberImage: GorMeshinyan,
        name: ' Gor Meshinyan',
        cours: 'WEB'
    },
    {
        id: 9,
        memberImage: HrayrChalabyan,
        name: 'Hrayr Chalabyan',
        cours: 'WEB'
    },
    {
        id: 10,
        memberImage: VahagnHakobyan,
        name: 'Vahagn Hakobyan',
        cours: 'WEB'
    },
  
    {
        id: 11,
        memberImage: VigenManukyan,
        name: 'Vigen Manukyan',
        cours: 'WEB'
    },
    {
        id: 12,
        memberImage: ArmanSanasaryan,
        name: 'Arman Sanasaryan',
        cours: 'WEB'
    },
    {
        id: 13,
        memberImage: ErikMuradyan,
        name: 'Erik Muradyan',
        cours: 'WEB'
    },
    {
        id: 14,
        memberImage: MelineGinosyan,
        name: 'Meline Ginosyan',
        cours: 'WEB'
    },
    
    {
        id: 16,
        memberImage: RadikMiqayelyan,
        name: 'Radik Miqayelyan',
        cours: 'WEB'
    },
    {
        id: 17,
        memberImage: RubenGeghamyan,
        name: 'RubenGeghamyan',
        cours: 'WEB'
    },
    {
        id: 18,
        memberImage: RubenTadevosyan,
        name: 'Ruben Tadevosyan',
        cours: 'WEB'
    },
    {
        id: 19,
        memberImage: AlikShxyan,
        name: 'Alik Shxyan',
        cours: 'WEB'
    },
    {
        id: 20,
        memberImage: ArmenKarapetyan,
        name: 'Armen Karapetyan',
        cours: 'WEB'
    },
    {
        id: 21,
        memberImage: AroHovhannisyan,
        name: 'Aro Hovhannisyan',
        cours: 'WEB'
    },
    {
        id: 22,
        memberImage: EdgarMatevosyan,
        name: 'Edgar Matevosyan',
        cours: 'WEB'
    },
    {
        id: 23,
        memberImage: MariamPoxosyan,
        name: 'Mariam Poxosyan',
        cours: 'WEB'
    },
    {
        id: 24,
        memberImage: MartinYesayan,
        name: 'Martin Yesayan',
        cours: 'WEB'
    },
    {
        id: 25,
        memberImage: StepanBadalyan,
        name: 'Stepan Badalyan',
        cours: 'WEB'
    },
    {
        id: 26,
        memberImage: davidsargsyan,
        name: 'Davit Sargsyan',
        cours: 'WEB'
    },
    {
        id: 27,
        memberImage: Lilithunanyan,
        name: 'Lilit Hunanyan',
        cours: 'QA AUTOMATION (JAVA)'
    },
    {
        id: 28,
        memberImage: MariamKhalatova,
        name: 'Mariam Khalatova',
        cours: 'QA AUTOMATION (JAVA)'
    },
    {
        id: 29,
        memberImage: SamvelAzibekyan,
        name: 'Samvel Azibekyan',
        cours: 'QA AUTOMATION (JAVA)'
    },
    {
        id: 30, 
        memberImage: VardanSoghomonyan,
        name: 'Vardan Soghomonyan',
        cours: 'QA AUTOMATION (JAVA)'
    },
    {
        id: 31,
        memberImage: HmayakAtayan,
        name: 'Hmayak Atayan',
        cours: 'QA AUTOMATION (JAVA)'
    },
    {
        id: 33,
        memberImage: EduardOdabashyan,
        name: 'Eduard Odabashyan',
        cours: 'QA AUTOMATION (JAVA)'
    },
    {
        id: 34,
        memberImage: ElzaMartirosyan,
        name: 'Elza Martirosyan',
        cours: 'QA AUTOMATION (JAVA)'
    },
    {
        id: 35,
        memberImage: HaykBghdasaryan,
        name: 'Hayk Bghdasaryan',
        cours: 'QA AUTOMATION (JAVA)'
    },
    {
        id: 36,
        memberImage: RafayelHovhannisyan,
        name: 'Rafayel Hovhannisyan',
        cours: 'QA AUTOMATION (JAVA)'
    },
    {
        id: 37,
        memberImage: Norayrantonyan,
        name: 'Norayr Antonyan',
        cours: 'QA AUTOMATION (JAVA)'
    },
        
        
        
]

// const StudentRender = studentsArr.map((students) =>{
//     return(
//         <div className='Members student-card box-shadow' key={students.id}>

//         <div 
//             className='member-image background-size' 
//             style={{backgroundImage : students.memberImage}}>
//                 <div className='hidden-block'> <img src={searchIcon} /></div> 
//         </div>
//         <div className='text-block'>
//             <h3 className='members-name-sname'>{students.name}</h3>
//             <p className='position'>{students.cours}</p>     
//         </div>
//     </div>
//     )
// })
 {/* {StudentRender} */}
export default class StudentsData extends PureComponent{ 
 constructor(props){
     super(props)
    this.state ={
        carouselShow: false,
        showIndex: null
    }
}
carouselView =(index) =>{
    this.setState({
        carouselShow: true,
        showIndex:index
    })
   
}

carouselClose = () =>{
    this.setState({
        carouselShow:false
    })
}
    render(){
        
     return(
         <div className='memberParent'>
             {
                 studentsArr.map((students, index) =>{
                    return(
                        <div className='Members student-card box-shadow' key={students.id}>
                
                        <div onClick={() => this.carouselView(index) }
                            className='member-image background-size' 
                            style={{backgroundImage : `url(${students.memberImage})`}}>
                                <div className='hidden-block'> <img src={searchIcon} /></div> 
                        </div>
                        <div className='text-block'>
                            <h3 className='members-name-sname'>{students.name}</h3>
                            <p className='position'>{students.cours}</p>     
                        </div>
                    </div>
                    )
                })
             }
             {this.state.carouselShow && <Carousel carouselClose={this.carouselClose} studentsArr={studentsArr} showIndex={this.state.showIndex} />} 
         </div>
     )
    }
}