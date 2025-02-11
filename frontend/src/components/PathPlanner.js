import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMarkdown from "react-markdown";

function PathPlanner() {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPathPlanner = async () => {
        setLoading(true);
        try {
            const res = await axios.post("http://127.0.0.1:5000/generate-career-guide", { query });
            console.log(res)
            setResponse(res.data);
        } catch (error) {
            console.error("Error fetching career guide:", error);
        }
        setLoading(false);
    };

    return (
        // <div className=" mt-5">
           
            <section className="comments">
                <h1 class="heading" >Buil a plan...</h1>

                <input
                    type="text"
                    className="add-comment2"
                    placeholder="Enter a career field..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />


                <button className="inline-option-btn" onClick={fetchPathPlanner} disabled={loading}>
                    {loading ? "Fetching..." : "Get Career Guide"}
                </button>

                {response && (
                    <div className="mt-4">
                        <h3 className="text-primary">Career Guide</h3>

                        <ReactMarkdown>{response.career_guide}</ReactMarkdown>

                        <h4 className="text-success mt-4">YouTube Resources</h4>
                        <ul className="list-group">
                            {response.youtube_links.map((link, index) => (
                                <li key={index} className="list-group-item">
                                    <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-info mt-4">Web Resources</h4>
                        <ul className="list-group">
                            {response.web_links.map((link, index) => (
                                <li key={index} className="list-group-item">
                                    <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
       
    );
}

export default PathPlanner;
