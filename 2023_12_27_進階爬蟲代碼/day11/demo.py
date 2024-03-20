import json

# python json.dumps 数据会进行编码默認

aa = json.dumps({"SearchKeyword":"复试 仿真模拟","PageIndex":4,"PageSize":20})
print(aa)

aa = json.dumps({"SearchKeyword":"复试 仿真模拟","PageIndex":4,"PageSize":20}, ensure_ascii=False)
print(aa)