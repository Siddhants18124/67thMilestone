import React from 'react';
import './homepage.css';
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Homesection2 from '../homesection2/homesection2';
import Homesection3 from '../homesection3/homesection3';
import Homesection4 from '../homesection4/homesection4';



const Homepage = () => {
    return (
        <div className='container'>
            <div className="bg-image">
                <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="tint"></div>
            </div>

            <div className="incont">
                <div className="textblock">
                    <h1>67th Milestone<br></br>
                        Hero’s Challenge
                    </h1>
                    <div className="info">
                        <div className='infobox'>
                            <span className='date'>01</span>
                            <span className='underline'></span>
                            <span className="month">MAR</span>
                        </div>
                        <p className='extrainfo'>Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="locblock">
                    <CiLocationOn className='loc-icon' />
                    <a href=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolores?</p></a>

                </div>

                <div className="next">
                    <p>Next</p>
                    <MdKeyboardDoubleArrowDown className='down-icon' />
                </div>
            </div>
            <Homesection2 />
            <Homesection3/>
            <Homesection4/>

        </div>
    );
};

export default Homepage;
