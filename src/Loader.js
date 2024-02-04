import React, { useState, useEffect } from 'react';
import App from './App';


function Loader() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 10000); // Change this to the desired delay in milliseconds

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);

  return isShown ? <App /> : <div  style={{ width:'100%',backgroundColor:'black',paddingBottom:'400%'}} >
  <div className='fade-out'>
   <div  style={{transform:'translate(0%,600%)'}}  className='loader'>
prominence
</div>
</div>
</div>;
}

export default Loader;
