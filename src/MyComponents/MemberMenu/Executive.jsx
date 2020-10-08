import React, { useEffect } from 'react';
import Card from './Card';
import {exData} from '../MemberMenu/ExData';
import { useState } from 'react';
import Button from './Button'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Executive = () => {
    const [posts,setPosts]=useState(exData);
    const[showPerpage,setShowPerpage]=useState(13)

    const [pagination,setPagination]=useState({
        start:0,
        end:showPerpage,
    })
    console.log(0,15)

    const onPaginationChange=(start,end)=>{
        setPagination({start:start,end:end})
    }

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    
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
                    
                    {posts.slice(pagination.start,pagination.end).map((val)=>{
                        return(<div data-aos='fade-up' className="col-md-6">
                        <Card

                        img={val.img}
                        title={val.name}
                        des={val.title}
                        linkfb={val.linkfb}
                        linkdin={val.linkdin}
                        insta={val.insta}
                        />
                        
                    </div>)
                    })}
                    
                </div>
                <Button showPerPage={showPerpage}
                onPaginationChange={onPaginationChange}
                total={posts.length}
                />
            </div>
        </section>
        </div>
    );
};

export default Executive;