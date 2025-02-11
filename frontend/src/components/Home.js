import React from "react";
import {Link} from "react-router-dom"
import Ytlink from "./Yttranscribe";
import { BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import { useState } from 'react';
import './style.css';
import Editor from "@monaco-editor/react";

import Axios from 'axios';

function Home()
{  // State variable to set users source code
    const [userCode, setUserCode] = useState(``);
 
    // State variable to set editors default language
    const [userLang, setUserLang] = useState("python");
 
    // State variable to set editors default theme
    const [userTheme, setUserTheme] = useState("vs-dark");
 
    // State variable to set editors default font size
    const [fontSize, setFontSize] = useState(20);
 
    // State variable to set users input
    const [userInput, setUserInput] = useState("");
 
    // State variable to set users output
    const [userOutput, setUserOutput] = useState("");
 
    // Loading state variable to show spinner
    // while fetching data
    const [loading, setLoading] = useState(false);
 
    const options = {
        fontSize: fontSize
    }
 
    // Function to call the compile endpoint
    function compile() {
        setLoading(true);
        if (userCode === ``) {
            return
        }
 
        // Post request to compile endpoint
        Axios.post(`http://localhost:8000/compile`, {
            code: userCode,
            language: userLang,
            input: userInput
        }).then((res) => {
            setUserOutput(res.data.output);
        }).then(() => {
            setLoading(false);
        })
    }
 
    // Function to clear the output screen
    function clearOutput() {
        setUserOutput("");
    }
 
    return (
        

            
            
      
        <div className="container">
        <div className="purple-box"></div>
        <div className="white-box1" />
        <div className="white-box2" />
        <button className="purple-bar1" value="ut">Questions</button>
        <button className="purple-bar2" >Test</button>
        <button className="purple-bar3" >Compiler</button>
        <textarea className="gray-box1" />
        <div className="gray-box2" />
      </div>


        
    )
}
export default Home ;