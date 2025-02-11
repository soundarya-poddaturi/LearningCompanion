import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import "./style.css"
const Course = () => {
    
 return(
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>courses</title>
    {/* font awesome cdn link  */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
    />
    {/* custom css file link  */}
    <link rel="stylesheet" href="css/style.css" />
    
    
    <section className="courses">
    <h1 className="heading">our courses</h1>
    <div className="box-container">
      <div className="box">
        <div className="tutor">
          <img src={require("./images/pic-2.jpg")}alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={require("./images/pythonimage1.png")}alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete Python tutorial</h3>
        <a href="/course/playlist" className="inline-btn">
          view playlist
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={require("./images/pic-3.jpg")} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={require("./images/thumb-2.png" )}alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete CSS tutorial</h3>
        <a href="/course/playlist" className="inline-btn">
          view playlist
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={require("./images/pic-4.jpg")} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={require("./images/thumb-3.png" )}alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete JS tutorial</h3>
        <a href="/course/playlist" className="inline-btn">
          view playlist
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={require("./images/pic-5.jpg")} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={require("./images/thumb-4.png" )}alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete Boostrap tutorial</h3>
        <a href="/course/playlist" className="inline-btn">
          view playlist
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={require("./images/pic-6.jpg")} alt="" />
          
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={require("./images/thumb-5.png")} alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete JQuery tutorial</h3>
        <a href="/course/playlist" className="inline-btn">
          view playlist
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={require("./images/pic-7.jpg")} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={require("./images/thumb-6.png" )}alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete SASS tutorial</h3>
        <a href="/course/playlist" className="inline-btn">
          view playlist
        </a>
      </div>
    </div>
    <div className="more-btn">
      <a href="./course" className="inline-option-btn">
        view all courses
      </a>
    </div>
  </section>
    <footer className="footer">
      {/* <span>PS G88</span> */}
    </footer>
    {/* custom js file link  */}
  </>
  
    
 )
};




export default Course;