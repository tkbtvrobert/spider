import re

content = """
苹果.是绿色的
橙子.是橙色的
香蕉.是黄色的
"""

# 匹配任意字數直到遇到.結尾
for temp in re.findall(r'.*\.', content):
    print(temp)