import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import QuizApp from "./questions";

import DsaCompiler from "./dsa";


function Ytlink() {
    const [ytlink, setLink] = useState("");
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/transcribe", {
                link: ytlink
            });
            const data = response.data;
            console.log("API Response:", data);
            setList([data]);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    function takeData(event) {
        setLink(event.target.value);
    }


    function Display(props) {
        return (
            <section class="watch-video">



                <div class="video-container">
                    <div class="video">

                        <iframe width="1080" height="600" src={props.link} controls poster="images/post-1-1.png" id="video"></iframe>
                    </div>








                    <h1 class="heading">Study guide </h1>

                    <form action="" class="add-commentt">

                        <textarea name="comment_box" placeholder="enter your comment" required maxlength="1000" cols="30" rows="100">
                            {props.data}
                        </textarea>

                    </form>

                </div>
                <div>
                    <QuizApp data={props.data} />
                    <DsaCompiler data={props.data} />
                </div>
            </section >
        );
    }


    return (
        <div>
            <section class="comments">
                <h1 class="heading" >Paste your YouTube Link here ...</h1>

                <input type="text" className="add-comment2" onChange={takeData} />
                <button onClick={fetchItems} class="inline-option-btn" >Build lesson</button>



                <br></br>

                {loading && <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
                    <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
                    <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
                    <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                    <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                </svg>}
                {!loading && list.length > 0 && list.map((item, index) => (
                    <div class="details">
                        <h3> <Display key={index} link={item.link} data={item.data} /> </h3>
                    </div>
                ))}
            </section>
            <div>





            </div>

        </div>
    );
}
//src={require("./images/customlogo.png")}
export default Ytlink;