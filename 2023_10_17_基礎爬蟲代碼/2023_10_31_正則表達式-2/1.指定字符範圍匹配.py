import re

content = 'asdasfqweq1231@!#~#@@#'

# [\d\W] 和 \d\W 差別在，前者會盡量的匹配\d完了再盡量的匹配\W，後者是匹配完一個\d馬上再匹配\W
for temp in re.findall(r'\d\W', content):
    print(temp)