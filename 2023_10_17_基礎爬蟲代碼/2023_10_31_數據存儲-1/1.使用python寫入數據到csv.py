import csv

herders = ['班級', '姓名', '性別']

rows = [
    ['爬蟲1班', '安娜', '女'],
    ['爬蟲2班', '雙雙', '女'],
    ['爬蟲3班', '夏洛', '男'],
]

# newline='' 的目的在於產生文件後，不會多空行
# 使用 utf-8-sig 編碼方式才不會產生亂碼
with open('stu_info_1.csv', 'w', encoding='utf-8-sig', newline='') as f:
    # 1.创建一个csv的writer对象，这样才能够将写入csv格式数据到这个文件
    f_csv = csv.writer(f)
    # 2.写入一行（我们用第一行当做表头）
    f_csv.writerow(herders)
    # 3.写入多行（当做数据）
    f_csv.writerows(rows)
