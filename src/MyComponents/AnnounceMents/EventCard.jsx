import React from 'react';

const EventCard = ({img,title}) => {
    return (
        <div>
            <div class="card" >
  <img className="img-fluid" height="300px" src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
      <a style={{textDecoration:'none'}} href="alert-link"><h3 class="card-text">{title}</h3></a>
    
  </div>
</div>
        </div>
    );
};

export default EventCard;