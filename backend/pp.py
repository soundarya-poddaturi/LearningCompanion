import requests
import json


FLASH_API_KEY = "AIzaSyCHI8T6yZpycniqsBkvgb3p0WrGgDC7snQ"  # Google Flash 1.5 API
YOUTUBE_API_KEY = "AIzaSyCeoHPrtN19eMSxnM1dHFpgZmjPNmPTsTI"  # YouTube API Key
TAVILY_API_KEY = "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"  # Tavily API Key

FLASH_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent"
YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search"
TAVILY_SEARCH_URL = "https://api.tavily.com/search"

headers = {
    "Content-Type": "application/json"
}

def search_youtube(query, max_results=3):
    """Fetch YouTube video links based on a search query."""
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

def search_web(query, max_results=3):
    """Fetch website links using Tavily API."""
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

print("Google Flash 1.5 Chat - Type 'exit' to stop.")

while True:
    user_input = input("\nYou: ")  # Get user input from terminal
    if user_input.lower() == "exit":
        print("Goodbye!")
        break

    # Search for YouTube & Website links
    youtube_links = search_youtube(user_input)
    web_links = search_web(user_input)

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

            ### **User's Query:** {user_input}

            Now generate a **comprehensive guide** on this career path.
"""
                }
            ]
        }
    ],
    "generationConfig": {
        "temperature": 0.7,
        "maxOutputTokens": 1000  # Increased for a detailed response
    }
}


    # Send request to Flash API
    response = requests.post(f"{FLASH_API_URL}?key={FLASH_API_KEY}", headers=headers, data=json.dumps(payload))

    # Parse response
    if response.status_code == 200:
        ai_reply = response.json()["candidates"][0]["content"]["parts"][0]["text"]
        print("\nAI:", ai_reply)
    else:
        print("\nError:", response.json())

    # Print YouTube and website links
    print("\n🔗 **YouTube Links:**")
    for link in youtube_links:
        print(link)

    print("\n🌐 **Website Links:**")
    for link in web_links:
        print(link)
