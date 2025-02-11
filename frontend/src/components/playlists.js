import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import "./style.css"

function Playlist(){

   return(
    <div>
        <section class="playlist-details">

<h1 class="heading">playlist details</h1>

<div class="row">

   <div class="column">
      <form action=""  class="save-playlist">
         <button type="submit"><i class="far fa-bookmark"></i> <span>save playlist</span></button>
      </form>

      <div class="thumb">
         <img src={require("./images/pythonimage1.png")} alt=""/>
        
      </div>
   </div>
   <div class="column">
      <div class="tutor">
         <img src={require("./images/pic-2.jpg")} alt=""/>
         <div>
            <h3>john deo</h3>
            <span>21-10-2022</span>
         </div>
      </div>

      <div class="details">
         <h3>complete Python tutorial</h3>
         <p>These videos explains about Python</p>
         <a  class="inline-btn">view profile</a>
      </div>
   </div>
</div>

</section>

<section class="playlist-videos">

<h1 class="heading">playlist videos</h1>

<div class="box-container">

   <a class="box" href="/course/playlist/info">
      <i class="fas fa-play"></i>
      <img src={require("./images/pythonimage1.png")} alt=""/>
      <h3>Python tutorial (part 01)</h3>
   </a>

   <a class="box" href="/course/playlist/info">
      <i class="fas fa-play"></i>
      <img src={require("./images/pythonimage1.png" )}alt=""/>
      <h3>Python tutorial (part 02)</h3>
   </a>

   <a class="box" href="/course/playlist/info">
      <i class="fas fa-play"></i>
      <img src={require("./images/pythonimage1.png")} alt=""/>
      <h3>Python tutorial (part 03)</h3>
   </a>

   <a class="box" href="/course/playlist/info">
      <i class="fas fa-play"></i>
      <img src={require("./images/pythonimage1.png")} alt=""/>
      <h3>Python tutorial (part 04)</h3>
   </a>

   <a class="box" href="/course/playlist/info">
      <i class="fas fa-play"></i>
      <img src={require("./images/pythonimage1.png")} alt=""/>
      <h3>Python tutorial (part 05)</h3>
   </a>

   <a class="box" href="/course/playlist/info">
      <i class="fas fa-play"></i>
      <img src={require("./images/pythonimage1.png")} alt=""/>
      <h3>Python tutorial (part 06)</h3>
   </a>

</div>

</section>
    </div>
   )
}
export default Playlist