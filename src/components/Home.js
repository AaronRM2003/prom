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
import  {  useState, useRef, useContext, createContext } from 'react';
import { Link } from "react-router-dom"

import p1 from './assets/ss.png'
import p2 from './assets/ss1.png'
import p3 from './assets/ss5.png'
import p4 from './assets/ss2.png'
import p5 from './assets/ss3.png'
import p6 from './assets/ss4.png'

import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const SlideshowContext = createContext();

export function Slideshow({ children, className, style }) {
    const [context, setContext] = useState({
        items: [],
        edge: false
    });
    const timer = useRef(null);

    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            // Move deactivated slide out when edge is false
            // Move activated slide in when edge is true
            if (context.items.length > 1 && context.edge) {
                const head = context.items.shift();
                context.items.push(head);
            }
            context.edge = !context.edge;
            setContext({ ...context });
        }, 2500);
        return () => clearTimeout(timer.current);
    });

    console.log(context.items);

    return (
        <SlideshowContext.Provider value={[context, setContext]}>
            <div
                style={{
                    
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                    
                }}
            >
                {children}
            </div>
        </SlideshowContext.Provider>
    );
}
export function SlideshowItem({ children }) {
    const name = useRef(`${performance.now()}_${Math.random()}`); // Generate a name for this slide.
    const [context] = useContext(SlideshowContext);
    const [stage, setStage] = useState("ready");

    useEffect(() => {
        // register self with the name.
        context.items.push(name.current);
        return () => {
            // Remove the name when slide is removed.
            const index = context.items.indexOf(name.current);
            context.items.splice(index, 1);
        };
    }, []);

    useEffect(() => {
        const activeName = context.items[0];
        if (activeName === name.current) {
            setStage("on");
        }
        if (activeName !== name.current && stage === "on") {
            setStage("off");
        }
        if (activeName !== name.current && stage === "off") {
            setStage("ready");
        }
    }, [context]);

    let left = 0;
    let zIndex = 0;
    let opacity = 1;
    switch (stage) {
        case "ready":
            left = "100%";
            opacity=0;

            break;
        case "on":
            left = "0";
            zIndex = 1;
            opacity=0.6;

            break;
        case "off":
            opacity=0;
            zIndex = 0;
            break;
        default:
    }

    return (
        <div
            style={{
                transition: "1s",
                position: "absolute",
                top: 0,
                opacity: opacity,
                left: left,
                zIndex: zIndex
            }}
        >
            {children}
        </div>

    );
}


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
      threshold:0.6,  // Added threshold
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
      <Box  text={<div className="boxx1">
       <h2 className="fomt" style={{color:'violet'}}>our legacy</h2>
       <p style={{fontSize:'20px'}}>Prominence is an annual techno-cultural fest organised by the Department of Electronics and Communication Engineering. Since its inception in 20xx,the fest has aimed to showcase the latest trends and developments in Electronics, Communication, Robotics and Artificial Intelligence while promoting innovation and collaboration among students, faculty and industry partners</p>
      </div>} />
      <div >
      
       <Box text = {<div className="boxx1">
        <h2 style={{color:"yellow"}} className="fomt">why sponsor us?</h2>
        <p  color="white" style={{fontSize:'20px'}}>Sponsoring Prominence 2024 offers an excellent opportunity for your organization to gain brand visibility. Your brand will be promoted on our offline and online media,reaching a large audience of around 2000+ students, faculty and industry professionals. Additionally, as a sponsor, you will have access to a pool of talented and skilled students who are passionate about Electronics, Communication, Roboticsand Artificial Intelligence. You will also receive valuable feedback from the participants.</p>

       </div>}/>
      
      </div>

   
     
    
 </div>
 </div>
 </>:<>
 <div className="back2 container-fluid" > 
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
  <h1 style={{marginLeft:'3%',marginTop:'20px'}}  >march 
  <div class="container">
  <p class="typed" style={{transform:'translate(0px,0px)',fontFamily:'fomt'}}>21 22</p>
</div>
</h1>
  <div style={{transform:'translate(-60px,300px)'}}>
  <img className="move1" style={{width: '10vw', height: '12vh', objectFit: 'contain'}} src={line}></img>
 <img className="move3" style={{width: '10vw', height: '12vh', objectFit: 'contain',transform:'translate(300%, -50%)'}} src={line}></img>
 <img style={{width: '50vw', height: '52vh', objectFit:"cover",transform:'translate(-15%, -85%)'}}  src={anim}></img>

 </div>
  </div>
   </div>
   <div className="page" style={{zIndex:'3px'}}>
    <div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
    <Link to="/Events"  style={{ WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none',marginTop:'10%',display:'flex',flexDirection:'column',alignItems:'center'}}>

   <button style={{fontFamily:'fomt',width:'200%',height:'120%'}} class="button-77" role="button">events</button></Link>
   </div>
   <div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
    <Link to="/PreEvents"  style={{ WebkitTapHighlightColor:'transparent',color:'white', textDecoration:'none',marginTop:'10%',display:'flex',flexDirection:'column',alignItems:'center'}}>

   <button style={{fontFamily:'fomt',width:'120%',height:'120%'}} class="button-771" role="button">Pre-Events</button></Link>
   </div>
   <Box  text={<div className="fomt">
        <h2 style={{justifyContent:'center',color:'orange',marginTop:'30%',marginRight:'5%',textAlign:'center',position:'relative',fontSize:'200%'}}>ece & rai</h2>
      </div>} />
      <div style={{zIndex:'-1',transform:'translateY(-10px)'}}>
     <Box img={dem} />
     </div>
      <Box text={<div style={{transform:'translateY(-60px)'}} className="fomt">
        <h1 style={{fontSize:'200%'}} >we present you</h1>
      
      </div>}/>
      <Box  text={<div className="fomt">
        <h2 style={{color:'lightgreen',fontSize:'180%',marginTop:'10%'}}>prominence 2024</h2>
      </div>} />
      <Box  text={<div className="boxx1">
       <h2 className="fomt" style={{color:'rgb(188, 1, 180)',fontSize:'180%',marginBottom:'10%'}}>our legacy</h2>
       <p style={{fontFamily:'fomt1',fontSize:'20px'}}>Prominence is an annual techno-cultural fest organised by the Department of Electronics and Communication Engineering. Since its inception in 2019,the fest has aimed to showcase the latest trends and developments in Electronics, Communication, Robotics and Artificial Intelligence while promoting innovation and collaboration among students, faculty and industry partners</p>
      </div>} />
      <div >
      <Box text = {<div className="boxx1">
        <h2 style={{color:"lightblue",fontSize:'180%',marginBottom:'10%'}} className="fomt"> ECE & RAI</h2>
        <p  color="white" style={{fontFamily:'fomt1',fontSize:'20px'}}>Established in 1991, the Department of Electronics and Communication Engineering has evolved to inculcate excellent technical knowledge to foster proficient engineers. It fascilitates a student community diligent to contribute to society and has thrived to magnificence through its 30+ dedicated staff members and 300+ zealous students. The Department also boasts the newly established undergraduate course in Robotics and Artificial Intelligence with around 100 students. The numerous accolades of the faculty and students, including funded projects and excellent placement statistics, manifest the platform it furnishes in the growth of the community.  </p>

       </div>}/>
       <Box text = {<div className="boxx1">
        <h2 style={{color:"yellow",fontSize:'180%',marginBottom:'10%'}} className="fomt">why sponsor us?</h2>
        <p  color="white" style={{fontFamily:'fomt1',fontSize:'20px'}}>Sponsoring Prominence 2024 offers an excellent opportunity for your organization to gain brand visibility. Your brand will be promoted on our offline and online media,reaching a large audience of around 2000+ students, faculty and industry professionals. Additionally, as a sponsor, you will have access to a pool of talented and skilled students who are passionate about Electronics, Communication, Roboticsand Artificial Intelligence. You will also receive valuable feedback from the participants.</p>

       </div>}/>
       <Box  text={<div className="fomt">
        <h2 style={{color:'green',fontSize:'180%',marginBottom:'10%'}}>gallery</h2>
      </div>} />
       <Box text={
       <div className="slide">

        <Slideshow >
                <SlideshowItem className="slideshow">
                    <img style={{height:'380px'}} src={p2} alt="Random Image" />
            </SlideshowItem>
            <SlideshowItem>
                <img  style={{height:'380px'}} src={p1} alt="Random Grayscale Image" />
            </SlideshowItem>
            <SlideshowItem>
                <img  style={{height:'380px'}} src={p3} alt="Random Grayscale Image" />
            </SlideshowItem>
             <SlideshowItem>
                <img  style={{height:'380px'}} src={p4} alt="Random Grayscale Image" />
            </SlideshowItem>
            <SlideshowItem>
                <img  style={{height:'380px'}} src={p5} alt="Random Grayscale Image" />
            </SlideshowItem>
            <SlideshowItem>
                <img  style={{height:'380px'}} src={p6} alt="Random Grayscale Image" />
            </SlideshowItem>
        </Slideshow>
        </div>
       } />
      </div>

   
     <Box  text={<div className="gray"><div style={{display:'flex',flexDirection:'row',textAlign:'left'}}> 
      <img  style={{height:'120px'}} src={sp} alt="Random Grayscale Image" />
      <h4 style={{color:"lightblue",fontSize:'100%',marginTop:'5%'}} className="fomt">call for ambassadors</h4>

    </div>
    <p style={{fontSize:'20px',marginLeft:'20px'}}>Become the face of PROMINENCE, , bring your peers together, network and get the chance to reap amazing rewards. If you have great interpersonal and communication skills, apply now!</p> 
    <a  style={{color:'black',textDecoration:'none'}} href="http://bit.ly/Prominence_CA" target="_blank" rel="noopener noreferrer"> 
    <h2 style={{  backgroundImage: 'linear-gradient(315deg, #000000d7 ,#6a0101a2 , #6a0101a2 ,#000000d7 , #000000d7 )',fontFamily:'fomt1',backgroundColor:'black',color:'red',display:'flex',flexDirection:'column',paddingTop:'10px',paddingBottom:'10px',alignItems:'center',marginLeft:'10%',marginRight:'10%',border:'1px solid black',borderRadius:'10px'}}>Be an Ambassador
  </h2>  </a>

    </div>} />
 </div>
    <Box text={<div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
       <div style={{marginRight:'20px'}}> <a href="https://www.instagram.com/p/C22M3CRP5yt/?igsh=MXEydG!hNTA2NHkyOA==" target="_blank" rel="noopener noreferrer">
      <FaInstagram/></a></div>
      <div > <a style={{color:'red'}} href="mailto:prominencerit2024@gmail.com" target="_blank" rel="noopener noreferrer"> <BiLogoGmail/></a></div>
      </div>} />
</div>
 </>
  );

}
export default Home;