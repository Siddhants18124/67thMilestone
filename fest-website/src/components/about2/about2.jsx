import React from 'react'
import pic from '../../assets/p.png'
import './about2.css'


function About2() {
    return (
        <div className='ab2cont'>
            <div className="abimgcont">
                <img srcSet={pic} alt="" />
                <img srcSet={pic} alt="" />
            </div>
            <div className="atcont">
                <h1>About Fest</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, necessitatibus velit deserunt laboriosam, consequuntur provident officia soluta amet rem totam fugiat mollitia animi quisquam aspernatur illum dolorem sequi deleniti perspiciatis.</p>
            </div>
        </div>
    )
}

export default About2