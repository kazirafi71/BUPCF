import React from 'react';
import { useState,useEffect } from 'react';
import EventCard from '../AnnounceMents/EventCard'
import {eventData} from  './EventsData'
import EventPagination from './EventPagination'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Events = () => {
    const [posts,setPosts]=useState(eventData);
    const [showPerPage,setShowPerPage]=useState(6)
    const [pagination,setPagination]=useState({
        start:0,
        end:showPerPage,
    })

    const onPagination=(start,end)=>{
        setPagination({start:start,end:end})

    }


    useEffect(()=>{
        Aos.init({duration:3000})
    },[])


    return (
        <div>
            <h1 className='py-5 text-center bg-dark text-light' style={{fontFamily:'Quicksand', fontWeight:'600'}}>Events</h1>
            <div className="container">
            <h1 className='py-5 text-center ' style={{fontFamily:'Quicksand', fontWeight:'600',color:'#E74C3C '}}>Our Events</h1>
                <div className="row py-5 g-5">
                    {posts.slice(pagination.start,pagination.end).map((val)=>{
                        return(<div data-aos="fade-up" className="col-md-8 mx-auto">
                        <EventCard 
                        img={val.img}
                        title={val.title}
                        body={val.body}
                        time={val.time}
                        />
                    </div>)
                    })}
                    
                </div>
                <EventPagination
                showPerPage={showPerPage}
                onPagination={onPagination}
                post={posts.length}
                />
            </div>
        </div>
    );
};

export default Events;