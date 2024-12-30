import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
          <Jump>
   
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
        
              <img
               // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
               src="https://img.freepik.com/premium-vector/professional-software-developer-coding-with-multiple-computer-languages_1323048-62836.jpg?semt=ais_hybrid" 
               alt="profile_pic"
              />
            
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
               Hi there! I'm krishan kumar patidar, an India-based full-stack web developer driven by a passion for creating captivating digital experiences. Over the past year, I've immersed myself in web development, mastering both front-end aesthetics and back-end functionalities.<br></br>

               My passion for web development led me to pursue a comprehensive full-stack web development course, where I immersed myself in the intricacies of modern web technologies under the guide of Experts Armed with this knowledge and hands-on experience.<br></br>
               I'm ready to tackle new challenges and push the boundaries of what's possible in the digital landscape.
              </p>
            </div>
          </div>
        </div>
  </Jump>
    </>
  );
};

export default About;