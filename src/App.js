import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './MyComponents/Style.scss'
import './App.css';
import {Switch,Route, Redirect} from 'react-router-dom'
import Home from './MyComponents/Home'
import Contact from './MyComponents/Contact'
import About from './MyComponents/About'
import Member from './MyComponents/Member'
import AnnounceMent from './MyComponents/AnnounceMent'
import Advisory from './MyComponents/MemberMenu/Advisory'
import Alumni  from './MyComponents/MemberMenu/Alumni.jsx'
import Executive from './MyComponents/MemberMenu/Executive.jsx'
import GeneralMember from './MyComponents/MemberMenu/GeneralMember.jsx'
import Event from './MyComponents/AnnounceMents/Event'
import Notices from './MyComponents/AnnounceMents/Notices'
import News from './MyComponents/AnnounceMents/News'
import Nav from './MyComponents/Nav'
import './MyComponents/Style.scss'
import BecomeMember from './MyComponents/MemberMenu/BecomeMembers'
import Footer from './MyComponents/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/member' component={Member}></Route>
        <Route exact path='/announceMent' component={AnnounceMent}></Route>
        <Route exact path='/event' component={Event}></Route>
        <Route exact path='/notices' component={Notices}></Route>
        {/* <Route exact path='/news' component={News}></Route> */}
        <Route exact path='/generalMember' component={GeneralMember}></Route>
        <Route exact path='/executive' component={Executive}></Route>
        <Route exact path='/alumni' component={Alumni}></Route>
        <Route exact path='/becomeMember' component={ BecomeMember}></Route>
        <Route exact path='/Advisory' component={Advisory}></Route>
        <Redirect to='/' ></Redirect>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
