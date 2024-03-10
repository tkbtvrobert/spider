import re

names = '关羽; 张飞, 赵云,马超, 黄忠  李逵'

# \s* 表示匹配零个或多个空格字符。 其目的是消除在分隔符后可能存在的空格。
names_list = re.split(r'[;,\s]\s*', names)
print(names_list)