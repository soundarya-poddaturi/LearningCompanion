import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import "./style.css"
import { Document, Page } from 'react-pdf';
function GenVid(mainprops){
    const [maindata,setmain]=useState(mainprops.data)
    const [object1,setobj]=useState()
    const[check,setCheck]=useState("")
    const getrec=()=>{
        axios.post(("/getvideo"),{
            data:maindata
        }).then( async function(response){
            console.log(response.data.id);
            let resData = response.data.id;
         
            resData = resData.replace(/\[|\]|'/g, '').split(',');
            setobj(resData);
            console.log(object1)
            setCheck("chippi chappa");
           })
           
           .then(function (error){
            console.log(error)
           })
    }
    const User=(props)=>{
        return(
        <div class ="box-container">
            <a class="box" href={`https://www.youtube.com/watch?v=${props.name.slice(2)}`}>
            <i class="fas fa-play"></i>
            <iframe width="300" height="200" src ={`https://www.youtube.com/embed/${props.name.slice(2)}`}></iframe>
            <h3 >Data Types in Python :{props.name.replace("=","")}</h3>
            <h3></h3>
         </a>
         </div>
        )//https://www.youtube.com/watch?v=f55qeKGgB_M&t=1189s
      }
      let i=0;
      
    
   
    return (
        <section class="playlist-videos">

<h1 class="heading">Recomended Videos </h1>
<button class="inline-btn" onClick={getrec}>Get videos</button>
<div class="box-container">


{check.length>0&&object1.map((value ,index)=>{
    return(
    <User name={value}/>
    )
     })}

</div>

</section>
            
    )
}
export default GenVid;