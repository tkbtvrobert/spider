
# flask
# web轻量级框架
# pip install flask

from flask import Flask

# 创建实例
app = Flask(__name__)


@app.route('/')
def hello1():
    return '你好'


# 路由  api
@app.route('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy')
def hello():
    return 'hello flask'

# 启动web
if __name__ == '__main__':
    app.run()








