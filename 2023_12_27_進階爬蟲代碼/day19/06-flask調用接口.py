
import os

from selenium import webdriver
import time
from flask import Flask, jsonify

app = Flask(__name__)
pro_dir = os.path.dirname(os.path.abspath(__file__))



def drive_sign():
    option = webdriver.ChromeOptions()
    option.add_argument('--disable-blink-features=AutomationControlled')
    option.add_argument('headless')
    drive = webdriver.Chrome(options=option)
    drive.get(pro_dir + '\\' + '03-ths.html')
    # time.sleep(20)  express
    return drive



drive = drive_sign()

@app.route('/')
def hello1():
    context = {
        'v': drive.execute_script('return window.aaa()')
    }
    return jsonify(context=context)


# 启动web
if __name__ == '__main__':
    app.run()


