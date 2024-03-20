import execjs

# 生成对应的js运行环境
# 安装好node之后  才会使用   Node.js (V8)引擎
# node = execjs.get()
# print(node)

# 读取到js文件
with open('02-demo.js', encoding='utf-8') as f:
    js_code = f.read()

# 如果js比較短可以直接讀
js_cade = """

"""

# 创建js环境
# 加载js代码到js环境内部
js = execjs.compile(js_code)

# 两种方式
# call 方法使用 - 最常使用
# 接受参数第一个是调用的方法 后面跟上的是参数
res = js.call('get_data', ['123'], {'aa': 234}, 456)
print(res)

#  eval 方法使用
res = js.eval('get_data("123", 234, 456)')
print(res)