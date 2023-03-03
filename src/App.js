import React from "react";
import {Route , Routes} from "react-router-dom";
import Pagenotfound from "./pages/PageNotFound";
import  Footer  from "./component/footer";
import  Header  from "./component/header";
import Leaderboard from "./pages/Leaderboard";
import Schedule from "./pages/Schedule";
import HomePage from "./pages/HomePage";

function App() {
 
    return (
     
    <>
    
    <Header/>
    <Routes>   
       <Route path="/" element={<HomePage/>} />  
       <Route path='/Leaderboard' element={<Leaderboard/>} />
       <Route path='/Schedule' element={<Schedule/>} />
       <Route path="*" element={<Pagenotfound />} />
     </Routes>
     <Footer/>
    </>
  );
}

export default App;