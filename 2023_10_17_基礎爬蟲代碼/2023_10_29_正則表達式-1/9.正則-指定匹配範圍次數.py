import re

content = """
红彤彤，绿油油，黑乎乎，绿油油油油
"""

# 將油這個字匹配3到4次
for temp in re.findall(r'油{3,4}', content):
    print(temp)