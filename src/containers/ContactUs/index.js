
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import img1 from '../../assets/image/el.jpg';
import img2 from '../../assets/image/l.jpg';
import img3 from '../../assets/image/l2.jpg';
import img4 from '../../assets/image/sld1.JPG';
import './contactUs.css';
import Divider from '../../components/Main/Divider';
import desktopSvg from '../../assets/contactUsSvg/desktop.svg';
import envelopeSvg from '../../assets/contactUsSvg/envelope.svg';
import mapSvg from '../../assets/contactUsSvg/map.svg';
import phoneSvg from '../../assets/contactUsSvg/phone.svg';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import 'react-animated-slider/build/horizontal.css';
import './contactUs.css';


let imageOfContactUs = [
    img1,
    img2,
    img3,
    img4
];

let PrevBtnIcon = () => {
    return (
        <FaChevronCircleLeft className="prevBtn" />

    )
}
let NextBtnIcon = () => {
    return (
        <FaChevronCircleRight className="nextBtn" />

    )
}


class ContactUs extends PureComponent {
    render() {
        return (
            <div className="ContactUs  withStretch flexible vertical">
                <Helmet>
                    <title>Contactus</title>
                </Helmet>
                <Slider nextButton={<NextBtnIcon />} previousButton={<PrevBtnIcon />} className="slider mySld">
                    {
                        imageOfContactUs.map((elem, index) => {
                            return (
                                <div className="MainImageBlock image-centering"
                                    style={
                                        {
                                            background: `url(${ elem })`
                                        }
                                    }>
                                </div>
                            )
                        })
                    }

                </Slider>


                <div className="contact-us-content page-content">
                    {/* <ContastTeam lang="Contact Us" /> */}

                    <div className="contacts-info">
                        <div className="location-icon-block flexible aEnd jCenter">
                            <span className="Icon">
                                <img src={mapSvg} alt="mapSvg" />
                            </span>
                        </div>

                        <div className="contact-info-block flexible vertical jBetween">
                            <h2>Armenia Yerevan, 15 Khorenatsi Street, Elite Plaza Business Center, 4th floor</h2>

                            <div className="info-icons flexible jAround">
                                <div className="message-icon in-ico flexible vertical aCenter">
                                    <div><span>Email:</span> leveluparmenia@gmail.com</div>

                                    <span className="Icon">
                                        <img src={envelopeSvg} alt="envelopeSvg" />
                                    </span>
                                </div>

                                <div className="phone-icon in-ico flexible vertical aCenter">
                                    <div><span>Tel:</span> +374 (99) 91 36 90</div>

                                    <span className="Icon">
                                        <img src={phoneSvg} alt="phoneSvg" />
                                    </span>
                                </div>

                                <div className="site-icon in-ico flexible vertical aCenter">
                                    <div><span>Website:</span> levelup.am</div>

                                    <span className="Icon">
                                        <img src={desktopSvg} alt="desktopSvg" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="google-map">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d761.8699827231069!2d44.49004600000001!3d40.198386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6c7c865a59%3A0xd6608f277414da7b!2sDasaran%20Educational%20Center!5e0!3m2!1sru!2s!4v1569036352719!5m2!1sru!2s" ></iframe>
                </div>

            </div>


        );
    }
}


export default ContactUs;