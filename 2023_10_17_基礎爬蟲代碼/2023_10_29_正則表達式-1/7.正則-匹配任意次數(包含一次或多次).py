import re

content = """
苹果，是绿色的
橙子，是橙色的
香蕉，是黄色的
乌鸦，是黑色的
猴子，
"""

# 猴子後面沒有字，故無法匹配
for temp in re.findall(r'，.+', content):
    print(temp)