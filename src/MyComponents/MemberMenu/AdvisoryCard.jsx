import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const AdvisoryCard = ({img,des,title,linkfb,linkdin,insta}) => {
    return (
        <div>
            <div className="card" >
  <img src={img} className="card-img-top" height='300px' alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}</h5>
    <p className="card-text">{des}</p>
    <a  className='' style={{color:'black' }} href={linkfb}>
                    <FacebookIcon fontSize="large"/>
                    </a>
                    <a className='p-3' href={linkdin}>
                    <LinkedInIcon fontSize="large"/>
                    </a>
                    <a style={{color:'#EC7063'}} className='' href={insta}>
                    <InstagramIcon fontSize="large"/>
                    </a>
  </div>
</div>
        </div>
    );
};

export default AdvisoryCard;