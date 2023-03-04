import React from "react";
import { Link} from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
import Logoimg from "../Images/logo.svg";
import Scheduleimg from "../Images/schedule.png";
import Leaderboardimg from "../Images/leaderboard.png";

import "../styles/header.css"
const Header = () => {

  return (
    <>
     
       <div className="header">   

        <div className="left">
           <Link to="/" className="nav-link">
                 <img src={Logoimg} className="logoimg" alt="mainlogo"/>
                 </Link>  
           </div> 

           <div className="link">
           <div className="first">
           <Link to="/Schedule" className="nav-link">
                <img src={Scheduleimg} className="schimg" alt="schlogo"/>
                <div className="logotext">Schedule</div>
                </Link>
           </div> 
           
           <div className="second">
           <Link to="/Leaderboard" className="nav-link">
                <img src={Leaderboardimg} className="leadimg" alt="leadlogo"/>
                <div className="topright">Leaderboard</div>
            </Link>
           </div> 
           </div> 

                     
          </div>
        
    </>
  );
};

export default Header;