import {React,useEffect} from "react"
import {motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer"
import p from './assets/mainblock.jpg'
import { useLocation } from 'react-router-dom';
import as from './assets/IMG-20240209-WA0004.jpg'
import pr from './assets/IMG-20240216-WA0047.jpg'
import { FaPhoneAlt } from "react-icons/fa";


function Contacts() {
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

    return <div className="back5"> 
          <ScrollToTop />
          <Box text={<h1 className="fomt" style={{marginTop:'100px',alignItems:'center' ,color:'#0040ffa2', textAlign:'center',     textShadow:' 0 0 30px rgba(255, 255, 255, 0.35), 0 0 60px rgba(255, 255, 255, 0.25)',fontSize:'200%',marginTop:'5%',
}}>contacts</h1>} />
  <Box  text={<div className="boxxf">
       <h2 className="fomt" style={{color:'white',fontSize:'130%',marginBottom:'10%',marginTop:'10%'}}>Event Head</h2>
     

       <div  className="imgboxf" style={{ display:'flex',flexDirection:'row'}}>
<h1 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt',marginTop:'10%'}}>M P PRAVARA</h1>
    </div>
       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='50%' height='50%' style={{}} src={pr} ></img>
      <a style={{color:'black',textDecoration:'none',marginLeft:'5%',marginTop:'20%',fontFamily:'fomt3',fontSize:'100%'}} href={`tel:+918281046370`}>
      <div style={{color:'blue'}}>
    <FaPhoneAlt />  Phone  
        </div>
        </a> 
      </div>
     
      
           </div>} />
           <Box  text={<div className="boxxf">
       <h2 className="fomt" style={{color:'white',fontSize:'130%',marginBottom:'10%',marginTop:'10%'}}>Marketing lead</h2>
     

       <div  className="imgboxf" style={{ display:'flex',flexDirection:'row'}}>
<h1 style={{textAlign:'center',marginLeft:'5%',fontFamily:'fomt',marginTop:'10%'}}>Ashwin Lijo</h1>
    </div>
       <div  className="imgbox" style={{ display:'flex',flexDirection:'row'}}>

      <img width='50%' height='50%' style={{}} src={as} ></img>
      <a style={{color:'black',textDecoration:'none',marginLeft:'5%',marginTop:'20%',fontFamily:'fomt3',fontSize:'100%'}} href={`tel:+918075367857`}>
      <div style={{color:'blue'}}>
    <FaPhoneAlt />  Phone  
        </div>
        </a> 
      </div>
     
      
           </div>} />
    </div>
}
export default Contacts;