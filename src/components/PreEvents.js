import {React,useEffect} from "react"
import {motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { useLocation } from 'react-router-dom';
import el from './assets/IMG_0700.jpg'
import em from './assets/IMG-20240205-WA0031.jpg'
import un from './assets/IMG-20240209-WA0002.jpg'
import neb from './assets/IMG-20240209-WA0003.jpg'
import nav from './assets/IMG-20240209-WA0005.jpg'
import as from './assets/IMG-20240209-WA0004.jpg'
import nev from './assets/IMG-20240209-WA0006.jpg'
import bg from './assets/IMG-20240213-WA0007.jpg'
import ps from './assets/IMG-20240213-WA0001.jpg'
import mm from './assets/IMG-20240213-WA0004.jpg'
import sh from './assets/IMG-20240213-WA0040.jpg'
import nw from './assets/IMG-20240217-WA0018.jpg'
import p from './assets/p.png'


function Event() {
  const location = useLocation();

  useEffect(() => {
    // If there is a hash in the URL, scroll to the element with that id
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({behavior: "smooth"});
      }
    }
  }, [location,]);
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 2.5 } },
        hidden: { opacity: 0, scale: 1 ,transition:{duration: 1}}
      };
      const boxVariant1 = {
        visible: {x:0, transition: { duration: 2.5 } },
        hidden: { x:-200,transition:{duration: 1}}
      };
      const control = useAnimation();
      const [ref, inView] = useInView({
        threshold: 0,  // Added threshold
      });
      useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
      }, [control, inView]);
      
      const Box = ({h,w='100%', img,text }) => {
        const control = useAnimation();
        const [ref, inView] = useInView({
          threshold: 0 // Added threshold
        });
        useEffect(() => {
          if (inView) {
            control.start("visible");
          } 
        }, [control, inView]);
        return (
    
          <motion.div
          ref={ref}
            className="box"
            animate={control}
            initial="hidden" 
            variants={boxVariant} // Start with opacity 0
            // Animate to opacity 1
          >
            <img style={{width:w,height:h,objectFit:'cover'}} src={img}></img>
            <h1 style={{color:'white'}}> {text} </h1>
          </motion.div>
          
        );
      }
      const Box1 = ({img,h,w='100%'})=>{
        const control = useAnimation();
        const [ref, inView] = useInView({
          threshold: 0.6  // Added threshold
        });
        useEffect(() => {
          if (inView) {
            control.start("visible");
          } else {
            control.start("hidden");
          }
        }, [control, inView]);
        return (
    
          <motion.div
          ref={ref}
            className="box"
            animate={control}
            initial="hidden" 
            variants={boxVariant1} // Start with opacity 0
            // Animate to opacity 1
          >
            <img style={{width:w,height:h,objectFit:'cover'}} src={img}></img>
          </motion.div>
          
        );
      } 

    return <div className="back5 container-fluid"> 
          <ScrollToTop />

   <Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'#00ae09'}}> Pre-Events</h3>
} />
   
      <Box  text={<div className="boxx">
       <h2 className="fomt" style={{color:'white',fontSize:'100%',marginBottom:'10%',marginTop:'0%'}}>Python Online Workshop</h2>
     
       <p className="rs" style={{fontFamily:'fomt1',fontSize:'20px'}}>20 Rs Only/-</p>
       <h1  style={{color:'#00ae09',fontSize:'80%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>FEB 20 - 22</h1>

       <h2 className="fomt" style={{color:'white',fontSize:'100%',marginBottom:'10%',marginTop:'10%'}}>Speakers</h2>

       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='30%' height='30%' src={el} ></img>

   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'10%'}}>Emil Maria James</h3>
       </div>
       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>
      <img width='30%' height='30%' src={em} ></img>
   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'10%'}}>Ellen Rose James</h3>
       </div>
       <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/Python_Series_Prominence24" target="_blank" rel="noopener noreferrer"> 
       <div style={{transform:'translate(30%)',marginBottom:'10%'}} className="reg"> Register</div></a>
      </div>} />

      <Box  text={<div className="boxx">
       <h2 className="fomt" style={{color:'white',fontSize:'100%',marginBottom:'10%',marginTop:'10%'}}>Financial stock market online workshop</h2>
     
       <p className="rs" style={{fontFamily:'fomt1',fontSize:'20px'}}>20 Rs Only/-</p>
       <h1  style={{color:'#00ae09',fontSize:'80%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>FEB 17</h1>

       <h2 className="fomt" style={{color:'white',fontSize:'100%',marginBottom:'10%',marginTop:'10%'}}>Speaker</h2>

       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='30%' height='30%' src={as} ></img>

   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'10%'}}>Ashwin Lijo</h3>
       </div>
      
       <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/stock_market24" target="_blank" rel="noopener noreferrer"> 
       <div style={{transform:'translate(30%)',marginBottom:'10%'}} className="reg"> Register</div></a>      </div>} />
      <Box  text={<div className="boxx">
       <h2 className="fomt" style={{color:'white',fontSize:'90%',marginBottom:'10%',marginTop:'10%'}}>Introduction to 8051 micro controller hybrid workshop</h2>
     
       <p className="rs" style={{fontFamily:'fomt1',fontSize:'20px'}}>30 Rs Only/-</p>
       <h1  style={{color:'#00ae09',fontSize:'80%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>FEB 29 - MARCH 1</h1>

       <h2 className="fomt" style={{color:'white',fontSize:'100%',marginBottom:'10%',marginTop:'10%'}}>Speakers</h2>

       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='30%' height='30%' src={un} ></img>

   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'10%'}}>Krishnanunni</h3>
       </div>
       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

<img width='30%' height='30%' src={nav} ></img>

<h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'10%'}}>Naveen P P</h3>
 </div>
      
 <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/assemblylangprog2024" target="_blank" rel="noopener noreferrer"> 
       <div style={{transform:'translate(30%)',marginBottom:'10%'}} className="reg"> Register</div></a>      </div>} />
   
      <Box  text={<div className="boxx">
       <h2 className="fomt" style={{color:'white',fontSize:'100%',marginBottom:'10%',marginTop:'10%'}}>Arduino Offline BootcamP</h2>
     
       <p className="rs" style={{fontFamily:'fomt1',fontSize:'20px'}}>30 Rs Only/-</p>
       <h1  style={{color:'#00ae09',fontSize:'80%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>FEB 24-25</h1>

       <h2 className="fomt" style={{color:'white',fontSize:'100%',marginBottom:'10%',marginTop:'10%'}}>Speakers</h2>

       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='30%' height='30%' src={nev} ></img>

   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'10%'}}>Nevin Seby</h3>
       </div>
       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>
      <img width='30%' height='30%' src={neb} ></img>
   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'10%'}}>Nebu John</h3>
       </div>
       <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/prominence_analog_adruino" target="_blank" rel="noopener noreferrer"> 
       <div style={{transform:'translate(30%)',marginBottom:'10%'}} className="reg"> Register</div></a>      </div>} />
       <Box  text={<div className="boxx">
       <h2 className="fomt" style={{color:'white',fontSize:'100%',marginBottom:'10%',marginTop:'10%'}}>Introduction to Verilog and System Verilog</h2>
     
       <p className="rs" style={{fontFamily:'fomt1',fontSize:'20px'}}>20 Rs Only/-</p>
       <h1  style={{color:'#00ae09',fontSize:'80%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>FEB 10 Onwards</h1>

       <h2 className="fomt" style={{color:'white',fontSize:'100%',marginBottom:'10%',marginTop:'10%'}}>Speaker</h2>

       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='30%' height='30%' src={sh} ></img>

   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'10%'}}>Shiju N P</h3>
       </div>
  
       <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/Verilogprogramming24" target="_blank" rel="noopener noreferrer"> 
       <div style={{transform:'translate(30%)',marginBottom:'10%'}} className="reg"> Register</div></a>      </div>} />
       <div id="targetDiv" style={{width:'100%'}}>
       <Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'#00ae09'}}> Games</h3>
      
} />

      <Box  text={<div className="boxx4">
        <img width='100%' src={bg} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'orange',fontSize:'100%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>BATTLEGROUNDS MOBILE INDIA</h1>
      <p className="rs1" style={{fontFamily:'fomt1',fontSize:'20px'}}>80 Rs per team</p>

      <h1  style={{color:'white',fontSize:'80%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>FEB 19 Onwards</h1>
      <h1  style={{color:'orange',fontSize:'100%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>WIN FULL MANTHI</h1>
      <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/Bgmi_24" target="_blank" rel="noopener noreferrer"> 

      <div style={{transform:'translate(40%)',marginBottom:'10%'}} className="reg1"> Register</div>   </a>  
      </div>} />
      
              <Box text={<div className="boxx5">
        <img width='100%' src={ps} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'#05b63a',fontSize:'170%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt4'}}>eFootball</h1>
      <p className="rs2" style={{fontFamily:'fomt1',fontSize:'20px'}}>20 Rs</p>

      <h1  style={{color:'white',fontSize:'80%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>FEB 19 Onwards</h1>
      <h1  style={{color:'#05b63a',fontSize:'100%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>WIN HALF MANTHI</h1>
      <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/efootball_24" target="_blank" rel="noopener noreferrer"> 

      <div style={{transform:'translate(40%)',marginBottom:'10%'}} className="reg2"> Register</div>   </a>  
      </div>} />
      <Box text={<div className="boxx6">
        <img width='100%' src={mm} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'red',fontSize:'160%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt4'}}>MINI MILITIA</h1>
      <p className="rs3" style={{fontFamily:'fomt1',fontSize:'20px'}}>10 Rs per head </p>

      <h1  style={{color:'white',fontSize:'80%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>FEB 27 Onwards</h1>
      <h1  style={{color:'red',fontSize:'100%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>WIN FULL MANTHI</h1>
      <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/Mini-militia_24" target="_blank" rel="noopener noreferrer"> 

      <div style={{transform:'translate(40%)',marginBottom:'10%'}} className="reg3"> Register</div>   </a>  
      </div>} />
      <Box text={<div className="boxx7">
        <img width='100%' src={nw} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'#aba307',fontSize:'160%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>NERF WAR</h1>
      <p className="rs4" style={{fontFamily:'fomt1',fontSize:'20px'}}>50 Rs per team  (2 vs 2) </p>

      <h1  style={{color:'white',fontSize:'80%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>FEB 28 29</h1>
      <h1  style={{color:'#aba307',fontSize:'100%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>WIN FULL MANTHI</h1>
      <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/Nerf_24" target="_blank" rel="noopener noreferrer"> 

      <div style={{transform:'translate(40%)',marginBottom:'10%'}} className="reg4"> Register</div>   </a>  
      </div>} />
      </div>
     
    </div>
}
export default Event;