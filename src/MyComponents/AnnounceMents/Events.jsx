import React from 'react';
import { useState } from 'react';
import EventCard from '../AnnounceMents/EventCard'
import {eventData} from  './EventsData'
import EventPagination from './EventPagination'

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




    return (
        <div>
            <h1 className='py-5 text-center bg-dark text-light' style={{fontFamily:'Quicksand', fontWeight:'600'}}>Events</h1>
            <div className="container">
                <div className="row py-5 g-4">
                    {posts.slice(pagination.start,pagination.end).map((val)=>{
                        return(<div className="col-md-4">
                        <EventCard 
                        img={val.img}
                        title={val.title}
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