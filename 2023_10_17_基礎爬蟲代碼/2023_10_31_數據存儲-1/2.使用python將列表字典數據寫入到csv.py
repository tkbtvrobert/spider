import csv

headers = ['class_name', 'name', 'gender', 'phone', 'qq']

rows = [
    {
        "class_name": "18级Python",
        "name": '小王',
        "gender": '男',
        "phone": '13146060xx1',
        "qq": '123456xx1'
    },
    {
        "class_name": "18级Python",
        "name": '小李',
        "gender": '男',
        "phone": '13146060xx2',
        "qq": '123456xx2'
    },
    {
        "class_name": "19级Python",
        "name": '小赵',
        "gender": '女',
        "phone": '13146060xx3',
        "qq": '123456xx3'
    },
    {
        "class_name": "19级Python",
        "name": '小红',
        "gender": '女',
        "phone": '13146060xx4',
        "qq": '123456xx4'
    },
]

# 遇到 cp950 編碼問題，在 open 檔案時多一個輸入參數，讓讀寫檔案的編碼方式為 UTF-8
with open('stu_info_2.csv', 'w', encoding='utf-8-sig', newline='') as f:
    # 创建一个csv的DictWriter对象，这样才能够将写入csv格式数据到这个文件
    f_csv = csv.DictWriter(f, headers)
    # 写入一行（我们用第一行当做表头）
    f_csv.writeheader()
    # 写入多行行（当做数据）
    f_csv.writerows(rows)

"""
表頭數據需要對應字典中的key
"""