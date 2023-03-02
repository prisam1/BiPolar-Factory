import React from "react"
import {useState, useEffect} from "react"


const Getdata=()=>{

const [data,setdata]=useState([])

const fetchData = async () => {
    
    const response = await fetch("http://localhost:3001/api/v1/getAllMatches");
    const data = await response.json();
    return setdata(data);
  }

  useEffect(() => {
    fetchData();
  },[]) 

    
 return(
    <>
    <ul>
        {data && data.length > 0 && data.map((userObj, index) => (
            <li key={userObj.matchDate}>{userObj.stadium}</li>
                   
          ))}
      </ul>

  </>
 )
}

export default Getdata
// matches": [ 
//     { 
//        "matchDate": 1651744228685, 
//        "stadium": "Maracanã", 
//        "homeTeam": "Brazil", 
//        "awayTeam": "Agentina", 
//        "matchPlayed": true/false, 
//        "homeTeamScore": 0, 
//        "awayTeamScore": 0 