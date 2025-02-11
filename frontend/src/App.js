
import React from "react"
import {useState} from "react";
import {Link} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home"
import Tweet from "./components/tweet"
import Compiler from "./components/Compiler";
import Pdfreader from "./components/Pdfreader";
import Ytlink from "./components/Yttranscribe";
import Chatbox from "./components/Chatbox"
import YourComponent from "./components/testingapi"
import Course from "./components/testingCourses";
import GenVid from "./components/Videogen";
import Build1 from "./components/buildlesson"
import Playlist from "./components/playlists";
import Preinfo from "./components/selfinfo";
import Quiz from "./components/questions"
import DsaCompiler from "./components/dsa";
import Build from "./components/buildon";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import PathPlanner from "./components/PathPlanner";

function App(){
  
  return (
    <Router>
      <div>
        <header>
        <Nav/>
        <Routes>
           <Route index element={<YourComponent/>}/>
          <Route path="/" element={<YourComponent/>}/>
          <Route path="/build" element={<Build/>}/>
          <Route path="/tweets" element={<Tweet/>}/>
          <Route path ="/compiler" element={<Compiler/>}/>
          <Route path ="/extract-text" element={<Pdfreader/>}/>
          <Route path="/transcribe" element={<Ytlink/>}/>
          <Route path="/home" element={<YourComponent/>}/>
          <Route path="/chatbox" element={<Chatbox/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/getyt" element={<GenVid/>}/>
          <Route path="/build" element={<Build1/>}/>
          <Route path="/course/playlist" element={<Playlist/>}/>
          <Route path="/course/playlist/info" element={<Preinfo/>}/>
          <Route path="/planner" element={<PathPlanner/>}/>

         
        </Routes>
        </header>
      </div>
    </Router>
)
  }

export default App;
