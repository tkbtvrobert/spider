import csv
import requests


# 此處api取得方法，先去第二頁拿到後，把page=2改成page=1
class SaveVideoInfo:
    def __init__(self):
        self.url = 'https://api.bilibili.com/x/web-interface/wbi/search/type?category_id=&search_type=video&ad_' \
                   'resource=5654&__refresh__=true&_extra=&context=&page=1&page_size=42&from_source=&from_spmid=' \
                   '333.337&platform=pc&highlight=1&single_column=0&keyword=%E7%BE%8E%E5%A5%B3&qv_id=' \
                   '5lO7IsP1da0slKcCzwsCBNkBfaeKZnQ4&source_tag=3&gaia_vtoken=&dynamic_offset=24&web_location=' \
                   '1430654&w_rid=f48fc9b0f0ff1be9704321fec40c4465&wts=1699584233'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/119.0.0.0 Safari/537.36',
            'Cookie': "buvid3=BA06A102-1A4F-CD7F-5611-48E6A1E69FA601853infoc; b_nut=100; CURRENT_FNVAL=4048; "
                      "bsource=search_google; _uuid=DCC106A89-C5F9-6B9C-C962-10E5F510102D410903675infoc; rpdid=|("
                      "umuRku~~lu0J'uY~YR~Jl|l; "
                      "buvid4=C4C15E07-201F-7D93-D39D-6E57AB688F3757132-022041322-UaUCgDsDeWMtKN2S%2FrtiMA%3D%3D; "
                      "DedeUserID=1008847062; DedeUserID__ckMd5=6d8c86fe18c80cc6; nostalgia_conf=-1; "
                      "i-wanna-go-back=-1; b_ut=5; header_theme_version=CLOSE; PVID=1; FEED_LIVE_VERSION=V8; "
                      "CURRENT_PID=d432b830-e50e-11ed-8052-8309212bd796; theme_style=light; "
                      "fingerprint=03f112a81d5c698b9cde7dfdc0379de1; buvid_fp_plain=undefined; "
                      "buvid_fp=ed2d657c522f445b3fd1d7a1500dd1ab; enable_web_push=DISABLE; home_feed_column=5; "
                      "browser_resolution=1600-743; bp_video_offset_1008847062=860438286205714433; "
                      "SESSDATA=4472abef%2C1715103692%2Cde923%2Ab2CjB4sdYvh1BB7PvQ4LX5X7aRpXvacdR38vBGIdtp3g"
                      "-HVxabBaRcyuh85pciB6GAvJsSVml5ZUgtTWU5TmhYcC03aXYwazR0Qk9vWldQN3lCTFl5ZVE2MDcxZkZwcGZ1bFdrO"
                      "TJXeVZTcFdVdGtoZmxvcmJzTExHUjRtU0thYW1nREI4VC1SZDF3IIEC; "
                      "bili_jct=c10f8518c7e922e01302c4d2cf731a27; "
                      "bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9"
                      ".eyJleHAiOjE2OTk4MTEwODAsImlhdCI6MTY5OTU1MTgyMCwicGx0IjotMX0.Pyajl7VkTmGpaSMxenO6Q-0"
                      "-HsAtaGUUgAxME55TRcw; bili_ticket_expires=1699811020; sid=8d2s78lu; b_lsid=47C86322_18BB71B5672"
        }

    def save(self):
        with open('video_info.csv', 'a', encoding='utf-8-sig', newline='') as f:
            # 1.定义表头
            field_names = ['author', 'arcurl', 'tag']
            # 2.設置表頭
            f_csv = csv.DictWriter(f, fieldnames=field_names)
            # 3.寫入表頭
            f_csv.writeheader()

            """
            如果 url 对象表示的 URL 是 https://example.com/page/{page}/content，而 page 参数的值是 42，那么 url.format(page) 
            的结果将是 https://example.com/page/42/content。
            """
            for page in range(1, 6):
                response = requests.get(self.url.format(page), headers=self.headers).json()
                for result in response['data']['result']:
                    item = dict()
                    item['author'] = result['author']
                    item['arcurl'] = result['arcurl']
                    item['tag'] = result['tag']
                    # print(item)
                    # 此處不能用writerows，因為writerows創的是列表
                    f_csv.writerow(item)


svi = SaveVideoInfo()
svi.save()
