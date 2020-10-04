import React from 'react';
import Slider from './Slider'
import Galary from './Galary'
import {imgGlary} from './MemberMenu/Data'

const Home = () => {
    
    return (
        <div>
            <Slider/>
            
            <div className="container">
                
                <div className="row g-4 py-5 my-5">
                <h1  style={{fontFamily:'Quicksand',fontWeight:'700'}} className='text-center '>Image Galary</h1>
                    {imgGlary.map((val)=>{
                        return(<div   className="col-md-4 ">
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