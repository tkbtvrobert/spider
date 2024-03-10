import csv

with open('stu_info_2.csv', encoding='UTF-8') as f:
    # 創建一個字典讀取對象
    f_csv = csv.DictReader(f)
    for row in f_csv:
        print(row.get('class_name'), row.get('name'), row.get('gender'), row.get('phone'), row.get('qq'))
        print(row)