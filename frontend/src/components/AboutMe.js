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
              
              <br/>
              <br/>
               I received my Bachelor's degree in Software Engineering from Tampere University of Applied Sciences (TAMK) - Finland in June 2022. 
              <br/>
              <br/>
              I have five years of working in software development specializing in Django, Flask, MERN(MongoDB, Express, ReactJS, and NodeJS), Java, Kotlin, SQL, and Machine learning that perfectly fit the advertised job requirements. Besides, as a web developer at 72DPI-  New Zealand, I was responsible for creating the full-stack web application, both the front-end and back-end. I also created the NLP machine learning model for my company's application. Recently, I began developing web personal project applications such as Landing Page, Business websites, and E-commerce.
              <br/>
              <br/>
              Regarding personality, I have enough enthusiasm and abilities to work as a Software Developer because I am hardworking, active, patient, and honest. Furthermore, I am always willing to up-to-date new technologies.
              <br/>
              <br/>
              Please find my resume attached. Feel free to contact me if you have any further questions you would like to discuss.
              <br/>
              <br/>
              Thank you for taking the time to consider my application. I look forward to hearing from you soon.
              <br/>
              <br/>
              Sincerely,
              <br/>
              Hung Truong

            

          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
