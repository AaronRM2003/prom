import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import navv from './components/assets/1707013909913.png'
import { useState,useEffect } from 'react'
import './App.css';

function App() {
  
  const [nav, setNav] = useState(false);
  const [isShown, setIsShown] = useState(false);

  function Shownav(){
   
    setNav(prevNav => !prevNav);
   
  }

  return(
<div className={isShown? 'fade-out' : ''} style={{backgroundColor:'black',width:'100%'}} >

    <BrowserRouter>

      <div className='fade-in'>
     

        <Routes>
        <Route path="/" element={<Home />} /> 

        <Route path='/About' element={<About/>} />
       
          </Routes>
      </div>
      {nav? <>
      <div className='navbar'>
     
     <div style={{fontFamily:'fomt1',marginLeft:'10%'}}>
     <div>
      <Link  to="/" onClick={Shownav} style={{ WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none'}}> <h2 >Home</h2></Link>
      </div>
     <div>
      <Link to="/About" onClick={Shownav} style={{   WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none'}}> <h2 >About Us</h2></Link>
      </div>
      <div>
      <Link to="/events" onClick={Shownav} style={{ WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none'}}> <h2 >Events</h2></Link>
      </div>

       </div>
      
      </div>
      </>:<></>}
    </BrowserRouter>
    <div style={{display:'block'}}>
    <button onClick={()=>setNav(prevNav => !prevNav)} style={{zIndex:'1',position:'fixed',border:'none',background:'none',padding:'0',cursor:'pointer'}}>
      <img style={{position:'fixed',top:'3%',opacity:'0.8',height:'3%',width:'14%'}} src={navv}></img>
</button>
</div>
    </div>
  );
}

export default App;
