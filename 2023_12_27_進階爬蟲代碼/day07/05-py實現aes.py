from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

# 生成随机密钥
key = get_random_bytes(16)

# 创建AES对象
cipher = AES.new(key, AES.MODE_EAX)

# 要加密的数据
data = b"Hello World!"

# 加密
cipher_text, tag = cipher.encrypt_and_digest(data)

# 解密
cipher_decryption = AES.new(key, AES.MODE_EAX, cipher.nonce)
plain_text = cipher_decryption.decrypt_and_verify(cipher_text, tag)