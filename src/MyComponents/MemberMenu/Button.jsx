import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Button = ({showPerPage,onPaginationChange,total}) => {
    
    const[count,setCount]=useState(1);

    useEffect(()=>{
        const value=showPerPage*count;
        onPaginationChange(value-showPerPage,value)


    },[count])

    const onButtonClick=(type)=>{
        if(type==='prev'){

            if(count===1){
                setCount(1)
                alert('This is your current page')
            }
            else{
                setCount(count-1)
            }
        }
        else if(type==='next'){
            if(Math.ceil(total/showPerPage)===count){
                setCount(count)
                alert('This is your last page')
            }
            else{
                setCount(count+1)
            }
        }
    }
    return (
        <div className='d-flex justify-content-between pb-5'>
            <button  onClick={()=>onButtonClick('prev')} className='btn btn-outline-primary'>Previous</button>
            <button onClick={()=>onButtonClick('next')} className='btn btn-outline-primary'>Next</button>
        </div>
    );
};

export default Button;