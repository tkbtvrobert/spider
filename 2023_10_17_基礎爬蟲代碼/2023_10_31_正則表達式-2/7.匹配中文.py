import re

title = '你好，hello，世界, 123'

# unicode編碼[\u4e00-\u9fa5]指中文範圍
pattern = re.compile(r'[\u4e00-\u9fa5]+')
result = pattern.findall(title)

print(result)