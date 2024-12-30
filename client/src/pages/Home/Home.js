import React from 'react'
import './Home.css'
import Resume from "../../assests/docs/KrishanKumarPatidarResume (3).pdf"; 
import Typewriter from 'typewriter-effect';
import { useTheme } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
const Home = () => {
    const [theme, setTheme] = useTheme();
    const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container id= home ">
         <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
               <Fade right>
          <h2>Hi😊 i am  a</h2>
          <h1>
            <Typewriter
  options={{
    strings: ['FullStack Web Developer! ', 'MERN Stack Developer !'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
             </Fade>
              <Fade bottom>
          <div className="home-buttons">
           <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=8964967444"
                rel="noreferrer"
                target="_blank"
              >
              
              Hire me</a>
            <a className="btn btn-cv" href={Resume} download="your_name.pdf">
                My Resume
              </a>
          </div>
       </Fade>
        </div>
      </div>
    </>
  )
}

export default Home