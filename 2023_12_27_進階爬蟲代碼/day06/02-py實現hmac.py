import hmac

def hmac_test1():
    message = 'I love python!'.encode()
    key = b'secret'
    md5 = hmac.new(key, message, digestmod='MD5')
    print(md5.hexdigest())

def hmac_test2():
    key = 'secret'.encode('utf8')
    sha1 = hmac.new(key, digestmod='sha1')
    sha1.update('I love '.encode('utf8'))
    sha1.update('python!'.encode('utf8'))
    print(sha1.hexdigest())


if __name__ == '__main__':
    hmac_test1()
    hmac_test2()