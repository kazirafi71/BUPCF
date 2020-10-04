import React from 'react';



const Galary = ({image}) => {
    return (
        <div>
            
            <div>
            
            <img className='img-fluid' height='400px'  src={image} alt=""/>
            </div>
        </div>
    );
};

export default Galary;