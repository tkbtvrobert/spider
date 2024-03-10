import time
from retrying import retry

num = 1


# 主要作用是设置一个模块的最大重试次数而已
@retry(stop_max_attempt_number=3)
def test():
    global num
    print(f'num={num}')
    num += 1
    time.sleep(1)
    for i in 100:
        print('i', i)


if __name__ == '__main__':
    try:
        test()
    except Exception as e:
        print('程序異常:', e)
    else:
        print('沒有異常')
