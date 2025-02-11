import React from "react";
import {Link} from "react-router-dom"
import Ytlink from "./Yttranscribe";
import { BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import { useState } from 'react';
import './style.css';
import Editor from "@monaco-editor/react";

import Axios from 'axios';
import ChatBot from "./Chatbox";

function Lesson()
{  // State variable to set users source code
    
 
    return (
        

            
            
      
        <div className="container">
        <div className="purple-box"></div>
        <div className="white-box1" />
        <div className="white-box2" />
        <button className="purple-bar1" value="ut">Questions</button>
        <button className="purple-bar2" >Test</button>
        <button className="purple-bar3" >Compiler</button>
        <textarea className="gray-box1" />
        <div className="gray-box2" >
            {Chatbot}
        </div>
      </div>


        
    )
}
export default Lesson ;