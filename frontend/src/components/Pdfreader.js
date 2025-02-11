import React, { useEffect, useState } from "react";
import axios from "axios";
import GenVid from "./Videogen.js";
import QuizApp from "./questions.js";
import DsaCompiler from "./dsa.js";
import Summary from "./summary.js"
function Pdfreader() {
    const [resultText, setResultText] = useState('');
    const inpFileRef = React.createRef();
    const [enhance, setEnhance] = useState('')
    const [stack, setStack] = useState(["Hello ! Ask me a question?"])
    const [usermessage, setUser] = useState("")
    const [loading, setLoading] = useState(false);



    const HandleUpload = () => {
        const formData = new FormData();
        formData.append('pdfFile', inpFileRef.current.files[0]);

        fetch('http://127.0.0.1:5000/extract-text', {  // Change to full URL
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.text)
                setResultText(data.text.trim());
            })
            .catch(error => console.error("Error uploading file:", error));
    };

    const enhancetext = () => {
        axios.post(('/enhancetext'), {
            text: resultText
        })
            .then(function (response) {
                console.log(response.data.anaylsis)

                setEnhance(response.data.anaylsis)
            })
            .then(function (error) {
                console.log(error)
            })
    }


    const response = () => {
        if (!usermessage.trim()) {
            return; // Don't send empty messages
        }

        setStack([...stack, usermessage]);
        setLoading(true); // Start loading
        setUser("")
        axios.post("http://127.0.0.1:5000/generate-content", {  // Ensure URL is correct
            pdf_text: resultText,
            prompt_type: "1",
            user_question: usermessage
        })
            .then((response) => {
                console.log(response)
                console.log(response.data.generated_text);
                setStack((prevStack) => [...prevStack, response.data.generated_text]);
            })
            .catch((error) => {
                console.error("Error fetching response:", error);
            }).finally(() => {
                setLoading(false); // Stop loading
            });
    };

    const sendmessage = () => {
        setStack([...stack, usermessage])
    }
    const updatedata = (event) => {
        setUser(event.target.value)
    }

    function Display() {
        return (
            <section class="watch-video">
                <div class="video-container">
                    <h1 class="heading">Study guide </h1>
                    <div class="globalcontainer">

                        <div>
                            <textarea
                                class="globalsub"
                                style={{ border: '1px rgba(0, 0, 0, 0.59) solid' }}
                                value={resultText}
                                placeholder="Your PDF text will appear here..."
                                readOnly
                            />

                        </div>
                        <textarea
                            class="globalsub"
                            style={{ border: '1px rgba(0, 0, 0, 0.59) solid' }}
                            value={stack.map((message) => {
                                return message + "\n\n"
                            })}
                            placeholder="Neil tells ..."
                            readOnly />
                        < div>
                            <input
                                type="text"
                                
                                style={{fontSize:25, width: 580, height: 45, background: 'white', borderRadius: 2, border: '1px rgba(0, 0, 0, 0.59) solid' }}
                                onChange={updatedata}
                                value={usermessage} // Ensure it remains controlled
                                placeholder="Type here..."
                                autoFocus // Ensure focus remains on the input
                            />

                            <br />
                            <button onClick={response} className="inline-btn" > {loading ? "Fetching..." : "Clarify"}</button>

                        </div>
                    </div>

                </div>

                <div>
                    {/* <GenVid data={resultText}/> */}
                    <QuizApp data={resultText} />
                    <Summary data={resultText} />
                    {/* <DsaCompiler data={resultText}/> */}
                </div>
            </section >
        );
    }

    return (
        <section>
            <section>
                <h1 class="heading" >Select your PDF file ...</h1>
                <div className="add-comment2"  >
                    <input type="file" class="globalbtn" ref={inpFileRef} />
                    <button type="button" class="inline-option-btn" onClick={HandleUpload}>Upload</button>
                </div>
            </section>
            {resultText.length > 0 && <Display />}
        </section>

    )
}

export default Pdfreader;
