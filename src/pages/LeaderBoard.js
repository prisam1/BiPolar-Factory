import React from "react";
import "../styles/leaderboard.css"
import {useState,useEffect} from "react"

const Leaderboard = () => {

  const token = localStorage.getItem("token");

  const [result, setResult] = useState();
  useEffect(()=>{
    fetch('http://localhost:3001/api/v1/getAllMatches', {
      method: "GET",
      headers: {"Authorization": `Bearer ${token}`}
    }).then(res => res.json()).then(json => setResult(json));
  },[]);
   

  // function data(val){

  //   return(
  //       <>    
  //      <h4>{val}</h4>    
  //      <h4>{val}</h4> 
  //       </>
  //   )}

  // const match=result.matches
  
  return (
    <>
    <div className="standings">
  
    <h1 className="middl">League Standings</h1>
   
    
    <div className="ldata">
      <div className="lleftt"> 
         <div className="team">Team Name</div>
         
      </div>
      <div className="rright">
          <div>MP</div>
          <div>GF</div>
          <div>GA</div>
          <div>Points</div>
      </div>   
    </div>
    <div className="flags">

          <div>
          <img src="https://flagsapi.codeaid.io/Brazil.png" alt="Brazil" className="imgflag"/>
          <hr className="hr"/>
          </div>
          
          <div>
          <img src="https://flagsapi.codeaid.io/Cameroon.png" alt="Cameroon" className="imgflag"/>
          <hr className="hr"/>
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Switzerland.png" alt="Switzerland" className="imgflag"/>
          <hr className="hr"/>
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Serbia.png" alt="Serbia" className="imgflag"/>
         </div>
         </div>
      {/* <div>  
  {match.map((data))}
  </div> */}   
  </div>
 
  </> 
  );
};

export default Leaderboard;