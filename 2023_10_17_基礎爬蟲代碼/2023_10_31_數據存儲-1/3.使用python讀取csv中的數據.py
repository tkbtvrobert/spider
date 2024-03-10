import csv

with open('stu_info_1.csv', encoding='UTF-8') as f:
    # 創建一個讀取對象
    f_csv = csv.reader(f)
    for row in f_csv:
        print(row)