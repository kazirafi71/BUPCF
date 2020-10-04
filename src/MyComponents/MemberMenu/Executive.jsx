import React from 'react';
import Card from './Card';
import Cdata from './Data';

const Executive = () => {
    return (
        <div>
            <section className="bg-dark py-5">

            
            <div className="container">
                <div className="row">
                    <div className="col  py-5">
                        <h1 className='text-center text-light'>Current Executives</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row py-5 my-5 g-5">
                    <h1 className='text-center mb-4'>Current Executives 2020</h1>
                    
                    {Cdata.map((val)=>{
                        return(<div className="col-md-6">
                        <Card
                        img={val.img1}
                        title={val.title}
                        des={val.des}
                        linkfb={val.linkfb}
                        linkdin={val.linkdin}
                        insta={val.insta}
                        />
                        
                    </div>)
                    })}
                    
                </div>
            </div>
        </section>
        </div>
    );
};

export default Executive;