import {React,useEffect} from "react"
import {motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer"
import p from './assets/mainblock.jpg'
import { useLocation } from 'react-router-dom';


function About() {
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

    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Box text={<h1 className="fomt" style={{marginTop:'100px',alignItems:'center' ,color:'red',marginBottom:'100px', textAlign:'center',     textShadow:' 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)',fontSize:'200%',marginTop:'5%',
}}>about rit</h1>} />
      <Box img={p} h='200px' />
      <Box text={<div>
        <p className="boxx1" style={{marginLeft:'20px',fontFamily: 'fomt1',fontSize:'25px'}}> Rajiv Gandhi Institute of Technology is one of the most prestigious technical institutes in Kerala. The college offers undergraduate, postgraduate and research studies in Engineering to around 2000 students. It is one of the nine Government of Kerala. The college has a highly qualified and dedicated faculty of around 200 members and boasts of state-of-the-art infrastructure. It is accredited by the National Board of Accreditation and is funded under the Technical Education Quality Improvement Programme.</p>
      </div>} />
      </div>
    </div>
}
export default About;