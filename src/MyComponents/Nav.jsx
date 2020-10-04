import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Images/C.png'



const Nav = () => {
    return (
        // <div className=' nav ' style={{backgroundColor:'#23C6C7'}}>
        //     <div className="container ">
        //         <div className="row">
        //             <div >
                      
                    <nav className="nav bg-primary bg-dark sticky-top navbar navbar-expand-lg navbar-light ">
                      <div className="container">
  <NavLink class="navbar-brand" to="/"><img src={c} alt="" srcset="" height='45px' className='rounded-circle'/></NavLink>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon "></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item ">
        <NavLink exact activeClassName='active' className="nav-link text-light " to="/">Home </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink activeClassName='active' className="nav-link text-light" to="/about">About Us </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link text-light" to="/contact">Contact Us</NavLink>
      </li>
      <li className="nav-item dropdown">
        <a style={{cursor:"pointer"}} className="text nav-link dropdown-toggle text-light" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Member
        </a>
        <div className="dropdown-menu bg-danger" aria-labelledby="navbarDropdownMenuLink">
          <NavLink  className="dropdown-item " to="/advisory">Advisory Members</NavLink>
          <NavLink activeClassName='active' className="dropdown-item" to="/alumni">Alumni </NavLink>
          <NavLink activeClassName='active' className="dropdown-item" to="/executive">Executive Members</NavLink>
          <NavLink activeClassName='active' className="dropdown-item" to="/generalMember">General Members</NavLink>
          <NavLink activeClassName='active' className="dropdown-item" to="/becomeMember">Become Member</NavLink>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="text-light  nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{cursor:"pointer"}}>
          Announcements
        </a>
        <div className="bg-warning dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item " to="/event">Events</NavLink>
          <NavLink className="dropdown-item" to="/notices">Notices</NavLink>
          {/* <NavLink  className="dropdown-item " to="/news">News</NavLink> */}
          
        </div>
      </li>
      
    </ul>
  </div>
  </div>

</nav>
// </div>
//                 </div>
//             </div>
//         </div>
    );
};

export default Nav;