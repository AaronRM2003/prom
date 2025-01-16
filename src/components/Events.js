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
import d1 from './assets/download (1).jpeg'
import d2 from './assets/download (2).jpeg'
import d3 from './assets/download (3).jpeg'
import d4 from './assets/download (4).jpeg'
import d5 from './assets/download (5).jpeg'
import d6 from './assets/a.jpeg'
import d7 from './assets/b.jpeg'
import d8 from './assets/c.jpeg'
import d9 from './assets/inker-robotic-logo.png'
import d10 from './assets/ketty2-2-613x1024.png'
import d11 from './assets/sanbot.png'
import st from './assets/IMG-20240316-WA0044.jpg'
import no from './assets/IMG-20240316-WA0045.jpg'
import ab from './assets/SAVE_20240318_160718.jpg'
import grid from './assets/OIP.jpg'

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
        threshold: 0.5,  // Added threshold
      });
      useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
      }, [control, inView]);
      
      const Box = ({h='80%',w='100%', img,text }) => {
        const control = useAnimation();
        const [ref, inView] = useInView({
          threshold:0,  // Added threshold
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
            variants={boxVariant} // Start with opacity 0
            // Animate to opacity 1
          >
            <img style={{width:w,height:h,objectFit:'cover',zIndex:'-1'}} src={img}></img>
            <h1 style={{color:'white'}}> {text} </h1>
          </motion.div>
        );
      };
      const Box1 = ({img,h,w='100%'})=>{
        const control = useAnimation();
        const [ref, inView] = useInView({
          threshold: 1  // Added threshold
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

    return <div > 
          <ScrollToTop />

          <h3  style={{position:'absolute',fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'250%',marginTop:'0%',paddingTop:'20%',color:'#00ae09',marginLeft:'3%'}}> Events</h3>

 <div className="video-container">
        <video 
          className="video-player"
          src={process.env.PUBLIC_URL + '/VID-20240318-WA0005.mp4'}
          autoPlay 
          loop 
          muted
          
        />
        <div className="grid-overlay"></div>
        
      </div>
      <div className="back5 container-fluid">
      <Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'grey',marginTop:'10%'}}> expo partner</h3>
} />
      <Box text={    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}><img width='70%' src={d9} style={{opacity:'0.9',marginTop:'20%'}}></img></div>

} />
  <Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'grey',marginTop:'30%'}}> presents</h3>
} />
<Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'grey',marginTop:'30%'}}> ketty</h3>
} />
<Box text={    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}><img width='40%' src={d10} style={{opacity:'0.9',marginTop:'10%'}}></img></div>

} />
<Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'grey',marginTop:'10%'}}> sanbot</h3>
} />
<Box text={    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}><img width='60%' src={d11} style={{opacity:'0.9',marginTop:'10%'}}></img></div>

} />
<Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'white',marginTop:'10%'}}> 21 March</h3>
} />
 <Box  text={<div className="boxx14">
        <img width='100%' src={d4} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'#e63ba4',fontSize:'280%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt'}}>neon room</h1>
      <h1  style={{color:'grey',fontSize:'130%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>21 & 22 March</h1>

      
    </div>} />
   <Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'grey',marginTop:'10%'}}> Talk Session</h3>
} />
      <Box  text={<div className="boxx16">
 <h2 className="fomt" style={{color:'red',fontSize:'150%',marginBottom:'10%',marginTop:'0%'}}>Innovative Leadership</h2>

 <img width='100%' src={d2} style={{opacity:'0.9',marginTop:'3%'}}></img>

     
       <p className="rs16" style={{fontFamily:'fomt1',fontSize:'30px',marginTop:'30px'}}>FREE</p>
       <h1  style={{color:'grey',fontSize:'130%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>21 March | 11 am</h1>

       <h2 className="fomt" style={{color:'white',fontSize:'130%',marginBottom:'10%',marginTop:'10%'}}>Speaker</h2>

       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='30%' height='30%' src={st} ></img>

   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'7%'}}>Dr. Elizabeth George</h3>
       </div>
    
       <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/innovativeleadership-prominence24" target="_blank" rel="noopener noreferrer"> 
       <div style={{transform:'translate(30%)',marginBottom:'10%'}} className="reg16"> Register</div></a>
      </div>} />
  

      <Box  text={<div className="boxx17">
 <h2 className="fomt" style={{color:'lightblue',fontSize:'180%',marginBottom:'10%',marginTop:'0%'}}>Cyber Security</h2>

 <img width='100%' src={d5} style={{opacity:'0.9',marginTop:'3%'}}></img>

     
       <p className="rs17" style={{fontFamily:'fomt1',fontSize:'30px',marginTop:'30px'}}>70 Rs</p>
       <h1  style={{color:'grey',fontSize:'130%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>22 March | 10 am</h1>

       <h2 className="fomt" style={{color:'white',fontSize:'130%',marginBottom:'10%',marginTop:'10%'}}>Speaker</h2>

       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='30%' height='30%' src={ab} ></img>

   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'7%'}}>Abhijith UK</h3>
       </div>
    
       <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/cybersecurity-prominence24" target="_blank" rel="noopener noreferrer"> 
       <div style={{transform:'translate(30%)',marginBottom:'10%'}} className="reg17"> Register</div></a>
      </div>} />

  <Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'grey'}}> Workshop</h3>
} />
 <Box  text={<div className="boxx16">
 <h2 className="fomt" style={{color:'red',fontSize:'200%',marginBottom:'10%',marginTop:'0%'}}>Deep learning</h2>

 <img width='100%' src={d1} style={{opacity:'0.9',marginTop:'3%'}}></img>

     
       <p className="rs16" style={{fontFamily:'fomt1',fontSize:'30px',marginTop:'30px'}}>30 Rs</p>
       <h1  style={{color:'grey',fontSize:'130%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>21 March | 1 pm</h1>

       <h2 className="fomt" style={{color:'white',fontSize:'130%',marginBottom:'10%',marginTop:'10%'}}>Speaker</h2>

       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='30%' height='30%' src={no} ></img>

   <h3 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt1',marginTop:'7%'}}>Stefin Shiby George</h3>
       </div>
    
       <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/deeplearning-prominence24" target="_blank" rel="noopener noreferrer"> 
       <div style={{transform:'translate(30%)',marginBottom:'10%'}} className="reg16"> Register</div></a>
      </div>} />
      <Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'grey'}}> quiz</h3>
} />
      <Box  text={<div className="boxx16">
        <img width='100%' src={d8} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'white',fontSize:'200%',textDecorationThickness:'',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt'}}>Synapse</h1>
      <h2  style={{color:'grey',fontSize:'150%',textDecorationThickness:'',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt'}}>Tech quiz</h2>
      <p className="rs16" style={{fontFamily:'fomt1',fontSize:'30px',marginTop:'@0px'}}>FREE</p>
      <h1  style={{color:'grey',fontSize:'130%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>22 March | 2 pm</h1>

      <h2  style={{color:'grey',fontSize:'150%',textDecorationThickness:'',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt'}}>Price pool worth 1K</h2>

      <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/synapse-prominence24" target="_blank" rel="noopener noreferrer"> 
       <div style={{transform:'translate(30%)',marginBottom:'10%'}} className="reg16"> Register</div></a>
      
    </div>} />
  
     
    <Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'grey'}}> Games</h3>
} />
    <Box  text={<div className="boxx15">
        <img width='100%' src={d3} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'lightblue',fontSize:'230%',textDecorationThickness:'',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt'}}>gaming arena</h1>
      <h1  style={{color:'grey',fontSize:'130%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>21 & 22 March</h1>

      
    </div>} />
    <Box  text={<div className="boxx20">
        <img width='100%' src={nw} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'yellow',fontSize:'200%',textDecorationThickness:'',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt'}}>nerf war</h1>
      <h1  style={{color:'grey',fontSize:'130%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>21 & 22 March</h1>

      
    </div>} />
    <Box text={   <h3  style={{fontFamily:'fomt',backgroundColor:'black',textAlign:'center',fontSize:'150%',marginTop:'10%',color:'grey'}}> others</h3>
} />
    <Box  text={<div className="boxx18">
        <img width='100%' src={d6} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'#94a106',fontSize:'230%',textDecorationThickness:'',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt'}}>Bonfire Party</h1>
      <h1  style={{color:'grey',fontSize:'110%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>21 March | 7 pm</h1>

      
    </div>} />
    <Box  text={<div className="boxx19">
        <img width='100%' src={d7} style={{opacity:'0.9',marginTop:'3%'}}></img>

      <h1  style={{color:'lightblue',fontSize:'200%',textDecorationThickness:'',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt'}}>Cultural night</h1>
      <h1  style={{color:'grey',fontSize:'110%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>22 March | 6 pm</h1>
      <h1  style={{color:'grey',fontSize:'110%',marginBottom:'10%',marginTop:'10%',fontFamily:'fomt3'}}>College Auditorium</h1>

      
    </div>} />
           
      </div>
     
    </div>
}
export default Event;