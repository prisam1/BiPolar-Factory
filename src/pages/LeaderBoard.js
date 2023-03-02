import React from "react";
import "../styles/leaderboard.css"

const Leaderboard = () => {
  
  return (
    
    <div className="standings">
  
    <h1 className="middl">League Standings</h1>
   
    
    <div className="ldata">
      <div className="lleftt">
          <div>Team Name</div>
      </div>
      <div className="rright">
          <div>MP</div>
          <div>GF</div>
          <div>GA</div>
          <div>Points</div>
      </div>   
    </div>

  </div>

   
  );
};

export default Leaderboard;