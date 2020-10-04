import React from 'react';
import Img1 from './Images/welcome.png'
import img2 from './Images/117307340_726083207950948_2331978337607759411_o.jpg'
import img3 from './Images/120297559_763176167574985_438309083772855239_o.jpg';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  style={{height:"600px"}} src={Img1} class="d-block w-100 " alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img style={{height:"600px"}} src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
       
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height:"600px"}} src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
        
      </div>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    );
};

export default Slider;