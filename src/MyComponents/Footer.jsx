import React from 'react';
import c from './Images/C.png'

const Footer = () => {  
    const date=new Date();
    const year=date.getFullYear();
    // console.log(year)
    
    return (
        <div className='bg-dark'>
            <div className="container">
                
            <div className="row">
                <div className="col  py-4">
                    <p className='text-center text-light'>© { year} BUPCF - All Rights Reserved.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;