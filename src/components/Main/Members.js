import React, { PureComponent } from 'react';

import CEO from '../../assets/members/levon.jpg';
import SisAdmin from '../../assets/members/SisAdmin.jpg';
import JavaTest from  '../../assets/members/QA-Automation-mentor.jpg';
import JavaMentor from '../../assets/members/Java-mentor.jpg';
import JsMentor from '../../assets/members/JS-mentor.jpg';
import NodeJsMentor from '../../assets/members/nodejs.png';
import ManualTestingMentor from '../../assets/members/ManualTesting.JPG';
import ManualTestingMentorA from'../../assets/members/astghik.jpg';
import JsMentorM from '../../assets/members/MichaelGevorgyan.jpg';
import JsMentorA from '../../assets/members/Arsen.jpg'
import Divider from './Divider';
import './main.css';
import facebook from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';
// import Courses from './Cousrese'
import Title from './Title'

const memberData = [
    {
        id: 1, 
        memberImage: `url(${CEO})`,
        name: 'Levon Azizyan', 
        position: 'Ceo', 
        aboutWork: 'Software Engineer at EPAM Systems', 
        icons: [
            {fc : true},
            {lnk : true},
            {inst : true},
        ]
    },
    
    {
        id: 2, 
        memberImage: `url(${SisAdmin})`,
        name: 'Armen Zakaryan', 
        position: 'SisAdmin', 
        aboutWork: 'IT Support specialist at Betconstruct', 
        icons: [
            {fc : true},
            {lnk : true},
            {inst : true},
        ]
    },
    {
        id: 3, 
        memberImage: `url(${JavaTest})`,
        name: 'Karen Mkhitaryan', 
        position: 'Java & Automation Testing Mentor', 
        aboutWork: 'Software Test Automation Engineer at EPAM Systems', 
        icons: [
            {fc : false},
            {lnk : true},
            {inst : true},
        ]
    },
    {
        id: 4, 
        memberImage: `url(${JavaMentor})`,
        name: 'Levon Aloyan', 
        position: 'Java Mentor', 
        aboutWork: 'Software Engineer at EPAM Systems', 
        icons: [
            {fc : true},
            {lnk : true},
            {inst : true},
        ]
    },
    {
        id: 5, 
        memberImage: `url(${JsMentor})`,
        name: 'Karen Sargsyan', 
        position: 'JS Mentor', 
        aboutWork: 'Js Mentor at Level Up IT Center', 
        icons: [
            {fc : true},
            {lnk : false},
            {inst : true},
        ]
    },
 
    {
        id: 6, 
        memberImage: `url(${NodeJsMentor})`,
        name: 'Ruben Aprikyan', 
        position: 'NodeJS Mentor', 
        aboutWork: 'Software Engineer at Brainstorm Technologies', 
        icons: [
            {fc : true},
            {lnk : false},
            {inst : false},
        ]
    },
    {
        id: 7, 
        memberImage: `url(${ManualTestingMentor})`,
        name: 'Mariam Poghosyan', 
        position: 'JS Mentor', 
        aboutWork: 'Js Mentor at Level Up IT Center', 
        icons: [
            {fc : true},
            {lnk : true},
            {inst : true},
        ]
    },
    {
        id: 8, 
        memberImage: `url(${ManualTestingMentorA})`,
        name: 'Astghik Sanasaryan', 
        position: 'Manual Testing Mentor', 
        aboutWork: 'Senior Software Testing Engineer at EPAM Systems', 
        icons: [
            {fc : true},
            {lnk : true},
            {inst : true},
        ]
    },
    {
        id: 9, 
        memberImage: `url(${JsMentorM})`,
        name: 'Mickael Gevorgyan', 
        position: 'JS Mentor', 
        aboutWork: 'Js Mentor at Level Up IT Center', 
        icons: [
            {fc : true},
            {lnk : true},
            {inst : true},
        ]
    },
    {
        id: 10, 
        memberImage: `url(${JsMentorA})`,
        name: ' Arsen Admayan', 
        position: ' JS Mentor', 
        aboutWork: 'Software Engineer at EPAM Systems', 
        icons: [
            {fc : true},
            {lnk : true},
            {inst : true},
        ]
    },
    ];

    const dataLoader = memberData.map((member)=>{    
        return(
            <div className='Members' key={member.id}>

            <div 
                className='member-image' 
                style={{backgroundImage : member.memberImage}}>
            </div>
            <div className='text-block'>
                <h3 className='members-name-sname'>{member.name}</h3>
                <p className='position'>{member.position}</p>
                <p className='about-work'>{member.aboutWork}</p>
                <Divider />
                <div className='icons-block'>
                    <div className='icon' style={{backgroundImage:`url(${facebook})`}}></div>
                    <div className='icon' style={{backgroundImage:`url(${linkedin})`}}></div>
                    <div className='icon' style={{backgroundImage:`url(${instagram})`}}></div>
                </div>
            </div>
        </div>
        )
    })

export default class Members extends PureComponent{
    render(){
        return(
          <div>
              <Title/>
              <div className='memberParent'>
                {dataLoader}
          </div>
          </div>
          
        )
    }
}
