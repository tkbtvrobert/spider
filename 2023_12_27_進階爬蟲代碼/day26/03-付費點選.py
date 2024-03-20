

# 云码



import json
import time

import requests
import base64


class YdmVerify(object):
    _custom_url = "http://api.jfbym.com/api/YmServer/customApi"
    _token = "N4gM_VcNbaiuxcuZEuh4g2aI-jSj9SDdV70Du6rzStw"
    _headers = {
        'Content-Type': 'application/json'
    }



    def click_verify(self, image, label_image=None, extra=None, verify_type="30100"):
        # 通用任意点选1~4个坐标 30009
        # 通用文字点选1(extra,点选文字逗号隔开,原图) 30100
        # 定制-文字点选2(extra="click",原图) 30103
        # 定制-单图文字点选 30102
        # 定制-图标点选1(原图) 30104
        # 定制-图标点选2(原图,extra="icon") 30105
        # 定制-语序点选1(原图,extra="phrase") 30106
        # 定制-语序点选2(原图) 30107
        # 定制-空间推理点选1(原图,extra="请点击xxx") 30109
        # 定制-空间推理点选1(原图,extra="请_点击_小尺寸绿色物体。") 30110
        # 定制-tx空间点选(extra="请点击侧对着你的字母") 50009
        # 定制-tt_空间点选 30101
        # 定制-推理拼图1(原图,extra="交换2个图块") 30108
        # 定制-xy4九宫格点选(原图,label_image,image) 30008
        payload = {
            "image": base64.b64encode(image).decode(),
            # "label_image": base64.b64encode(label_image).decode(),
            "token": self._token,
            "type": verify_type,
            'extra': 'click'
        }
        if extra:
            payload['extra'] = extra
        resp = requests.post(self._custom_url, headers=self._headers, data=json.dumps(payload))
        print(resp.text)
        return resp.json()['data']['data']




if __name__ == '__main__':
    aa = open('click.png', 'rb').read()


    y = YdmVerify()
    y.click_verify(aa)





