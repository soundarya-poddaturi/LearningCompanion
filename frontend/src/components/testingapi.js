import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import "./style.css"
import Course from './testingCourses';
import Build1 from './buildlesson';
const ChatBox = () => {
    const[stack,setStack]= useState(["Hello ! Ask me a question?"])
    const[usermessage,setUser]=useState("")
    const response=()=>{
        setStack([...stack,usermessage])
        axios.post("/chatresponse",{
            ques:usermessage
        })
        .then((response)=>{
            console.log(response.data.anaylsis)
            setStack([...stack,response.data.anaylsis])
        })
       
    }
    const sendmessage=()=>{
        setStack([...stack,usermessage])
    }
    const updatedata=(event)=>{
        setUser(event.target.value)
    }

 return(
    <div>
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>home</title>
  {/* font awesome cdn link  */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
  />
  {/* custom css file link  */}
  <link rel="stylesheet" href="css/style.css" />
 
  
  <section className="home-grid">

    


    <Build1/>
    
  </section>
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
          <img src={require("./images/thumb-6.png")} alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete SASS tutorial</h3>
        <a href="/course/playlist" className="inline-btn">
          view playlist
        </a>
      </div>
    </div>
    <div className="more-btn">
      <a href="/course" className="inline-option-btn">
        view all courses
      </a>
    </div>
  </section>
  <section className="home-grid">

    


    
    <h1 className="heading">quick options</h1>
    <div className="box-container">
      <div className="box">
        <h3 className="title">likes and comments</h3>
        <p className="likes">
          total likes : <span>25</span>
        </p>
        <a  className="inline-btn">
          view likes
        </a>
        <p className="likes">
          total comments : <span>12</span>
        </p>
        <a  className="inline-btn">
          view comments
        </a>
        <p className="likes">
          saved playlists : <span>4</span>
        </p>
        <a  className="inline-btn">
          view playlists
        </a>
      </div>
      <div className="box">
        <h3 className="title">top categories</h3>
        <div className="flex">
          <a >
            <i className="fas fa-code" />
            <span>development</span>
          </a>
          <a >
            <i className="fas fa-chart-simple" />
            <span>business</span>
          </a>
          <a >
            <i className="fas fa-pen" />
            <span>design</span>
          </a>
          <a >
            <i className="fas fa-chart-line" />
            <span>marketing</span>
          </a>
          <a >
            <i className="fas fa-music" />
            <span>music</span>
          </a>
          <a >
            <i className="fas fa-camera" />
            <span>photography</span>
          </a>
          <a >
            <i className="fas fa-cog" />
            <span>software</span>
          </a>
          <a >
            <i className="fas fa-vial" />
            <span>science</span>
          </a>
        </div>
      </div>
      <div className="box">
        <h3 className="title">popular topics</h3>
        <div className="flex">
          <a href="#">
            <i className="fab fa-html5" />
            <span>HTML</span>
          </a>
          <a href="#">
            <i className="fab fa-css3" />
            <span>CSS</span>
          </a>
          <a href="#">
            <i className="fab fa-js" />
            <span>javascript</span>
          </a>
          <a href="#">
            <i className="fab fa-react" />
            <span>react</span>
          </a>
          <a href="#">
            <i className="fab fa-php" />
            <span>PHP</span>
          </a>
          <a href="#">
            <i className="fab fa-bootstrap" />
            <span>bootstrap</span>
          </a>
        </div>
      </div>
      <div className="box">
        <h3 className="title">Customized learning session </h3>
        <p className="tutor">
          build your own custom roadmap
        </p>
        <a href="/build" className="inline-btn">
          get started
        </a>
      </div>
    </div>
  </section>
  <footer className="footer">
    PS G88-AI Based IT Traning System
  </footer>
  {/* custom js file link  */}
</>

            
     </div>
    
 )
};




export default ChatBox;
