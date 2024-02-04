import {React,useEffect} from "react"
import './design.css'
import bgline from './assets/bgline.svg'
import p from './assets/pp.png'
import line from './assets/line.svg'
import anim from './assets/an.gif'
import dem from './assets/download.gif'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer"
import sp from './assets/speaker.svg'

function Home() {
  
  const isDesktop = !/Mobi|Android/i.test(navigator.userAgent);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2.5 } },
    hidden: { opacity: 0, scale: 1 ,transition:{duration: 2.5}}
  };
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,  // Added threshold
  });
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  
  const Box = ({h='80%',w='100%', img,text }) => {
    const control = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.6,  // Added threshold
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
        <img style={{width:w,height:h,objectFit:'cover'}} src={img}></img>
        <h1 style={{color:'white'}}> {text} </h1>
      </motion.div>
    );
  };
  return (
    isDesktop?<>
 <div className="back1" > 
 <div > 
 <img style={{width: '30vw', height: '30vh', objectFit: 'contain',transform:'translate(40%, 80%)'}} src={p}></img>
 <img className="move1" style={{width: '10vw', height: '10vh', objectFit: 'contain',transform:'translate(-300%, -100%)'}} src={line}></img>
 <img className="move2" style={{width: '10vw', height: '10vh', objectFit: 'contain',transform:'translate(0%, 50%)'}} src={line}></img>
 <img className="move3" style={{width: '10vw', height: '10vh', objectFit: 'contain',transform:'translate(350%, -50%)'}} src={line}></img>

 <h1 className="fomt" style={{color:'#00ae09',transform:'translate(20%,570%)',}}>prominence </h1>
 <h1 className="fomt" style={{color:'#00ae09',transform:'translate(20%,570%)',}}>2024 </h1>

 <div className="rect1">
  <h1 style={{marginLeft:'10px',marginTop:'30px'}}  >march </h1>
  <div style={{transform:'translate(-120px,50px)'}}>
  <img className="move1" style={{width: '10vw', height: '12vh', objectFit: 'contain'}} src={line}></img>
 <img className="move2" style={{width: '10vw', height: '12vh', objectFit: 'contain',transform:'translate(0%, 50%)'}} src={line}></img>
 <img className="move3" style={{width: '10vw', height: '12vh', objectFit: 'contain',transform:'translate(350%, -50%)'}} src={line}></img>
 <img style={{width: '60vw', height: '62vh', objectFit:'contain',transform:'translate(10%, -150%)'}}  src={anim}></img>

 </div>
  </div>
   </div>
   <div className="page1">

   
   <Box  text={<div className="fomt">
        <h1 style={{color:'orange',marginLeft:'30px'}}>ece & rai</h1>
      </div>} />
      <Box img={dem} />
      <Box text={<div className="fomt">
        <h1>we present you</h1>
      
      </div>}/>
      <Box  text={<div className="fomt">
        <h2 style={{color:'lightgreen'}}>prominence 2024</h2>
      </div>} />
      <Box  text={<div className="boxx">
       <h2 className="fomt" style={{color:'violet'}}>our legacy</h2>
       <p style={{fontSize:'20px'}}>Prominence is an annual techno-cultural fest organised by the Department of Electronics and Communication Engineering. Since its inception in 20xx,the fest has aimed to showcase the latest trends and developments in Electronics, Communication, Robotics and Artificial Intelligence while promoting innovation and collaboration among students, faculty and industry partners</p>
      </div>} />
      <div >
      
       <Box text = {<div className="boxx">
        <h2 style={{color:"yellow"}} className="fomt">why sponsor us?</h2>
        <p  color="white" style={{fontSize:'20px'}}>Sponsoring Prominence 2024 offers an excellent opportunity for your organization to gain brand visibility. Your brand will be promoted on our offline and online media,reaching a large audience of around 2000+ students, faculty and industry professionals. Additionally, as a sponsor, you will have access to a pool of talented and skilled students who are passionate about Electronics, Communication, Roboticsand Artificial Intelligence. You will also receive valuable feedback from the participants.</p>

       </div>}/>
      
      </div>

   
     
    
 </div>
 </div>
 </>:<>
 <div className="back" > 
 <div > 
  <div>
 <img style={{width: '30vw', height: '30vh', objectFit: 'contain',transform:'translate(40%, 80%)'}} src={p}></img>
 <img className="move1" style={{width: '10vw', height: '10vh', objectFit: 'contain',transform:'translate(-300%, -100%)'}} src={line}></img>
 <img className="move2" style={{width: '10vw', height: '10vh', objectFit: 'contain',transform:'translate(0%, 50%)'}} src={line}></img>
 <img className="move3" style={{width: '10vw', height: '10vh', objectFit: 'contain',transform:'translate(350%, -50%)'}} src={line}></img>

 <h2 className="fomt" style={{marginLeft:'20px',color:'#00ae09',transform:'translate(0%,500%)',}}>prominence </h2>
 <h2 className="fomt" style={{marginLeft:'20px',color:'#00ae09',transform:'translate(0%,450%)',}}>2024 </h2>
 </div>
 <div className="rect">
  <h1 style={{marginLeft:'3%',marginTop:'30px'}}  >march </h1>
  <div style={{transform:'translate(-100px,300px)'}}>
  <img className="move1" style={{width: '10vw', height: '12vh', objectFit: 'contain'}} src={line}></img>
 <img className="move2" style={{width: '10vw', height: '12vh', objectFit: 'contain',transform:'translate(0%, 50%)'}} src={line}></img>
 <img className="move3" style={{width: '10vw', height: '12vh', objectFit: 'contain',transform:'translate(3000%, -50%)'}} src={line}></img>
 <img style={{width: '50vw', height: '52vh', objectFit:'cover',transform:'translate(-18%, -85%)'}}  src={anim}></img>

 </div>
  </div>
   </div>
   <div className="page">

   
   <Box  text={<div className="fomt">
        <h1 style={{justifyContent:'center',color:'orange',marginLeft:'0%'}}>ece & rai</h1>
      </div>} />
     <Box img={dem} />
      <Box text={<div className="fomt">
        <h1>we present you</h1>
      
      </div>}/>
      <Box  text={<div className="fomt">
        <h2 style={{color:'lightgreen'}}>prominence 2024</h2>
      </div>} />
      <Box  text={<div className="boxx">
       <h2 className="fomt" style={{color:'violet'}}>our legacy</h2>
       <p style={{fontFamily:'fomt1',fontSize:'20px'}}>Prominence is an annual techno-cultural fest organised by the Department of Electronics and Communication Engineering. Since its inception in 20xx,the fest has aimed to showcase the latest trends and developments in Electronics, Communication, Robotics and Artificial Intelligence while promoting innovation and collaboration among students, faculty and industry partners</p>
      </div>} />
      <div >
      <Box text = {<div className="boxx">
        <h2 style={{color:"lightblue"}} className="fomt"> ECE & RAI</h2>
        <p  color="white" style={{fontFamily:'fomt1',fontSize:'20px'}}>Established in 1991, the Department of Electronics and Communication Engineering has evolved to inculcate excellent technical knowledge to foster proficient engineers. It fascilitates a student community diligent to contribute to society and has thrived to magnificence through its 30+ dedicated staff members and 300+ zealous students. The Department also boasts the newly established undergraduate course in Robotics and Artificial Intelligence with around 100 students. The numerous accolades of the faculty and students, including funded projects and excellent placement statistics, manifest the platform it furnishes in the growth of the community.  </p>

       </div>}/>
       <Box text = {<div className="boxx">
        <h2 style={{color:"yellow"}} className="fomt">why sponsor us?</h2>
        <p  color="white" style={{fontFamily:'fomt1',fontSize:'20px'}}>Sponsoring Prominence 2024 offers an excellent opportunity for your organization to gain brand visibility. Your brand will be promoted on our offline and online media,reaching a large audience of around 2000+ students, faculty and industry professionals. Additionally, as a sponsor, you will have access to a pool of talented and skilled students who are passionate about Electronics, Communication, Roboticsand Artificial Intelligence. You will also receive valuable feedback from the participants.</p>

       </div>}/>
      
      </div>

   
     
    
 </div>
 </div>
 </>
  );

}
export default Home;