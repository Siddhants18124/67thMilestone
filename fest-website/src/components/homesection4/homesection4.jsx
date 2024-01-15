import React from 'react';
import './homesection4.css'; // Make sure to import your CSS file
import educatelogo from '../../assets/educate.png';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';


const Homesection4 = () => {
    return (
        // <ParallaxBanner>
            <div className="section4container">
                <div className="educateinfo">
                    {/* <Parallax> */}
                        <div className="imgcont">
                            <img srcSet={educatelogo} alt="" className='educatelogo' speed />
                        </div>
                    {/* </Parallax> */}
                    {/* <div className='text4'> */}
                    <p className='educatetext'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores molestiae nobis nesciunt rerum soluta? Fugiat deserunt necessitatibus quae impedit eligendi aliquam omnis, cupiditate ad maiores sunt, sapiente, distinctio adipisci dicta qui atque vel vero architecto incidunt. Inventore eveniet, reiciendis esse modi adipisci est iste enim dignissimos laborum atque. Perferendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, porro? Obcaecati maiores consequatur voluptate alias officiis deleniti modi enim, dolore totam, esse, reprehenderit itaque sit quo sint. Molestiae nobis magni quaerat quia atque odio est dolore voluptas sed aperiam incidunt vel cumque reiciendis, porro sequi! Natus ut labore autem inventore, cumque sunt quos repellat nostrum dolorem id asperiores dolore porro distinctio eos laudantium hic amet eius? Esse magni ratione id? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, debitis! Magnam illum ipsum dicta quae. Odio eligendi ad quisquam cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, excepturi!</p>
                    {/* </div> */}
                </div>
                <div className="btncont">
                    <div className='btnholder'>
                        <a className='btncontr' href="#">Contribute</a>
                    </div>
                </div>
            </div>
        // </ParallaxBanner>

    );
};

export default Homesection4;
