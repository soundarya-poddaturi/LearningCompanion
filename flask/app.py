import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from groq import Groq
import re
from flask import Flask, request, jsonify
import requests
import fitz  # PyMuPDF for PDF text extraction
import os
from dotenv import load_dotenv
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi as yta 
import google.generativeai as genai

import json
# Load environment variables
load_dotenv()

app = Flask(__name__)
# Get API keys from .env file
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")

# API URLs
GOOGLE_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent"
YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search"
TAVILY_SEARCH_URL = "https://api.tavily.com/search"


CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)# Function to extract text from a PDF
def extract_text_from_pdf(pdf_path):
    text = ""
    with fitz.open(pdf_path) as doc:
        for page in doc:
            text += page.get_text("text") + "\n"
    return text.strip()

# Function to generate AI content
import json  # Add this import at the top

def generate_content(pdf_text, prompt_type, user_question=None):
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        return {"error": "API key is missing"}
    
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    headers = {'Content-Type': 'application/json'}

    if prompt_type == "1":
        if not user_question:
            return {"error": "No question provided"}
        prompt = (
            f"Based on the provided document, answer the following question positively. "
            f"If the document does not directly contain the information, provide a reasonable, informative answer. "
            f"If examples are required but not present, create relevant examples.\n\nQuestion: {user_question}"
        )    
    elif prompt_type == "2":
        prompt = (
            "Create a JSON-formatted 5-question quiz based on the following content. "
            "Each question should have 4 multiple-choice answers and one correct answer. "
            "Ensure that your response is strictly valid JSON and does not include any extra text. "
            "Format it as: {\"questions\": [{\"question\": \"...\", \"choices\": [\"A\", \"B\", \"C\", \"D\"], \"answer\": \"...\"}, ...]}"
        )

    elif prompt_type == "3":
        prompt = ("Summarize the key points from the given text concisely.")
    else:
        return {"error": "Invalid prompt type"}

    request_payload = {
        "contents": [{"parts": [{"text": f"{pdf_text}\n\n{prompt}"}]}]
    }

    try:
        response = requests.post(url, headers=headers, json=request_payload)
        response.raise_for_status()
        json_response = response.json()

        generated_text = json_response["candidates"][0]["content"]["parts"][0]["text"]
        print(generated_text)
        # Ensure JSON formatting for quizzes
        if prompt_type == "2":
            try:
                # Extract only the JSON part
                json_start = generated_text.find("{")
                json_end = generated_text.rfind("}") + 1
                json_cleaned = generated_text[json_start:json_end]

                print("Cleaned JSON:", json_cleaned)  # Debugging

                quiz_data = json.loads(json_cleaned)  # Convert to JSON
                return quiz_data  # Send formatted data
            except json.JSONDecodeError as e:
                print("JSON Parse Error:", str(e))
                return {"error": "Failed to parse AI-generated quiz"}


        return {"generated_text": generated_text}

    except requests.exceptions.RequestException as e:
        return {"error": str(e)}


# API Endpoint to extract text from PDF
@app.route('/extract-text', methods=['POST'])
def extract_text():
    # print(request.files)  # Debugging

    if 'pdfFile' not in request.files:  # Change 'file' to 'pdfFile'
        return jsonify({"error": "No file provided"}), 400

    file = request.files['pdfFile']  # Change 'file' to 'pdfFile'
    
    if file.filename == '':  # Check if filename is empty
        return jsonify({"error": "No selected file"}), 400

    pdf_path = "temp.pdf"
    file.save(pdf_path)

    pdf_text = extract_text_from_pdf(pdf_path)  # Assuming this function exists
    os.remove(pdf_path)
    # print(pdf_text)
    return jsonify({"text": pdf_text})




# API Endpoint to generate content
@app.route('/generate-content', methods=['POST'])
def generate():
    data = request.get_json()
    pdf_text = data.get("pdf_text")
    
    prompt_type = data.get("prompt_type")
    user_question = data.get("user_question")
    if not pdf_text or not prompt_type:
        return jsonify({"error": "Missing required fields"}), 400
    
    result = generate_content(pdf_text, prompt_type, user_question)
    return jsonify(result)
# Function to search YouTube
def search_youtube(query, max_results=3):
    params = {
        "part": "snippet",
        "q": query,
        "key": YOUTUBE_API_KEY,
        "maxResults": max_results,
        "type": "video"
    }
    response = requests.get(YOUTUBE_SEARCH_URL, params=params)
    if response.status_code == 200:
        videos = response.json().get("items", [])
        return [f"https://www.youtube.com/watch?v={video['id']['videoId']}" for video in videos]
    return ["No YouTube results found."]

        


# Function to search the web using Tavily
def search_web(query, max_results=3):
    payload = {
        "api_key": TAVILY_API_KEY,
        "query": query,
        "search_depth": "basic",
        "max_results": max_results
    }
    response = requests.post(TAVILY_SEARCH_URL, json=payload)
    if response.status_code == 200:
        results = response.json().get("results", [])
        return [result["url"] for result in results]
    return ["No web results found."]

# API Endpoint for career guidance
@app.route("/generate-career-guide", methods=["POST"])
def generate_career_guide():
    print(request)
    data = request.json
    user_query = data.get("query")

    if not user_query:
        return jsonify({"error": "No query provided"}), 400
    print(user_query)
    # YouTube & Web search
    youtube_links = search_youtube(user_query)
    web_links = search_web(user_query)
    print(youtube_links)
    print(web_links)
    # Prepare Flash API request
    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": f"""
            You are a career guidance expert. When the user asks about a topic, provide a **detailed step-by-step career path** for mastering it. Your response should include:

            1. **Introduction to the topic** - Explain what it is and why it matters.
            2. **Skills required** - List essential skills.
            3. **Step-by-step learning roadmap** - Courses, books, hands-on projects, and important milestones.
            4. **Job opportunities** - Different roles available in this field.
            5. **Salary expectations** - Entry-level, mid-level, and expert salaries.
            6. **Challenges and industry trends** - Common pitfalls and advancements in this field.
            7. **Top resources** - Websites, online courses, books, and communities.

            Make the answer **detailed, structured, and easy to follow**.

            ### **User's Query:** {user_query}

            Now generate a **comprehensive guide** on this career path.
            """
                    }
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.7,
            "maxOutputTokens": 1000
        }
    }

    # Send request to Flash API
    print("heyyyyyy")
    response = requests.post(f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GOOGLE_API_KEY}", json=payload)
    if response.status_code == 200:
        ai_reply = response.json()["candidates"][0]["content"]["parts"][0]["text"]
        print(ai_reply)
        print(youtube_links)
        print(web_links)
        return jsonify({"career_guide": ai_reply, "youtube_links": youtube_links, "web_links": web_links})
    print("heyyyyyy")
    return jsonify({"error": "Failed to generate career guide"}), response.status_code


def askgem(question):
    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-2.0-flash')
    generation_config = {
        "temperature": 0.9,
        "top_p": 1,
        "top_k": 1,
        "max_output_tokens": 50000,
            }
    response = model.generate_content(question)
    return response.text


def transcribe_util(link):#Here pass the link only , copy it from the url 
    ids=link.split("=")
    vid_id=ids[1]
    data=yta.get_transcript(vid_id,languages=['en'])
    transcript=''
    for value in data:
        for key,val in value.items():
            if key=="text":
                transcript+=val

    l=transcript.splitlines()
    finaldata=" ".join(l)
    return finaldata

@app.route("/transcribe", methods=["POST"])
def transcribe():
    print(request)
    data = request.json
    user_link = data.get("link")

    data=transcribe_util(user_link)
    if len(data)<=40000:
        to_return=askgem(data+"Explain it in very depth and extra information ")
        print(to_return +"\n\n\n\n\n\n\n\n\n\n\n\n\n")
    else:   
        prev=0
        to_return = ""
        for i in range(0,len(data),5000):
            to_return+=askgem(data[prev:i]+"Explain it in very depth and extra information ")
            prev=i
    return jsonify({"data": to_return})




#chatbox
# Load environment variables from a .env file

# Initialize the Groq client using your API key
groq_api_key = os.environ.get("GROQ_API_KEY")
client = Groq(api_key=groq_api_key)
print("Groq API Token loaded successfully!")

def clean_response(text):
    """
    Cleans and formats the response:
    - Removes unnecessary symbols like ** or •
    - Ensures proper paragraph spacing
    - Trims extra spaces
    """
    text = re.sub(r"\\(.?)\\*", r"\1", text)  # Remove bold markers
    text = re.sub(r"•", "", text)  # Remove bullet points
    text = re.sub(r"- ", "", text)  # Remove hyphenated list markers
    text = re.sub(r"\n\s*\n", "\n\n", text.strip())  # Ensure clean paragraph breaks
    return text

def query_external_api(user_prompt):
    """
    Uses the Groq API to generate a response. The function builds a conversation
    with a system prompt that instructs the model to behave strictly as an academic tutor
    specialized in computer science. It is instructed to only provide factual and verified 
    information and avoid hallucinations.
    """
    system_prompt = (
        "You are an academic tutor chatbot specialized exclusively in computer science and related fields. "
        "Your job is to answer study-related questions with clear, detailed, and accurate explanations. "
    )
    
    # Build the conversation messages
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt}
    ]
    
    try:
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="llama-3.3-70b-versatile"
        )
        raw_response = chat_completion.choices[0].message.content
        return clean_response(raw_response)
    except Exception as e:
        print("API Error:", e)
        return "I'm sorry, I encountered an error while processing your request."

@app.route("/chatresponse", methods=["POST"])
def chat():
    # print("soundy\n\n\n\n\n\n\n\n\n\n")
    data = request.get_json()
    print(data)
    user_message = data.get("ques", "")
    print(user_message+"\n\n\n\n\n\n\n")
    response_text = query_external_api(user_message)
    print(response_text)
    return jsonify({"response": response_text})


    
    
    
    
if __name__ == '__main__':
    app.run(debug=True)










 

