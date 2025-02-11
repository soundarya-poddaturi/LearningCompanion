from googleapiclient.discovery import build

# Set up YouTube API client
api_key = 'AIzaSyCeoHPrtN19eMSxnM1dHFpgZmjPNmPTsTI'
youtube = build('youtube', 'v3', developerKey=api_key)

def get_top_videos(query, max_results=5):
    # Search for videos based on a query
    request = youtube.search().list(
        part="snippet",
        q=query,
        type="video",
        order="relevance",
        maxResults=max_results
    )
    
    response = request.execute()
    
    # Extract relevant video information
    video_list = []
    for item in response['items']:
        video = {
            'title': item['snippet']['title'],
            'url': f"https://www.youtube.com/watch?v={item['id']['videoId']}",
            'description': item['snippet']['description']
        }
        video_list.append(video)
    
    return video_list

# Example Usage
topic = "Mobile Computing"
videos = get_top_videos(topic)

for idx, video in enumerate(videos, start=1):
    print(f"{idx}. {video['title']}")
    print(f"   URL: {video['url']}")
    print(f"   Description: {video['description']}\n")
