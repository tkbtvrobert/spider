import re

# 001-苹果价格-60 要接連者，默認是有一個換行符號，如果沒換行匹配會抓不到第一個數值
content = """001-苹果价格-60
002-橙子价格-70
003-香蕉价格-80
"""

# re.M: 允许换行匹配
# ^匹配開頭
for temp in re.findall(r'^\d+', content, re.M):
    print(temp)

# $匹配結尾
for temp in re.findall(r'\d+$', content, re.M):
    print(temp)

"""
^: 以指定字符开头
$: 以指定字符结尾

re.M: 多行匹配模式, re正则默认是单行匹配
"""
