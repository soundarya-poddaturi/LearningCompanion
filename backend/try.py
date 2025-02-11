import requests
import json
import fitz  # PyMuPDF for PDF text extraction
#  pip install pymupdf
# pip install google-api-python-client

def extract_text_from_pdf(pdf_path):
    """Extracts text from a given PDF file."""
    text = ""
    with fitz.open(pdf_path) as doc:
        for page in doc:
            text += page.get_text("text") + "\n"
    return text.strip()

def generate_content(api_key, pdf_text, prompt_type, user_question=None):
    """
    Generates AI content based on the selected type (Q&A or Quiz).
    
    - prompt_type: '1' for Q&A, '2' for Quiz
    - user_question: The question to be answered (required if prompt_type is '1')
    """
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    headers = {'Content-Type': 'application/json'}

    # Limiting text size to avoid exceeding model input limits
    # max_length = 5000  # Adjust as per model constraints
    # pdf_text = pdf_text[:max_length]  

    # Creating a positive prompt with encouragement for examples
    if prompt_type == "1":
        if not user_question:
            print("Error: No question provided.")
            return None
        prompt = (
            f"Based on the provided document, answer the following question positively. "
            f"If the document does not directly contain the information, provide a reasonable, informative answer. "
            f"If examples are required but not present, create relevant examples.\n\nQuestion: {user_question}"
        )
    elif prompt_type == "2":
        prompt = (
            "Create a 5-question quiz based on the following content. "
            "Each question should have 4 multiple-choice answers, with one correct answer labeled."
        )
    elif prompt_type=="3":
            prompt = ("Summarize the key points from the given text in a clear and concise manner.")

    else:
        print("Invalid choice. Exiting.")
        return None

    request_payload = {
        "contents": [
            {
                "parts": [
                    {"text": f"Here is some content from a PDF:\n{pdf_text}\n\n{prompt}"}
                ]
            }
        ]
    }

    try:
        response = requests.post(url, headers=headers, json=request_payload)
        response.raise_for_status()
        json_response = response.json()
        generated_text = json_response["candidates"][0]["content"]["parts"][0]["text"]
        return generated_text

    except requests.exceptions.RequestException as e:
        print(f"Error during API request: {e}")
        try:
            error_message = response.json()
            print(f"Error details: {json.dumps(error_message, indent=2)}")
        except Exception:
            print(f"Could not parse JSON error response: {response.text}")
        return None


# Example Usage:
api_key = "AIzaSyCHI8T6yZpycniqsBkvgb3p0WrGgDC7snQ"  # Replace with your actual API key
pdf_path = "/Users/soundaryapoddaturi/Desktop/projects/college/sems/4-1/CC/CC-Unit1-Notes.pdf"  # Path to your PDF file

# Let the user select between Q&A and Quiz
print("Choose an option:")
print("1: Ask a question based on the document")
print("2: Generate a quiz")
print("3: Summarize")

choice = input("Enter your choice (1 or 2 or 3): ").strip()

if choice == "1":
    user_question = input("Enter your question: ").strip()
    pdf_text = extract_text_from_pdf(pdf_path)
    generated_text = generate_content(api_key, pdf_text, choice, user_question)

elif choice == "2":
    pdf_text = extract_text_from_pdf(pdf_path)
    generated_text = generate_content(api_key, pdf_text, choice)
elif choice =="3":
    pdf_text = extract_text_from_pdf(pdf_path)
    generated_text = generate_content(api_key, pdf_text, choice)

else:
    print("Invalid choice. Exiting.")
    exit()

if generated_text:
    print("\nGenerated Output:\n")
    print(generated_text)
else:
    print("Content generation failed.")
