import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const Card = ({img,linkdin,linkfb,des,title,insta}) => {
    return (
        <div>
            <div class="card mb-3">
    <div class="row ">
    <div class="col-5">
        <img height="200px" width="200px" src={img} class="card-img" alt="..."/>
    </div>
    <div class="col-7">
        <div class="card-body">
    <h3 style={{fontFamily:"Quicksand",fontWeight:"600"}} class="card-title">{title}</h3>
    <p style={{color:'#18B3CF ',fontFamily:"poppins"}} class="card-text">{des}</p>
    <div className="mt-5">
    <a  className='p-2' style={{color:'black'}} href={linkfb}>
    <FacebookIcon/>
    </a>
    <a className='p-2' href={linkdin}>
    <LinkedInIcon/>
    </a>
    <a style={{color:'#EC7063'}} className='p-2' href={insta}>
    <InstagramIcon/>
    </a>
    </div>
    


      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;