import React, { useState, useEffect } from 'react';
import App from './App';


function Loader() {
  const isDesktop = !/Mobi|Android/i.test(navigator.userAgent);

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 8000); // Change this to the desired delay in milliseconds

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);

  return <> {!isDesktop?
    <>
  {isShown  ? <App /> : <div  style={{ width:'100%',backgroundColor:'black',paddingBottom:'400%'}} >
  <div className='fade-out'>
   <div  style={{transform:'translate(0%,600%)'}}  className='loader'>
prominence
</div>
</div>
  
</div>}

</>:<div  style={{fontFamily:'monospace',color:'white',fontSize:'100px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'black',paddingBottom:'400%', paddingLeft:'20px'}} >
  <div style={{textAlign:'center'}}> PLEASE SWITCH TO MOBILE DEVICE </div></div >}
</>
}

export default Loader;
