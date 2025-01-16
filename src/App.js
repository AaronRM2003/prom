import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import PreEvents from './components/PreEvents';
import Contacts from './components/Contacts';

import navv from './components/assets/1707013909913.png'
import { useState,useEffect,useRef } from 'react'


import './App.css';

function OutsideDetector(props) {
  const ref = useRef(null);
  const { onTouchOutside } = props;

  useEffect(() => {
    const handleTouchOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onTouchOutside && onTouchOutside();
      }
    };

    document.addEventListener('touchstart', handleTouchOutside, true);

    return () => {
      document.removeEventListener('touchstart', handleTouchOutside, true);
    };
  }, [ onTouchOutside ]);

  if(!props.show) return null;

  return (
    <div ref={ref} className='outside-detector'>
      {props.children}
    </div>
  );
}

function App() {

    const [isTouchedOutside, setIsTouchedOutside] = useState(true);

  const handleTouchOutside = () => {
    setNav(false);
  };
  
  useEffect(() => {
    document.documentElement.style.zoom = "90%";
  }, []);

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
        <Route path='/Events' element={<Events/>} />
        <Route path='/PreEvents' element={<PreEvents/>} />
        <Route path='/Contacts' element={<Contacts/>} />

       
          </Routes>
      </div>
      <OutsideDetector onTouchOutside={handleTouchOutside} show={true}>

      {nav? <>
      <div className='navbar'>

     
     <div style={{fontFamily:'fomt3',marginLeft:'10%'}}>
     <div>
      <Link  to="/prom/" onClick={Shownav} style={{ WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none'}}> <h1 style={{marginTop:'5%'}}>Home</h1></Link>
      </div>
     <div>
      <Link to="/prom/About" onClick={Shownav} style={{   WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none'}}> <h1 style={{marginTop:'5%'}}>About RIT</h1></Link>
      </div>
      <div>
      <Link to="/prom/Events" onClick={Shownav} style={{ WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none'}}> <h1 style={{marginTop:'5%'}} >Events</h1></Link>
      </div>
      <div>
      <Link to="/prom/PreEvents" onClick={Shownav} style={{ WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none'}}> <h1 style={{marginTop:'5%'}} >Pre-Events</h1></Link>
      </div>
      <div>
      <Link to="/prom/Contacts" onClick={Shownav} style={{ WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none'}}> <h1 style={{marginTop:'5%'}} >Contacts</h1></Link>
      </div>

       </div>
      </div>
      
      </>:<> </>}
      <div style={{display:'block'}}>
    <button onClick={()=>setNav(prevNav => !prevNav)} style={{zIndex:'1',position:'fixed',border:'none',background:'none',padding:'0',cursor:'pointer'}}>
      <img style={{position:'fixed',top:'3%',opacity:'0.8',height:'3%',width:'14%'}} src={navv}></img>
</button>
</div>
      </OutsideDetector>

    </BrowserRouter>
  
    </div>
  );
}

export default App;
