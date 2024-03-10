import re

content = """
苹果，是绿色的
橙子，是橙色的
香蕉，是黄色的
乌鸦，是黑色的
猴子，
"""

# *可以匹配任意字數，通常還.一起用，.代表一個字
for temp in re.findall(r'，.*', content):
    print(temp)