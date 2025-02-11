import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
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
    <section class="watch-video">
    <div class="video-container">
   
    <h3 class="heading ">Chat Bot assistance </h3>
        
    <textarea
               class="globalsub2"
                value={stack.map((message)=>{
                   return message+"\n\n"
                })}
                placeholder="Neil tells ..."
                readOnly
            />
    <br></br>
    <section class="comments">
    <h3 class="heading ">Enter prompt </h3>
    <input  className="globalsub5" type="text" onChange={updatedata}/>
     <button  class="inline-btn" onClick={response}>Send!</button>
    </section>
            
     </div>
    </section>
 )

};




export default ChatBox;