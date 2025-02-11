import React, {useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import "./style.css"
function Build1(){

  const[aaaa,setLink]=useState(false)

  function DisplayLink(){
    return (
      <h1>weevve</h1>
    )
  }
    return (
            
             
     
        <section className="courses">
        <h1 className="heading">   Build Custom lesson</h1>
        <div className="box-container">
          <div className="box">
           
            <div className="thumb">
              <img src={require("./images/Screenshot 2024-01-25 214225.png")}alt="" />
              
            </div>
            <h3 className="title">Upload Pdf</h3>
            <a href="/extract-text" className="inline-btn">
              Build Lesson 
            </a>
          </div>
         
          
          <div className="box">
            
            <div className="thumb">
              <img src={require("./images/youtubelogo.png" )}alt="" />
             
            </div>
            <h3 className="title">Paste Youtube Link</h3>
            <a href="/transcribe" className="inline-btn">
            Build Lesson 
            </a>
          </div>
          <div className="box">
           
            
            <div className="thumb">
              <img src={require("./images/customlogo.png")} alt="" />
              
            </div>
            <h3 className="title">Create by topic </h3>
            <a href="/build" className="inline-btn">
              Build Lesson 
            </a>
          </div>
          <div >
      
    </div>   
   
        
        </div>
      </section>
    )
}
export default Build1;