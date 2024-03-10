str_code = 'abc'

byte_code = str_code.encode('utf-8')
print(type(byte_code))

print(type(byte_code.decode('utf-8')))

""" 在之後進行頁面資料抓取的過程中, 建議先看當前頁面中的編碼集
    如果頁面返回的資料列印出來時亂碼, 那麼首先要排查的是頁面的編碼集 
"""
