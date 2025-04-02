import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import QuizApp from "./questions";
import ReactMarkdown from "react-markdown";
import DsaCompiler from "./dsa";

function Ytlink() {
    const [ytlink, setLink] = useState("");
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const response = await axios.post("http://127.0.0.1:5000/transcribe", {
                link: ytlink
            });
            const data = response.data.data;
            console.log("API Response:", data);
            setList([data]);  // Ensure list is an array
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    function takeData(event) {
        setLink(event.target.value);
    }

    function Display(props) {
        return (
            <section className="watch-video">
                <div className="video-container">
                    <div className="video">
                        {/* Ensure YouTube link is properly embedded */}
                        <iframe
                            width="1080"
                            height="600"
                            src={`https://www.youtube.com/embed/${props.link.split("=")[1]}`}
                            title="YouTube Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <h1 className="heading">Study Guide</h1>

                    <form className="add-commentt">
                        <textarea
                            name="comment_box"
                            placeholder="Enter your comment"
                            required
                            maxLength="1000"
                            cols="30"
                            rows="10"
                            value={props.data} // Use value instead of children inside textarea
                            readOnly
                        />
                    </form>
                </div>

                <div>
                    <QuizApp data={props.data} />
                    <DsaCompiler data={props.data} />
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="comments">
                <h1 className="heading">Paste your YouTube Link here...</h1>
                <input type="text" className="add-comment2" onChange={takeData} />
                <button onClick={fetchItems} className="inline-option-btn">Build Lesson</button>

                <br />

                {loading && (
                    <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                        <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                        <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                        <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                        <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                    </svg>
                )}

                {!loading && list.length > 0 && list.map((item, index) => (
                    <ReactMarkdown key={index}>{item}</ReactMarkdown>
                ))}
            </section>
        </>
    );
}

export default Ytlink;
