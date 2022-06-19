import React from "react";
import netflix from "../images/ecommerce.png";
import cityGuide from "../images/DogCat.png";
import portfolio from "../images/math.png";
import taskManager from "../images/mathcongra.png";
import mathcalc from "../images/mathcalc.png";
import mathkid from "../images/mathkid.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={netflix} alt="ProShop Ecommerce Website Project..." />
        <h3>ProShop Ecommerce Website.</h3>
        <p>My project was named ProShop which was a full-stack online E-commerce shop.</p>
        <b>Link:</b> <a className="hyper-link" onClick={() => window.open("https://proshop3689.herokuapp.com/", "_blank") } href="">https://proshop3689.herokuapp.com/</a>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/HungTruong4689/Pro-Ecommerce-Shop", "_blank")}>https://github.com/HungTruong4689/Pro-Ecommerce-Shop</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "ProShop Ecommerce Website."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide App Project..." />
        <h3>Dog-Cat Recognition Web Application.</h3>
        <p>This application was created for the purpose to detect the user's image. The goal of the detection is to detect whether cat or dog..</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://sheltered-fortress-19231.herokuapp.com/", "_blank")}>https://sheltered-fortress-19231.herokuapp.com/</a>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/HungTruong4689/DogCat-Recognition", "_blank")}>https://github.com/HungTruong4689/DogCat-Recognition</a>
        {/* <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a> */}
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "Dog-Cat Recognition Web Application."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={mathkid} alt="Math Calculator..."  style={ {"height": "300px", "width":"200px"}}/>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Math Calculator..."  style={ {"height": "300px", "width":"200px"}}/>
        <img className="portfolio-image-popupbox" src={mathcalc} alt="Math Calculator..."  style={ {"height": "300px", "width":"200px"}}/>
        <img className="portfolio-image-popupbox" src={taskManager} alt="Math Calculator Project..." style={ {"height": "300px", "width":"200px"}} />
        <h3>Math Calculator Mobile Application.</h3>
        <p>Our math games app will help kids(9+) to learn addition, substruction, and multiplication. It is designed to let them think faster with countdown timer.</p>
        {/* <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a>
        <br /> */}
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/HungTruong4689/Math-Calculator--Mobile-APP", "_blank")}>https://github.com/HungTruong4689/Math-Calculator--Mobile-APP</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Math Calculator Mobile Application."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  // const openPopupboxTaskManager = () => {
  //   const content = (
  //     <>
  //       <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
  //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
  //       <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
  //       <br />
  //       <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a>
  //     </>
  //   )
  //   PopupboxManager.open({ content })
  // }

  // const popupboxConfigTaskManager = {
  //   titleBar: {
  //     enable: true,
  //     text: "Task Manager React and Redux project."
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500
  // }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Personal Project</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={mathkid} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          {/* <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      {/* <PopupboxContainer {...popupboxConfigTaskManager} /> */}
    </div>
  )
}

export default Pofrfolio;
