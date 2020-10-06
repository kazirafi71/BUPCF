import React, { useEffect } from 'react';
import Slider from './Slider'
import Galary from './Galary'
import {imgGlary} from './MemberMenu/Data'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    
    return (
        <div>
            <Slider/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1></h1>
                    </div>
                </div>
            </div>
            
            <div className="container">
                
                <div className="row g-4 py-5 my-5">
                <h1  data-aos="fade-up" style={{fontFamily:'Quicksand',fontWeight:'700'}} className='text-center '>Image Galary</h1>
                    {imgGlary.map((val)=>{
                        return(<div data-aos="zoom-in" className="col-md-4 ">
                        <Galary  
                        image={val.img}
                        
                        />
                    </div>)
                    })}
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Home;