import React from "react";
import "../styles/schedule.css"
import {useState,useEffect} from "react"


const Schedule = () => {
 
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
     
      <div className="teamflag">
      <div className="home">
          <div>
          <img src="https://flagsapi.codeaid.io/Brazil.png" alt="Brazil" className="imgflag"/>
         
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Switzerland.png" alt="Switzerland" className="imgflag"/>
          
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Serbia.png" alt="Serbia" className="imgflag"/>
         
          </div >

          <div>
          <img src="https://flagsapi.codeaid.io/Brazil.png" alt="Brazil" className="imgflag"/>
         
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Brazil.png" alt="Brazil" className="imgflag"/>
         
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Switzerland.png" alt="Switzerland" className="imgflag"/>
          
          </div>              
      </div>
      

      <div className="away">

          <div>
          <img src="https://flagsapi.codeaid.io/Serbia.png" alt="Serbia" className="imgflag"/>
          
          </div>
          

          <div>
          <img src="https://flagsapi.codeaid.io/Serbia.png" alt="Serbia" className="imgflag"/>
          
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Cameroon.png" alt="Cameroon" className="imgflag"/>
         
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Switzerland.png" alt="Switzerland" className="imgflag"/>
          
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Cameroon.png" alt="Cameroon" className="imgflag"/>
          
          </div>

          <div>
          <img src="https://flagsapi.codeaid.io/Cameroon.png" alt="Cameroon" className="imgflag"/>
         
          </div>
          

         </div>             
    {/* <div>  
  {match.map((data))}
  </div> */}
      </div>
      </div>
       
    </>
  );

  }
export default Schedule;