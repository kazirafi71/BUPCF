import React from 'react';

const EventCard = ({img,title,body,time}) => {
    return (
        <div className='eventCard'>
            <div class="card" >
  <img className="img-fluid" height="400px" src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
      <a className='hover' style={{textDecoration:'none'}} href="alert-link"><h3 className='hover my-3' style={{fontFamily:'Quicksand',fontWeight:'700',color:'#E74C3C '}} class="card-text">{title}</h3></a>
      <p className='lead my-4'>{body}</p>
    <span style={{color:'#3498DB '}}>{time}</span>
    
  </div>
    

</div>
        </div>
    );
};

export default EventCard;