import requests

video_url = 'https://www.douyin.com/aweme/v1/play/?video_id=v0d00fg10000cjc6ae3c77ueumls4l6g&line=0&file_id=4c040c884d6942a0a98e7cd6483f09c3&sign=1324df4140c62a385c49840e8b6fb803&is_play_url=1&source=PackSourceEnum_FEED'

r = requests.get(url=video_url, stream=True)

response_body_length = int(r.headers.get("Content-Length"))
print("body的數據長度為:", response_body_length)

with open("抖音.mp4", 'wb') as fd:
    write_length=0
    for chunk in r.iter_content(chunk_size=100):
        write_length+=fd.write(chunk)
        print("下載進度: %02.2f%%" % (100*write_length/response_body_length))