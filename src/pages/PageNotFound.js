import React from "react";
import notfound from "../Images/404.png" 
import "../styles/PageNotFound.css"

const Pagenotfound = () => {
  return (

      <div className="pnf">
        <img src ={notfound} className="pnf-img" alt="notfound"/>
                          
      </div>
    
  );
};

export default Pagenotfound;