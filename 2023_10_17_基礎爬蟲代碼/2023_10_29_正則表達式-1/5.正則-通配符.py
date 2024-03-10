import re

content = """
苹果是绿色的
橙子是橙色的
香蕉是黄色的
乌鸦是黑色的
"""

# 当前findall方法返回的数据类型是一个列表
# print(re.findall(r'.色', content))
# r代表原始字符串：所有的字符串都是直接按照字面的意思来使用，没有转义特殊或不能打印的字符。
for result in re.findall(r'.色', content):
    print(result)