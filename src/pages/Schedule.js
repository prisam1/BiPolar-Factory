import React from "react";
import "../styles/schedule.css"
import {useState,useEffect} from "react"
import axios from "axios"

const Schedule = () => {
 
    axios.get("http://localhost:3001/api/v1/getAccessToken")
    .then(response => {
 
      const token  =  response.token;
      localStorage.setItem("token", token);
      setAuthToken(token);
    }) 
    .catch(err => console.log(err));

const setAuthToken = token => {
  if (token) {
      axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
  else
      delete axios.defaults.headers["Authorization"];
}
const token = localStorage.getItem("token");
 if (token) {
     setAuthToken(token);
 }

  return (
    <div className="Schedule">
  
      <h1 className="midd">League Schedule</h1>
     
      
      <div className="data">
        <div className="leftt">
            <div>Date/Time</div>
            <div>Stadium</div>
        </div>
        <div className="right">
            <div>Home Team</div>
            <div>Away Team</div>
        </div>   
      </div>
   
    </div>
  );

  }
export default Schedule;