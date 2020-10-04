import React from 'react';
import AdvisoryCard from './AdvisoryCard';
import {AdvisoryData} from './Data'

const Advisory = () => {
    
    return (
        <div>
            <h1 style={{fontFamily:'Quicksand',fontWeight:'600'}} className='text-center py-5 text-light bg-warning'>Advisory Board Members</h1>
            <div className="container">
                <div className="row g-4 mb-5">
                    <h1 style={{fontFamily:'Quicksand',fontWeight:'600'}} className='text-center py-5'>Current Advisory Board Members</h1>
                    {AdvisoryData.map((val)=>{
                        return(<div className="col-md-4">
                        <AdvisoryCard
                        img={val.img}
                        title={val.title}
                        des={val.des}
                        linkfb={val.linkfb}
                        inkdin={val.inkdin}
                        insta={val.insta}
                        />
                    </div>)
                    })}
                    
                </div>
            </div>
        </div>
    );
};

export default Advisory;