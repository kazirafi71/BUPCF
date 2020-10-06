import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const EventPagination = ({showPerPage,onPagination,post}) => {
    
    const [count,setCount]=useState(1)
    useEffect(()=>{
        const value=showPerPage*count;
        onPagination(value-showPerPage,value)

    },[count])
    

    const clickEvent=(type)=>{
        if(type==='prev'){
            if(count==1)
            {
                setCount(1)
            }
            else{
                setCount(count-1)
            }
        }

        if(type==='next')
        if(Math.ceil(post/showPerPage)===count)
        {
            setCount(count)
        }else
        {
            setCount(count+1)
        }

    }


    return (
        <div className='d-flex justify-content-between pb-5'>
            <button onClick={()=>clickEvent('prev')} className='btn btn-outline-warning'>Previous</button>
            <button onClick={()=>clickEvent('next')} className='btn btn-outline-warning'>Next</button>
        </div>
    );
};

export default EventPagination;