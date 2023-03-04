 import React from "react";
 import axios from "axios"

import "../styles/homePage.css";


const HomePage = () => {
  
  axios.get("http://localhost:3001/api/v1/getAccessToken")
  .then(response => {

    const token  =  response.data.access_token;
    localStorage.setItem("token", token);
    setAuthToken(token);

    }) 
  .catch(err => console.log(err));

const setAuthToken = (token) => {

if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
else
    delete axios.defaults.common.Authorization;
}

  return (
    <>
    <div className="main">
            <h1>HomePage</h1>
    </div>
    
    </>
  );
};

export default HomePage; 