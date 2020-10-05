import React from 'react';



const Galary = ({image}) => {
    return (
        <div>
            
            <div>
                <a href={image}>
                <img className='img-fluid' height='400px'  src={image} alt=""/>
                </a>
            
            
            </div>
        </div>
    );
};

export default Galary;