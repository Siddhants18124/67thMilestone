import React from 'react'
import { Parallax, useParallax } from 'react-scroll-parallax';
import eventbg from '../assets/eventbg.png';

function Event(){
    return (
        <div>
            <Parallax strength={600} bgImage={eventbg}>
                <image></image>

            </Parallax>
            
        </div>

    );
}

export default Event;