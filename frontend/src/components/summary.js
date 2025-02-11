import React, { useState } from "react";
import axios from "axios";

function Summary({ data }) {
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchSummary = () => {
        setIsLoading(true);
        axios.post("http://127.0.0.1:5000/generate-content", { 
            pdf_text: data,
      prompt_type: "3"
         })
        .then(response => {
            console.log(response.data.generated_text);
            setSummary(response.data.generated_text);
        })
        .catch(error => {
            console.error("Error summarizing text:", error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div>
            <button onClick={fetchSummary} className="inline-btn" disabled={isLoading}>
                {isLoading ? "Summarizing..." : "Get Summary"}
            </button>

            {summary && (
                <textarea 
                    className="globalsub" 
                    value={summary} 
                    placeholder="Summary will appear here..." 
                    readOnly 
                />
            )}
        </div>
    );
}

export default Summary;
