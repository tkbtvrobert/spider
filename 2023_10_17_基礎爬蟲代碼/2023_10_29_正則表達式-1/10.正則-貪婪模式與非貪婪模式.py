import re

source = '<html><head><title>Title</title>'

for temp in re.findall(r'<.*>', source):
    print(temp)

"""
贪婪模式是尽可能多的去匹配符合规则的字符

非贪婪模式是尽可能少的去匹配符合规则的字符
"""

for temp in re.findall(r'<.*?>', source):
    print(temp)