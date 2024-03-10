"""
通过requests获取音频数据保存到本地

https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1646.mp3

https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1645.mp3

https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1643.mp3

https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1642.mp3

https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y1641.mp3


"""

import requests

url = 'https://downsc.chinaz.net/Files/DownLoad/sound1/202303/y164{}.mp3'

for num in range(1, 7):
    response = requests.get(url.format(num)).content
    with open(f'./music/y164{num}.mp3', 'wb') as f:
        f.write(response)
        print(f'y164{num}.mp3 下載成功!')
