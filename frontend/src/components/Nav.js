import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./style.css"
function Nav(){
  const [check,setCheck]=useState(false)
  useEffect(() => {
    const toggleBtn = document.getElementById('toggle-btn');
    const body = document.body;
    let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}
}, []);
  
    return (
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
  <header className="header">
    <section className="flex">
      <a href='/home' className="logo">
        Learning Companion
      </a>
      <form  className="search-form">
        <input
          type="text"
          name="search_box"
          required=""
          placeholder="search courses..."
          maxLength={100}
        />
        <button type="submit" className="fas fa-search" />
      </form>
      <div className="icons">
        <div id="menu-btn" className="fas fa-bars" />
        <div id="search-btn" className="fas fa-search" />
        <div id="user-btn" className="fas fa-user" />
        <div id="toggle-btn" className="fas fa-sun" />
      </div>
      <div className="profile">
        <img src={require("./images/pic-2.jpg") }className="image" alt="" />
        <h3 className="name">Sample name </h3>
        <p className="role">student</p>
        <a  className="btn">
          view profile
        </a>
        <div className="flex-btn">
          <a  className="option-btn">
            login
          </a>
          <a  className="option-btn">
            register
          </a>
        </div>
      </div>
    </section>
  </header>
  <div style={{}}className="side-bar">
    <div id="close-btn">
      <i className="fas fa-times" />
    </div>
    <div className="profile">
      <img src={require("./images/pic-2.jpg" )} className="image" alt="" />
      <h3 className="name">Sample name </h3>
      <p className="role">student</p>
      <a  className="btn">
        view profile
      </a>
    </div>
    <nav className="navbar">
      <Link to="/home">
      
          Home
      </Link>
      
      {/* <Link to ="/course">
        
        Courses
      </Link> */}
               
                <Link to="/extract-text">Pdfreader</Link>
                
                <Link to="/transcribe">Youtube transcribe </Link>
                
                <Link to ="/chatbox">Chatbox</Link>
                
                <Link to="/compiler">Compiler</Link>
                
                <Link to="/planner">Path Planner</Link>
      
      
      
      
     
      
    </nav>
  </div>
       </>
    )
}

export default Nav;