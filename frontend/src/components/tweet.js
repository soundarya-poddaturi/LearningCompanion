import React ,{useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Tweet()
{
   useEffect(()=>{
    fetchitems();
   },[])
   const [items,setItems]= useState([]);
   
   const fetchitems= async()=>{
    const data = await axios.get("/tweets");
    const item = await data.data
    console.log(item)
    console.log(typeof(item))

    //itemsdata.data[0]
    setItems(item)
   }
    const name =<h1>testing</h1>;
  const User=(props)=>{
    return(
      <div>
        <h1>testing</h1>
        <iframe width="600" height="300" src = {props.name} ></iframe>
      </div>
    )//https://www.youtube.com/watch?v=f55qeKGgB_M&t=1189s
  }
  let i=0;
  const check =true ;
  
  return (
   <section>
   
   
   {
    <div>
    <h1>{items["name"]}</h1>
    <h1>{items["username"]}</h1>
    <h1>{items["msg"]}</h1>
  </div>
   }

    
    </section>
  );
}
export default Tweet;