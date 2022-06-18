import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Hung Truong. I am a Software Developer and I graduated from the Tampere University of Applied Sciences (TAMK) in June 2022. 
            <br />
             Technologies I use are Django, Flask, MERN(MongoDB, Express, ReactJS, and NodeJS), Java, and Kotlin. I also work as a data engineer and scientist with SQL and Python packages (Panda, NumPy, Matplotlib).
            <br />

            I create responsive websites that are displayed on all devices, such as desktops and smartphones.

            <br />
	          I have enough enthusiasm and abilities to work as a Software Developer because I am hardworking, active, patient, and honest. I am always ready to learn something new.

            <br />
            Of course, before I begin developing any web app, Landing Page, Business Website, or E-commerce, I need to have a ready-made project layout (sketch).

            

           

            

          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
