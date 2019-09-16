import React, { PureComponent } from 'react';

import '../../style.css';
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

const studentsArr = [
    {
        id: 1,
        memberImage: `url(${arammirzoyan})`,
        name: 'Aram Mirzoyan',
        cours: 'JAVA'
    },
    {
        id: 2,
        memberImage: `url(${ashpetrosyan})`,
        name: 'Ashot Petrosyan',
        cours: 'JAVA'
    },
    {
        id: 3,
        memberImage: `url(${ashotsaruxanyan})`,
        name: 'Ashot Saruxanyan',
        cours: 'JAVA'
    },
    {
        id: 4,
        memberImage: `url(${gagikmovsesyan})`,
        name: 'Gagik Movsesyan',
        cours: 'JAVA'
    },
    {
        id: 5,
        memberImage: `url(${vahemikayelyan})`,
        name: 'Vahe Mikayelyan',
        cours: 'JAVA'
    },
    {
        id: 6,
        memberImage: `url(${AramHambardzumyan})`,
        name: 'Aram Hambardzumyan',
        cours: 'WEB'
    },
    {
        id: 7,
        memberImage: `url(${EdgarHovsepyan})`,
        name: 'Edgar Hovsepyan',
        cours: 'WEB'
    },
    {
        id: 8,
        memberImage: `url(${GorMeshinyan})`,
        name: ' Gor Meshinyan',
        cours: 'WEB'
    },
    {
        id: 9,
        memberImage: `url(${HrayrChalabyan})`,
        name: 'Hrayr Chalabyan',
        cours: 'WEB'
    },
    {
        id: 10,
        memberImage: `url(${VahagnHakobyan})`,
        name: 'Vahagn Hakobyan',
        cours: 'WEB'
    },
  
    {
        id: 11,
        memberImage: `url(${VigenManukyan})`,
        name: 'Vigen Manukyan',
        cours: 'WEB'
    },
    {
        id: 12,
        memberImage: `url(${ArmanSanasaryan})`,
        name: 'Arman Sanasaryan',
        cours: 'WEB'
    },
]

const StudentRender = studentsArr.map((students) =>{
    return(
        <div className='Members student-card' key={students.id}>

        <div 
            className='member-image background-size box-shadow' 
            style={{backgroundImage : students.memberImage}}>
        </div>
        <div className='text-block'>
            <h3 className='members-name-sname'>{students.name}</h3>
            <p className='position'>{students.cours}</p>     
        </div>
    </div>
    )
})
export default class StudentsData extends PureComponent{
    render(){
     return(
         <div className='memberParent'>
             {StudentRender}
         </div>
     )
    }
}