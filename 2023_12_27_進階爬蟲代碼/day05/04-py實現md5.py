# py用来实现哈希算法
import hashlib

md5 = hashlib.md5()
md5.update('Frank'.encode('utf-8'))
print(md5.hexdigest())