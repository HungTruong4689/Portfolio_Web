import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Sep 2012- Sep 2017</h3>
            <h4>Bachelor of Science of Bioinformatics</h4>
            <h4>University of Medicine and Pharmacy HCM City - Vietnam</h4>
            <p>My main major was Bioinformatics which was an interdisciplinary field that develops methods and software tools for understanding biological data. As an interdisciplinary field of science, bioinformatics combined with computer science, statics, mathematics and engineering to analyze and interpret biological data.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jun 2017 - May 2019</h3>
            <h4>Data Analyst</h4>
            <h4>VNPT General Hospital - Vietnam</h4>
            <p>Working with  clinical of patients and analyze the data, write the clinical data report.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jun 2019 - Aug 2020</h3>
            <h4>Data Analyst</h4>
            <h4>Dai Tin Pharma - Vietnam</h4>
            <p>My project was to research the product in EU market  then register new ID product in Vietnam, and collect and analyze the sale data.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Aug 2020- Jun2022</h3>
            <h4>Bachelor of Software Engineering</h4>
            <h4>Tampere University of Applied Science (TAMK) - Tampere, Finland</h4>
            <p>The program provided me knowledge and skills in IT project management, strategic planning as well as other advanced technologies like mobile application, cloud computing, enterprise resource planning and enterprise content management.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jan 2022 - June 2022</h3>
            <h4>Web developer- NLP model - Remote Intern</h4>
            <h4>72DPI - Auckland, New Zealand (Remote)</h4>
            <p>The Faculty of Pharmacy staff has to deal with a large volume of graduate thesis and online study reports after they take the online educational approach due to the pandemic. This poses a big problem as their staff was overloaded with checking each submitted document for plagiarism. This project is going to propose a solution to that problem by implementing an online plagiarism checker for English and Vietnamese languages.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Experience;
